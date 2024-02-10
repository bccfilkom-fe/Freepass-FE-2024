import { createContext, useContext, useState, useEffect } from "react";

interface AuthContextProps {
  token: string | null;
  handleLogout: () => void;
}
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(() => {
    const storedToken = window.localStorage.getItem("token");
    return storedToken || null;
  });

  const handleLogout = () => {
    setToken(null);
    window.localStorage.removeItem("token");
  };

  useEffect(() => {
    const hash = window.location.hash;
    let newToken = window.localStorage.getItem("token");
    if (!newToken && hash) {
      newToken =
        hash
          .substring(1)
          .split("&")
          .find((element) => element.startsWith("access_token"))
          ?.split("=")[1] ?? "";
      window.location.hash = "";
      window.localStorage.setItem("token", newToken);
      setToken(newToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
