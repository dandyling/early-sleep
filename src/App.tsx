import { useState } from "react";
import teddyBear from "./assets/teddy-bear.svg";
import ducky from "./assets/ducky.webp";
import hairDryer from "./assets/hair-dryer.png";
import toothbrush from "./assets/toothbrush.png";
import prayer from "./assets/prayer.webp";
import storyBook from "./assets/story-book.webp";
import sleep from "./assets/sleep.webp";
import "./App.css";

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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {data.map((item) => (
          <img src={item.src} alt={item.alt} />
        ))}
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
