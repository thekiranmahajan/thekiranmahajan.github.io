import { useEffect, useRef, useState } from "react";
import {
  CHARACTERS,
  CYCLE_PER_CHARACTER,
  SHUFFLE_TIME,
} from "../utils/constants";

const EncryptTextEffect = ({ children }) => {
  const intervalRef = useRef(null);
  const [text, setText] = useState(children);

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const scrambleText = () => {
    let scramblePosition = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = children
        .split("")
        .map((char, index) => {
          if (scramblePosition / CYCLE_PER_CHARACTER > index) {
            return char;
          }
          const randomCharIndex = Math.floor(Math.random() * CHARACTERS.length);
          const randomChar = CHARACTERS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      scramblePosition++;

      if (scramblePosition >= children.length * CYCLE_PER_CHARACTER) {
        stopScrambleText();
      }
    }, SHUFFLE_TIME);
  };

  const stopScrambleText = () => {
    clearInterval(intervalRef.current);
    setText(children);
  };

  return (
    <span onMouseEnter={scrambleText} onMouseLeave={stopScrambleText}>
      {text}
    </span>
  );
};

export default EncryptTextEffect;
