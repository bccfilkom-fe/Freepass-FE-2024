import { Link } from "react-router-dom";
import Button from "./Button";
import InputSearch from "./InputSearch";
import musixLogo from "@assets/icons/musix-logo.png";

const Navbar = ({ logout }: { logout: () => void }) => {
  return (
    <nav className="container flex justify-between py-4 items-center">
      <Link to="/" className="flex items-center gap-4">
        <img src={musixLogo} alt="logo" className="w-10 h-10"/>
        <h3>Musix</h3>
      </Link>
      <InputSearch />
      <Button onClick={logout} variant="ghost" size="small" className="hidden lg:block">
        Logout
      </Button>
    </nav>
  );
};

export default Navbar;
