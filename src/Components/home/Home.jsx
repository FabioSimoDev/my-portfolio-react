import { GameContainer } from "../game/GameContainer";
import { PersonalPresentation } from "./PersonalPresentation";
import SyntaxHighlighter from "../common/SyntaxHighlighter";

const Home = () => {
  return (
    <div className="flex min-h-full flex-col items-center justify-center py-2">
      <h1 className="text-5xl absolute top-6 font-extrabold text-violet-500 hidden">
        Animated Blurry Background Shapes
      </h1>
      <div className="w-full grow-[0.5] lg:grow-0 max-w-xl lg:max-w-full min-[1920px]:max-w-max min-h-52 flex lg:items-center justify-center lg:px-52 px-4 relative lg:static lg:space-x-32">
        <div className="z-10 mx-auto lg:h-full flex flex-col lg:justify-center justify-between w-min sm:w-full gap-16">
          <PersonalPresentation />
          <div className="lg:space-y-1 space-y-5">
            <SyntaxHighlighter
              code={"// complete the game to continue"}
              className={
                "hidden lg:block [font-size:_clamp(0.8rem,0.9vw,1.3rem)]"
              }
            />
            <SyntaxHighlighter
              code={"// find my profile on Github:"}
              className={"[font-size:_clamp(0.8rem,0.9vw,1.3rem)] truncate"}
            />
            <SyntaxHighlighter
              code={"const githubLink = 'https://github.com/FabioSimoDev'"}
              className={"[font-size:_clamp(0.8rem,0.9vw,1.3rem)] lg:truncate"}
              redirectTo={"https://github.com/FabioSimoDev"}
            />
          </div>
        </div>
        <div className="flex items-center lg:w-6/12 justify-end">
          <GameContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
