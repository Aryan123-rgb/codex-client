import { Save, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import {
  CompilerSliceStateType,
  updateCodeOutput,
  updateCodeValue,
  updateCurrentLanguage,
} from "@/redux/slices/compilerSlice";
import { RootState } from "@/redux/store";
import { useParams } from "react-router-dom";
import { useLoadCodeQuery, useSaveCodeMutation } from "@/redux/slices/api";
import { useEffect } from "react";

function SubHeader() {
  const dispatch = useDispatch();
  const { currentLanguage, fullCode } = useSelector(
    (state: RootState) => state.compilerReducer
  );
  const id = useParams().id as string;
  const { data } = useLoadCodeQuery(id);
  const [saveCode] = useSaveCodeMutation();
  console.log(data);

  const language = data?.data.language;
  const code = data?.data.code;

  useEffect(() => {
    if (language === "Python") {
      dispatch(updateCurrentLanguage("python"));

      if (code) {
        dispatch(updateCodeValue(code.python));
      }
    }
  }, [language, data]);

  async function compilePythonCode() {
    try {
      const response = await fetch(
        "http://localhost:4000/code/compile-python-code",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code: fullCode.python }),
        }
      );

      if (!response.ok) {
        console.log(`HTTP error! Status: ${response.status}`);
        return;
      }
      const responseData = await response.json();
      dispatch(updateCodeOutput(responseData));

      const savedCodeResponse = await saveCode({ fullCode, id }).unwrap();
      console.log(savedCodeResponse);
    } catch (error) {
      console.log("Error during fetch:", error);
      // Handle the error as needed
    }
  }

  return (
    <div className="_helper_header h-[50px] bg-black text-white p-2 flex justify-between items-center">
      <div className="__btn_container flex gap-1">
        <Button
          className="flex justify-center items-center gap-1"
          variant="success"
          onClick={compilePythonCode}
        >
          <Save /> Save
        </Button>
        <Button className="flex justify-center items-center gap-1">
          <Share2 /> Share
        </Button>
      </div>
      <div className="flex justify-center items-center gap-1">
        <p>Language: </p>
        <Select
          value={currentLanguage}
          onValueChange={(value) =>
            dispatch(
              updateCurrentLanguage(
                value as CompilerSliceStateType["currentLanguage"]
              )
            )
          }
        >
          <SelectTrigger className="w-[130px] bg-gray-800 outline-none focus:ring-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {language == "Python" ? (
              <SelectItem value="python">Python</SelectItem>
            ) : language === "Javascript" ? (
              <SelectItem value="javascript">Javascript</SelectItem>
            ) : (
              <>
                {" "}
                <SelectItem value="html">HTML</SelectItem>
                <SelectItem value="css">CSS</SelectItem>
                <SelectItem value="javascript">Javascript</SelectItem>
              </>
            )}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default SubHeader;
