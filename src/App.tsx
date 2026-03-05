import { useState } from "react";
import hamsterGif from "./assets/Cry Crying GIF by Sad Hamster.gif";
import catGif from "./assets/Cat Moving GIF.gif";
import texts from "./noButtonText";

const App = () => {
  const [sizeNo, setSizeNo] = useState(1);
  const [sizeYes, setSizeYes] = useState(1);
  const [positionNo, setPositionNo] = useState({ x: 0, y: 0 });
  const [textNoIndex, setTextNoIndex] = useState(0);

  const maxX = window.innerWidth;
  const maxY = window.innerHeight;

  const handleClickA = () => {
    setSizeNo((prev) => Math.max(prev - 0.1, 0.4));
    setSizeYes((prev) => Math.min(prev + 0.1, 1.5));
    setTextNoIndex((prev) => (prev + 1) % texts.length);

    if (sizeNo <= 0.5) {
      setPositionNo({
        x: Math.random() * maxX - maxX / 3,
        y: Math.random() * maxY - maxY / 3,
      });
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center gap-5">
      <h1 className="text-white text-6xl">Will u miss me</h1>
      <img src={catGif} alt="cat gif" className="w-64" />

      <div className="flex gap-10">
        <button
          onClick={handleClickA}
          className="bg-green-600 w-70 h-20 text-2xl rounded-lg text-white"
          style={{ transform: `scale(${sizeYes})` }}
        >
          of course nhớ chứ :)))
        </button>
        <button
          onClick={handleClickA}
          className="bg-red-600 w-70 h-20 text-2xl rounded-lg text-white"
          style={{
            transform: `scale(${sizeNo}) translate(${positionNo.x}px, ${positionNo.y}px)`,
          }}
        >
          {texts[textNoIndex]}
        </button>
      </div>
    </div>
  );
};

export default App;
