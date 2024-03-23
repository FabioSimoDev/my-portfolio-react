import PropTypes from "prop-types";
import AnimatedText from "../common/AnimatedText";
import AnimText from "../common/Prova";
export function PersonalPresentation({ texts }) {
  return (
    <div>
      <p className="ps-2">Hi all. I am</p>
      <p className="lg:text-7xl text-6xl leading-none">Fabio Simonelli</p>
      <p className="accent-green lg:secondary ps-1 drop-shadow [font-size:_clamp(1.3rem,1.3vw,1.875rem)]">
        &gt; <span> </span>
        {/* <AnimatedText texts={texts} isTypeByLetter={true} duration={100} /> */}
        <AnimText />
      </p>
    </div>
  );
}

PersonalPresentation.propTypes = {
  texts: PropTypes.array
};
