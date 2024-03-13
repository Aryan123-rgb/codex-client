import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useGetUserDetailsQuery, useLogoutMutation } from "@/redux/slices/api";
import { useEffect } from "react";
import { updateCurrentUser, updateIsLoggedIn } from "@/redux/slices/userSlice";
import { useToast } from "./ui/use-toast";

function Header() {
  const { isLoggedIn, currentUser } = useSelector(
    (state: RootState) => state.userReducer
  );
  const { data } = useGetUserDetailsQuery();
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { toast } = useToast();

  useEffect(() => {
    if (data) {
      dispatch(updateCurrentUser(data.data));
      dispatch(updateIsLoggedIn(true));
    }
  }, [data]);

  const handleLogout = async () => {
    try {
      const response = await logout().unwrap();
      dispatch(updateIsLoggedIn(false));
      navigate("/login");
      toast({
        title: response.message,
        variant: "success",
      });
    } catch (error: any) {
      toast({
        title: error.data.message,
        variant: "destructive",
      });
      console.log(error);
    }
  };

  return (
    <nav className="w-full h-[60px] bg-gray-900 text-white p-3 flex justify-between items-center">
      <Link to="/">
        <h2 className="font-bold select-none">CodeX</h2>
      </Link>
      {isLoggedIn ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="mr-2 cursor-pointer">
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
              <DropdownMenuItem onClick={() => navigate("/my-saved-codes")}>
                My Saved Codes
                <DropdownMenuShortcut>&lt;&gt;</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
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
