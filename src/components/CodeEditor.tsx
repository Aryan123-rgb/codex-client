import { updateCodeValue } from "@/redux/slices/compilerSlice";
import { RootState } from "@/redux/store";
import { tags as t } from "@lezer/highlight";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { draculaInit } from "@uiw/codemirror-theme-dracula";
import CodeMirror from "@uiw/react-codemirror";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

function CodeEditor() {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerReducer.currentLanguage
  );
  
  const fullCode = useSelector(
    (state: RootState) => state.compilerReducer.fullCode[currentLanguage]
  );

  const onChange = useCallback((val: string) => {
    dispatch(updateCodeValue(val));
  }, []);

  return (
    <CodeMirror
      value={fullCode}
      height="calc(100vh - 60px - 50px)"
      extensions={[loadLanguage(currentLanguage)!]}
      onChange={onChange}
      style={{ fontSize: "16px" }}
      theme={draculaInit({
        settings: {
          caret: "#c6c6c6",
          fontFamily: "monospace",
        },
        styles: [{ tag: t.comment, color: "#6272a4" }],
      })}
    />
  );
}

export default CodeEditor;
