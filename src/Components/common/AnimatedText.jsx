import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useTypingEffect } from "../../helpers/useTypingEffect";

const AnimatedText = ({
  texts,
  isTypeByLetter = false,
  duration = 200,
  className
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [fadeText, setFadeText] = useState(true);
  const [fadeCircle, setFadeCircle] = useState(true);
  const textToShow = useTypingEffect(
    texts[textIndex],
    duration,
    isTypeByLetter
  );

  const timeToTypeText =
    (isTypeByLetter
      ? texts[textIndex].split("").length
      : texts[textIndex].split(" ").length) * duration;

  useEffect(() => {
    let start;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      if (elapsed > timeToTypeText + 800) {
        setFadeCircle(false);
      }

      if (elapsed > timeToTypeText + 2000) {
        setFadeText(false);
      }

      if (elapsed > timeToTypeText + 2300) {
        setTextIndex((prevIndex) =>
          prevIndex >= texts.length - 1 ? 0 : prevIndex + 1
        );
        setFadeCircle(true);
        setFadeText(true);
        cancelAnimationFrame(animationFrameId);
        return; // Stop the animation loop
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [textIndex, texts, timeToTypeText]);

  return (
    <>
      <span
        className={`inline-flex items-center duration-300 ${
          fadeText ? "opacity-1 translate-y-0" : "translate-y-2 opacity-0"
        } ${className}`}
        key={textIndex}
      >
        {textToShow}{" "}
        <div
          className={`ml-2 h-3 w-3 rounded-full bg-white duration-300 ${
            fadeCircle ? "" : "h-0 w-0 opacity-0"
          }`}
        />
      </span>
    </>
  );
};

AnimatedText.propTypes = {
  className: PropTypes.string,
  duration: PropTypes.number,
  isTypeByLetter: PropTypes.bool,
  texts: PropTypes.array
};

export default AnimatedText;
