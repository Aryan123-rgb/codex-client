import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useCreateNewReplMutation } from "@/redux/slices/api";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const techData = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      alt: "HTML, CSS, JS",
      language: "HTML, CSS, JS",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      alt: "Javascript",
      language: "Javascript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
      alt: "C++",
      language: "C++",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      alt: "Java",
      language: "Java",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      alt: "Python",
      language: "Python",
    },
  ];
  const { isLoggedIn } = useSelector((state: RootState) => state.userReducer);
  const [createNewRepl] = useCreateNewReplMutation();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");

  const handleCreateRepl = async () => {
    if (!isLoggedIn) {
      navigate("/login");
      toast({
        title: "Please login first",
        variant: "destructive",
      });
      return;
    }
    const response = await createNewRepl({ language, title }).unwrap();
    navigate(`/my-saved-codes/${response.data._id}`);
  };
  return (
    <div className="w-full h-[calc(100vh-60px)] text-white flex justify-center items-center flex-col gap-3">
      <h1 className="text-6xl font-bold text-center">Codex Compiler</h1>
      <p className="text-gray-500 text-center">
        Compiler HTML, CSS, JavaScript Code on the go and share it with your
        friends
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {techData.map((tech, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div
                key={index}
                className="border border-white p-4 rounded-md shadow-md cursor-pointer"
                onClick={() => setLanguage(tech.language)}
              >
                <img
                  src={tech.src}
                  alt={tech.alt}
                  style={{ width: "150px", height: "150px" }}
                />
                <h2 className="text-xl font-bold mb-2 text-center">
                  {tech.language}
                </h2>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-2xl">{tech.language}</DialogTitle>
                <DialogDescription>
                  Give a unique name to your repl
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-2 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-center">
                    Title
                  </Label>
                  <Input
                    id="name"
                    placeholder="Name Your Repl"
                    className="col-span-3"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleCreateRepl} type="submit">
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
