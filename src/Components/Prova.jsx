import { TypeAnimation } from "react-type-animation";
import texts from "../Utils/homepageTexts";
import { useTypewriter } from "../helpers/useTypeWriter";

const AnimText = () => {
  const [text, { isType, isDelay, isDelete, isDone }] = useTypewriter({
    words: texts,
    loop: 0,
    delaySpeed: 3000,
    typeSpeed: 100,
  });
  console.log(text);

  return (
    <>
      <span className={`inline-flex items-center duration-300 `}>
        {text}{" "}
        <div
          className={`ml-2 h-3 w-3 rounded-full bg-white duration-500 ${
            !isDelay ? "" : "h-0 w-0 opacity-0"
          }`}
        />
      </span>
    </>
  );
};

export default AnimText;
