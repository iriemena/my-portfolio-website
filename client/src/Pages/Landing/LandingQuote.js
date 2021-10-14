import React, { useEffect, useState } from "react";

function LandingQuote() {
  const [quote, setQuote] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const getQuote = async () => {
      try {
        const quote = await fetch("https://api.quotable.io/random");
        const response = await quote.json();
        setQuote(response);
        setTimeout(getQuote, 8000);
      } catch (error) {
        setHasError(true);
      }
    };
    getQuote();
  }, []);

  return (
    <div className="quote">
      {`${hasError ? "" : quote.content} `}{" "}
      <span
        style={{
          fontStyle: "italic",
          color: "darkred",
          fontSize: "10px",
        }}
      >{`${hasError ? "" : quote.author}`}</span>
    </div>
  );
}

export default LandingQuote;
