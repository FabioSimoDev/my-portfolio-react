import SideBar from "./Sidebar";
import Explorer from "../editor/Explorer";
import Editor from "../editor/Editor";
import { useSearchParams } from "react-router-dom";

const AboutMe = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || null;
  return (
    <div className="w-screen h-screen flex">
      <SideBar page={page} />
      <div className="w-full h-full flex md:flex-row flex-col">
        <Explorer page={page} />
        <Editor page={page} />
      </div>
    </div>
  );
};

export default AboutMe;
