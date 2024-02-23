import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

function Header() {
  const { isLoggedIn } = useSelector((state: RootState) => state.userReducer);
  const navigate = useNavigate();
  return (
    <nav className="w-full h-[60px] bg-gray-900 text-white p-3 flex justify-between items-center">
      <Link to="/">
        <h2 className="font-bold select-none">CodeX</h2>
      </Link>
      <ul className="flex gap-2">
        <li>
          <Button variant="secondary" onClick={() => navigate("/login")}>
            Log In
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
