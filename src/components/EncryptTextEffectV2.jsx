import { useEffect, useRef, useState } from "react";
import {
  CHARACTERS,
  CYCLE_PER_CHARACTER,
  DELAY_TIME,
  SHUFFLE_TIME,
} from "../utils/constants";

const EncryptTextEffectV2 = ({ children }) => {
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);
  const [text, setText] = useState("");
  const wordPairs = [];

  const words = children.split(" ");
  for (let i = 0; i < words.length; i += 2) {
    wordPairs.push(words.slice(i, i + 2).join(" "));
  }

  let pairIndex = 0;

  const scrambleText = () => {
    let scramblePosition = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = wordPairs[pairIndex]
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

      if (
        scramblePosition >=
        wordPairs[pairIndex].length * CYCLE_PER_CHARACTER
      ) {
        scramblePosition = 0;
        clearInterval(intervalRef.current);

        timeoutRef.current = setTimeout(() => {
          pairIndex = (pairIndex + 1) % wordPairs.length;
          if (pairIndex === 0) {
            setText("");
          } else {
            setText(wordPairs[pairIndex - 1]);
          }
          scrambleText();
        }, DELAY_TIME);
      }
    }, SHUFFLE_TIME);
  };

  useEffect(() => {
    scrambleText();
    return () => {
      clearInterval(intervalRef.current);

      clearTimeout(timeoutRef.current);
    };
  }, []);

  return <span className="text-xs">{text}</span>;
};

export default EncryptTextEffectV2;
