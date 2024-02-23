import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
  const { isLoggedIn, currentUser } = useSelector(
    (state: RootState) => state.userReducer
  );
  const navigate = useNavigate();
  return (
    <nav className="w-full h-[60px] bg-gray-900 text-white p-3 flex justify-between items-center">
      <Link to="/">
        <h2 className="font-bold select-none">CodeX</h2>
      </Link>
      {isLoggedIn ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="mr-2">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel className="text-xl">
              {currentUser.username}
            </DropdownMenuLabel>
            <DropdownMenuLabel className="text-sm font-medium">
              {currentUser.email}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                My Saved Codes
                <DropdownMenuShortcut>&lt;&gt;</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Logout
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <ul className="flex gap-2">
          <li>
            <Button variant="secondary" onClick={() => navigate("/login")}>
              Log In
            </Button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Header;
