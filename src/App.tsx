import { useState } from "react";
import hamsterGif from "./assets/Cry Crying GIF by Sad Hamster.gif";
import catGif from "./assets/Cat Moving GIF.gif";

const App = () => {
  const [sizeNo, setSizeNo] = useState(1);
  const [sizeYes, setSizeYes] = useState(1);

  const handleClickA = () => {
    setSizeNo((prev) => Math.max(prev - 0.1, 0.3));
    setSizeYes((prev) => prev + 0.1);
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center gap-5">
      <h1 className="text-white text-6xl">Will u miss me</h1>
      <img src={catGif} alt="cat gif" className="w-64" />

      <div className="flex gap-10">
        <button
          onClick={handleClickA}
          className="bg-green-600 w-50 h-20 text-2xl rounded-lg text-white"
          style={{ transform: `scale(${sizeYes})` }}
        >
          of course
        </button>
        <button
          onClick={handleClickA}
          className="bg-red-600 w-50 h-20 text-2xl rounded-lg text-white"
          style={{ transform: `scale(${sizeNo})` }}
        >
          nope
        </button>
      </div>
    </div>
  );
};

export default App;
