import Navbar from "@components/Navbar";
import Sidebar from "@components/Sidebar";
import { useAuth } from "@hooks/UseAuth";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Login from "./Login";
import Footer from "@components/Footer";

export default function Layout() {
  const { token, handleLogout } = useAuth();
  useEffect(() => {}, [token]);

  return (
    <>
      {token ? (
        <>
          <Navbar logout={handleLogout} />
          <div className="flex items-start">
            <Sidebar logout={handleLogout} />
            <main className="container">
              <Outlet />
            </main>
          </div>
          <Footer />
        </>
      ) : (
        <Login />
      )}
    </>
  );
}
