import { useEffect, useState } from "react";

function Typewriter({ text, speed = 50 }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setDisplayed(text.slice(0, index));
      if (index >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayed}</span>;
}

export default Typewriter;
