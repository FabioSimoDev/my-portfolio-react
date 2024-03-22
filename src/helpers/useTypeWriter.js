import { useRef, useEffect, useCallback, useReducer, useState } from "react";
import { typingReducer } from "../reducers/typingReducer";

export function useTypewriter({
  words,
  loop = 1,
  typeSpeed = 80,
  deleteSpeed = 50,
  delaySpeed = 1500,
  onLoopDone,
  onType,
  onDelete,
  onDelay,
}) {
  const [text, setText] = useState("");
  const animationFrameRef = useRef();
  const currentWordIndex = useRef(0);
  const isType = useRef(true);
  const isDelete = useRef(false);
  const isDelay = useRef(false);
  const isDone = useRef(false);
  const loopCount = useRef(0);
  const charIndex = useRef(0);

  const [animationState, setAnimationState] = useState({
    isType: true,
    isDelay: false,
    isDelete: false,
    isDone: false,
  });

  const syncAnimationState = useCallback(() => {
    setAnimationState({
      isType: isType.current,
      isDelay: isDelay.current,
      isDelete: isDelete.current,
      isDone: isDone.current,
    });
  }, []);

  const handleTyping = useCallback(() => {
    const currentWord = words[currentWordIndex.current];
    if (isType.current && charIndex.current <= currentWord.length) {
      setText(currentWord.slice(0, charIndex.current));
      charIndex.current += 1;
      onType && onType();
      animationFrameRef.current = requestAnimationFrame(() =>
        setTimeout(handleTyping, typeSpeed)
      );
    } else if (!isType.current && charIndex.current > 0) {
      setText((prevText) => prevText.slice(0, -1));
      charIndex.current -= 1;
      onDelete && onDelete();
      animationFrameRef.current = requestAnimationFrame(() =>
        setTimeout(handleTyping, deleteSpeed)
      );
    } else if (isType.current) {
      isType.current = false;
      isDelete.current = true;
      isDelay.current = true;
      syncAnimationState();
      onDelay && onDelay();
      setTimeout(() => {
        isDelay.current = false;
        animationFrameRef.current = requestAnimationFrame(handleTyping);
      }, delaySpeed);
    } else {
      isType.current = true;
      isDelete.current = false;
      currentWordIndex.current = (currentWordIndex.current + 1) % words.length;
      if (currentWordIndex.current === 0 && ++loopCount.current === loop) {
        isDone.current = true;
        onLoopDone && onLoopDone();
        cancelAnimationFrame(animationFrameRef.current);
        return;
      }
      animationFrameRef.current = requestAnimationFrame(handleTyping);
      console.log(isDelay);
    }
  }, [
    words,
    typeSpeed,
    deleteSpeed,
    delaySpeed,
    onLoopDone,
    onType,
    onDelete,
    onDelay,
  ]);

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(handleTyping);
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [handleTyping]);

  return [
    text,
    {
      isType: isType.current,
      isDelay: isDelay.current,
      isDelete: isDelete.current,
      isDone: isDone.current,
    },
  ];
}

export default useTypewriter;
