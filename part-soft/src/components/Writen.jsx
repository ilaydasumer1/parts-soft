import React, { useState, useEffect } from "react";

function Writen() {
  const textArray = ["The world's best", "Part-Soft", " for Otomotiv Endüstrisi"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentTextIndex < textArray.length - 1) {
        setCurrentTextIndex(currentTextIndex + 1);
      }
    }, 1000); // Metinlerin ne sıklıkla değişeceğini burada ayarlayabilirsiniz.

    return () => clearTimeout(timer);
  }, [currentTextIndex, textArray]);

  return (
    <div className="writen">
      <h1>{textArray[currentTextIndex]}</h1>
    </div>
  );
}

export default Writen;
