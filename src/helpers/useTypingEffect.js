import { useEffect, useState } from "react";

export const useTypingEffect = (text, duration, isTypeByLetter) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const items = isTypeByLetter ? text.split("") : text.split(" ");

  useEffect(() => {
    setCurrentPosition(0); // Reset position whenever the text changes
  }, [text]);

  useEffect(() => {
    if (currentPosition >= items.length) return; // Exit if we've displayed all items

    let start;
    let animationFrameId;

    const step = (timestamp) => {
      if (start === undefined) start = timestamp;
      const elapsed = timestamp - start;

      if (elapsed >= duration) {
        setCurrentPosition((prevPosition) => {
          if (prevPosition < items.length) {
            start = timestamp; // Reset start time for the next position
            return prevPosition + 1;
          } else {
            // If we've reached the end, stop the animation
            cancelAnimationFrame(animationFrameId);
            return prevPosition;
          }
        });
      }

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [currentPosition, items, duration]);

  return items.slice(0, currentPosition).join(isTypeByLetter ? "" : " ");
};
