import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  const techData = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      alt: "HTML, CSS, JS",
      title: "HTML, CSS, JS",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      alt: "Javascript",
      title: "Javascript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
      alt: "C++",
      title: "C++",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      alt: "Java",
      title: "Java",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      alt: "Python",
      title: "Python",
    },
  ];
  return (
    <div className="w-full h-[calc(100vh-60px)] text-white flex justify-center items-center flex-col gap-3">
      <h1 className="text-6xl font-bold text-center">Codex Compiler</h1>
      <p className="text-gray-500 text-center">
        Compiler HTML, CSS, JavaScript Code on the go and share it with your
        friends
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {techData.map((tech, index) => (
          <Dialog>
            <DialogTrigger asChild>
              <div
                key={index}
                className="border border-white p-4 rounded-md shadow-md cursor-pointer"
              >
                <img
                  src={tech.src}
                  alt={tech.alt}
                  style={{ width: "150px", height: "150px" }}
                />
                <h2 className="text-xl font-bold mb-2 text-center">
                  {tech.title}
                </h2>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-2xl">{tech.title}</DialogTitle>
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
                  />
                </div>
              </div>
              <DialogFooter>
                  <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
