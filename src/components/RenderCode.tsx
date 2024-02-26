import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function RenderCode() {
  const { fullCode, currentLanguage, codeOutput } = useSelector(
    (state: RootState) => state.compilerReducer
  );

  const combinedCode = `<html><style>${fullCode.css}</style><body>${fullCode.html}</body><script>${fullCode.javascript}</script></html>`;

  const iframeCode = `data:text/html;charset=utf-8,${encodeURIComponent(
    combinedCode
  )}`;

  const formattedCodeOutput = codeOutput.replace(/\n/g, "<br>");

  return (
    <div className="bg-white h-[calc(100dvh-60px)]">
      {currentLanguage === "python" ? (
        <div
          className="bg-black text-white h-full p-5"
          dangerouslySetInnerHTML={{ __html: formattedCodeOutput }}
        />
      ) : (
        <iframe className="w-full h-full" src={iframeCode} />
      )}
    </div>
  );
}
