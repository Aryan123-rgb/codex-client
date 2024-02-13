import { langs } from "@uiw/codemirror-extensions-langs";
import { tags as t } from "@lezer/highlight";
import { draculaInit } from "@uiw/codemirror-theme-dracula";
import CodeMirror from "@uiw/react-codemirror";
import { useCallback, useState } from "react";

function CodeEditor() {
  const [value, setValue] = useState("console.log('hello world!');");
  const onChange = useCallback((val: string) => {
    console.log("val:", val);
    setValue(val);
  }, []);
  return (
    <CodeMirror
      value={value}
      height="100vh"
      extensions={[langs.javascript()]}
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