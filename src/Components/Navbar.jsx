import { NavLinkItem } from "./NavLink";
import { useGame } from "../helpers/useGameContext";

export function Navbar() {
  const { isGameCompleted } = useGame();
  return isGameCompleted ? (
    <div className="w-full absolute flex justify-between border-b border-b-[#1E2D3D] text-[#607B96] divide-x divide-[#1E2D3D] select-none animate-slideDown">
      <div className="flex w-full  ">
        <div className="w-2/12 p-3 flex items-center" role="button">
          <p>fabio-simonelli</p>
        </div>
        <NavLinkItem label={"_hello"} redirectTo={"/home"} />
        <NavLinkItem label={"_about-me"} redirectTo={"/about"} />
        <NavLinkItem label={"_projects"} redirectTo={"/projects"} />
      </div>
      <div className="px-4 flex items-center shrink-0" role="button">
        <p>contact-me</p>
      </div>
    </div>
  ) : null;
}
