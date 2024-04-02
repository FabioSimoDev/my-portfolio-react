import { useSearchParams } from "react-router-dom";
import Explorer from "../editor/Explorer";
import Editor from "../editor/Editor";

const Project = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || null;
  return (
    <div className="w-screen h-dvh flex">
      <div className="w-full h-full flex md:flex-row flex-col">
        <Explorer page={page} className={"md:w-[16.8rem]"} />
        <Editor page={page} />
      </div>
    </div>
  );
};

export default Project;
