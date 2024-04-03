import socials from "../../Utils/socials";
import { GrShare } from "react-icons/gr";

function SocialsDisplay() {
  return (
    <ul className="px-5 space-y-2">
      {socials.map((social) => (
        <li key={`${social.label}-link`}>
          <a
            href={social.link}
            className="flex gap-2 items-center hover:text-white text-text-secondary transition-colors duration-300"
            target="_blank"
          >
            <GrShare />
            {social.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialsDisplay;
