import React, { useState, useEffect } from "react";

const TypingText = () => {
  const fullText = "Hi, I am Chandra Kanta Koirala";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    let timer;

    if (!pause) {
      timer = setTimeout(() => {
        if (!deleting) {
          setText(fullText.substring(0, index + 1));
          setIndex(index + 1);
          if (index + 1 === fullText.length) {
            setPause(true);
            setTimeout(() => setPause(false), 2000); // Pause before deleting
            setDeleting(true);
          }
        } else {
          setText(fullText.substring(0, index - 1));
          setIndex(index - 1);
          if (index - 1 === 0) {
            setPause(true);
            setTimeout(() => setPause(false), 1000); // Pause before typing again
            setDeleting(false);
          }
        }
      }, 150);
    }

    return () => clearTimeout(timer);
  }, [index, deleting, pause, fullText]);

  return (
    <h1
      style={{
        fontFamily: "monospace",
        whiteSpace: "nowrap",
        opacity: text ? 1 : 0.5,
        transition: "opacity 0.5s",
      }}
    >
      {text}
      <span
        style={{
          borderRight: "2px solid",
          marginLeft: "2px",
          animation: "blink 1s step-start infinite",
        }}
      ></span>
      <style>{`
        @keyframes blink {
          50% { border-color: transparent; }
        }
      `}</style>
    </h1>
  );
};

export default TypingText;
