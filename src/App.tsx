import { useEffect, useState } from "react";
import { texts, gif } from "./noButtonText";
import raccoonHeart from "./assets/Night Sleep GIF by 644.gif";

const App = () => {
  const [mainText, setMainText] = useState("Will u miss me");
  const [sizeNo, setSizeNo] = useState(1);
  const [sizeYes, setSizeYes] = useState(1);
  const [positionNo, setPositionNo] = useState({ x: 0, y: 0 });
  const [textNoIndex, setTextNoIndex] = useState(0);
  const [stop, setStop] = useState(false);
  const [hide, setHide] = useState(false);
  const [gifIndex, setGifIndex] = useState(0);
  const [mainGif, setMainGif] = useState(gif[gifIndex]);

  const maxX = window.innerWidth;
  const maxY = window.innerHeight;

  const handleClickA = () => {
    setSizeNo((prev) => Math.max(prev - 0.1, 0.4));
    setTextNoIndex((prev) => (prev + 1) % texts.length);
    setMainGif(gif[gifIndex + 1]);
    setMainText(texts[textNoIndex + 1]);
    setGifIndex((prev) => (prev + 1) % gif.length);
    setSizeYes((prev) => Math.min(prev + 0.1, 1.8));

    if (sizeNo <= 0.5) {
      setPositionNo({
        x: Math.random() * (maxX - maxX / 5),
        y: Math.random() * (maxY - maxY / 5),
      });
    }
  };

  const handleClickB = () => {
    setMainText("Hihi I'll miss u too :33");
    setMainGif(raccoonHeart);
    setStop(true);
    setHide(true);
  };

  useEffect(() => {
    if (textNoIndex === texts.length - 1) {
      setStop(true);
      const handleMouseMove = (e: MouseEvent) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const offset = 35;

        // cai logic nay co van de
        setPositionNo((prev) => ({
          x: mouseX < maxX / 2 ? prev.x + offset : prev.x - offset,
          y: mouseY < maxY / 2 ? prev.y + offset : prev.y - offset,
        }));
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [textNoIndex]);

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center gap-15">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-white text-6xl">{mainText}</h1>
        <img src={mainGif} alt="cat gif" className="w-64" />
      </div>

      <div className="flex gap-10">
        <button
          onClick={handleClickB}
          className="bg-green-600 w-70 h-20 text-2xl rounded-lg text-white transition-all duration-200"
          style={{
            transform: `scale(${sizeYes})`,
          }}
        >
          Of course nhớ chứ :)))
        </button>
        <button
          onClick={handleClickA}
          disabled={stop}
          className={`bg-red-600 w-70 h-20 text-2xl rounded-lg text-white transition-all duration-75 ${hide ? "hidden" : ""} `}
          style={{
            transform: `scale(${sizeNo}) translate(${positionNo.x}px, ${positionNo.y}px)`,
          }}
        >
          Nope
        </button>
      </div>
    </div>
  );
};

export default App;
