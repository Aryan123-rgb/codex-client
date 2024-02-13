import CodeEditor from "@/components/CodeEditor";
import SubHeader from "@/components/SubHeader";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

function Complier() {
  return (
    <ResizablePanelGroup direction="horizontal" className="">
      <ResizablePanel
        defaultSize={40}
        className="h-[calc(100dvh-60px)] min-w-[350px]"
      >
        <SubHeader />
        <CodeEditor />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel
        className="h-[calc(100dvh-60px)] min-w-[650px]"
        defaultSize={60}
      >
        compiler
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default Complier;
