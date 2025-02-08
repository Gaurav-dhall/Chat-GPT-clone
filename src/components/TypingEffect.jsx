import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";


// Typing effect component
const TypingEffect = (props) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Reset the displayed text when the props.response changes
    setDisplayedText("");
    setIndex(0);

    // Typing effect logic
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex < props.response.length) {
          setDisplayedText((prevText) => prevText + props.response[prevIndex]);
          return prevIndex + 1;
        } else {
          clearInterval(intervalId);
          return prevIndex;
        }
      });
    }, 1); // Adjust the speed (milliseconds per letter)

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return <div className="whitespace-pre-wrap">
  <ReactMarkdown>{displayedText}</ReactMarkdown>
</div>;
};

export default TypingEffect;
