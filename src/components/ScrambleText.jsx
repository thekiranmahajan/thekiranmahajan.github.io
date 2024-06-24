import { useEffect, useRef } from "react";

const letters =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%";

const ScrambleText = ({ text }) => {
  const intervalRef = useRef(null);
  const h1Ref = useRef(null);

  useEffect(() => {
    const handleMouseOver = (event) => {
      let iteration = 0;

      clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return event.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("");

        if (iteration >= event.target.dataset.value.length) {
          clearInterval(intervalRef.current);
        }

        iteration += 1 / 3;
      }, 30);
    };

    const h1Element = h1Ref.current;
    h1Element.addEventListener("mouseover", handleMouseOver);

    return () => {
      h1Element.removeEventListener("mouseover", handleMouseOver);
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <h1 ref={h1Ref} data-value={text}>
      {text}
    </h1>
  );
};

export default ScrambleText;
