import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSignupMutation } from "@/redux/slices/api";
import { useToast } from "@/components/ui/use-toast";
import { updateCurrentUser, updateIsLoggedIn } from "@/redux/slices/userSlice";
import { ReloadIcon } from "@radix-ui/react-icons";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  password: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(50),
});

itexport default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [signup, { isLoading }] = useSignupMutation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  async function handleSignup(values: z.infer<typeof formSchema>) {
    try {
      const response = await signup(values).unwrap();
      dispatch(updateCurrentUser(response.data));
      dispatch(updateIsLoggedIn(true));
      //   navigate("/");
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
  }
  return (
    <div className="__signup grid-bg w-full h-[calc(100dvh-60px)] flex justify-center items-center flex-col gap-3">
      <div className="__form_container bg-black border-[1px] py-8 px-8 flex flex-col gap-5 w-[400px]">
        <div className="">
          <h1 className="font-mono text-5xl font-bold text-left mb-2">
            Signup
          </h1>
          <p className=" font-mono text-xl">
            Join the community of expert frontend developers🧑‍💻.
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSignup)}
            className="flex flex-col gap-2"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {isLoading ? (
              <Button disabled>
                <ReloadIcong className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button className="w-full" type="submit">
                Signup
              </Button>
            )}
          </form>
        </Form>
        <small className="text-xs font-mono">
          Already have an account?{" "}
          <Link className=" text-blue-500" to="/login">
            Login
          </Link>
          .
        </small>
      </div>
    </div>
  );
}
