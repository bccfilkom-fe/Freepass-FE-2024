import { Link } from "react-router-dom";
import Button from "./Button";
import InputSearch from "./InputSearch";

const Navbar = ({ logout }: { logout: () => void }) => {
  return (
    <nav className="container flex justify-between py-4 items-center">
      <Link to="/">
        <h1>Musix</h1>
      </Link>
      <InputSearch />
      <Button onClick={logout} variant="ghost" size="small">
        Logout
      </Button>
    </nav>
  );
};

export default Navbar;
