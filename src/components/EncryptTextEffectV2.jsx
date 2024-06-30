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
  const pairIndexRef = useRef(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const words = children.split(" ");
    const wordPairs = [];

    for (let i = 0; i < words.length; i += 2) {
      wordPairs.push(words.slice(i, i + 2).join(" "));
    }

    const scrambleText = () => {
      let scramblePosition = 0;

      intervalRef.current = setInterval(() => {
        const scrambled = wordPairs[pairIndexRef.current]
          .split("")
          .map((char, index) => {
            if (scramblePosition / CYCLE_PER_CHARACTER > index) {
              return char;
            }
            const randomCharIndex = Math.floor(
              Math.random() * CHARACTERS.length,
            );
            const randomChar = CHARACTERS[randomCharIndex];

            return randomChar;
          })
          .join("");

        setText(scrambled);
        scramblePosition++;

        if (
          scramblePosition >=
          wordPairs[pairIndexRef.current].length * CYCLE_PER_CHARACTER
        ) {
          scramblePosition = 0;
          clearInterval(intervalRef.current);

          timeoutRef.current = setTimeout(() => {
            pairIndexRef.current =
              (pairIndexRef.current + 1) % wordPairs.length;
            if (pairIndexRef.current === 0) {
              setText("");
            } else {
              setText(wordPairs[pairIndexRef.current - 1]);
            }
            scrambleText();
          }, DELAY_TIME);
        }
      }, SHUFFLE_TIME);
    };
    scrambleText();

    return () => {
      clearInterval(intervalRef.current);

      clearTimeout(timeoutRef.current);
    };
  }, [children]);

  return (
    <span aria-live="polite" aria-label={children}>
      {text}
    </span>
  );
};

export default EncryptTextEffectV2;
