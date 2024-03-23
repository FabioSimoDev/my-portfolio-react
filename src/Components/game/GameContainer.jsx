import Game from "./Game";
export function GameContainer() {
  return (
    <div className="lg:relative w-full max-w-xl h-full">
      <div
        className="absolute -top-0 -left-4 w-72 h-72 bg-[#43D9AD] rounded-full filter blur-3xl opacity-30 lg-opacity-40"
        style={{ transform: "translate3d(0,0,0)" }}
      ></div>
      <div
        className="absolute top-0 -right-4 w-72 h-[30rem] rotate-45 bg-[#4D5BCE] rounded-full filter blur-3xl opacity-30 lg:opacity-40"
        style={{ transform: "translate3d(0,0,0)" }}
      ></div>

      <div className="m-8 relative space-y-4 lg:block hidden">
        <Game />
      </div>
    </div>
  );
}
