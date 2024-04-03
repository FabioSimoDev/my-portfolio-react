import SyntaxHighlighter from "../common/SyntaxHighlighter";
import useContactFormContext from "../../helpers/useContactFormContext";

const CodeShowcase = () => {
  const { form } = useContactFormContext();
  return (
    <div className="grow [height:_calc(100dvh-60px)] md:pt-14 pt-2 overflow-y-hidden hidden md:flex flex-col justify-center px-5">
      <div className="max-w-3xl h-[60%] space-y-10">
        <SyntaxHighlighter
          code={`const message = {\n name: "${form.name}"\n  email: "${form.email}"\n message: "${form.message}"\n}`}
          countLine={true}
          className={"truncate text-text-secondary text-[1.2rem]"}
        />
        <p className="text-text-secondary opacity-20 hover:opacity-50 transition-opacity duration-100">
          demo - syntax highlighter made by me.
        </p>
      </div>
    </div>
  );
};

export default CodeShowcase;
