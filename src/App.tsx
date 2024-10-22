import star from "./assets/star.png";
import teddyBear from "./assets/teddy-bear.svg";
import ducky from "./assets/ducky.webp";
import hairDryer from "./assets/hair-dryer.webp";
import toothbrush from "./assets/toothbrush.webp";
import prayer from "./assets/prayer.webp";
import storyBook from "./assets/story-book.webp";
import sleep from "./assets/sleep.webp";
import goodJob from "./assets/good-job.mp3";
import "./App.css";
import { useState } from "react";
import { cn } from "./lib/utils";

const data: {
  src: string;
  alt: string;
  label: string;
}[] = [
  {
    src: teddyBear,
    alt: "teddy bear",
    label: "Toys Go Back Home Time",
  },
  {
    src: ducky,
    alt: "ducky",
    label: "Bath",
  },
  {
    src: hairDryer,
    alt: "hair dryer",
    label: "Hair Drying",
  },
  {
    src: toothbrush,
    alt: "toothbrush",
    label: "Toothbrush",
  },
  {
    src: prayer,
    alt: "prayer",
    label: "Prayer",
  },
  {
    src: storyBook,
    alt: "story book",
    label: "Storytime",
  },
  {
    src: sleep,
    alt: "sleep",
    label: "Sleep",
  },
];

const audio = new Audio(goodJob);

function App() {
  const [selectedStars, setSelectedStars] = useState(
    Array(data.length).fill(false)
  );

  const handleClick = (i: number) => {
    const newSelectedStars = [...selectedStars];
    newSelectedStars[i] = !newSelectedStars[i];
    setSelectedStars(newSelectedStars);
    if (newSelectedStars[i]) {
      audio.play();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-12 bg-indigo-500 w-screen h-screen p-4">
      <h1 className="text-white text-4xl font-bold">Eryn's Sleeping Game</h1>
      <div className="flex items-center gap-4">
        {data.map((item, i) => (
          <div
            key={item.label}
            className="flex-1 flex flex-col items-center min-h-full h-full gap-4"
          >
            <button className="p-0 bg-transparent flex-1 flex items-center justify-center aspect-square min-w-[100px]">
              <img
                src={star}
                alt={"Star"}
                className={cn(
                  "h-full hover:sepia hover:invert-0",
                  !selectedStars[i] && "invert"
                )}
                onClick={() => handleClick(i)}
              />
            </button>
            <button
              className="flex-[2] flex flex-col items-center min-h-[250px] py-4 px-2 bg-indigo-900 rounded-xl aspect-[1/2]"
              onClick={() => handleClick(i)}
            >
              <div className="flex-1 flex items-center justify-center ">
                <img src={item.src} alt={item.alt} />
              </div>
              <span className="text-pink-300">{item.label}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
