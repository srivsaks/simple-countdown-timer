import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const targetTime = new Date("February 01 2023 00:45:00").getTime();
  const [time, setTime] = useState({ days: 0, hour: 0, mint: 0, sec: 0 });

  const calcTime = () => {
    const currTime = new Date().getTime();
    const diff = targetTime - currTime;
    const days = Math.floor(diff / (24 * 60 * 60 * 1000));
    let remainingTime = diff % (24 * 60 * 60 * 1000);
    const hour = Math.floor(remainingTime / (60 * 60 * 1000));
    remainingTime = diff % (60 * 60 * 1000);
    const mint = Math.floor(remainingTime / (60 * 1000));
    remainingTime = diff % (60 * 1000);
    const sec = Math.floor(remainingTime / 1000);
    setTime({ days, hour, mint, sec });
  };

  useEffect(() => {
    const id = setInterval(() => calcTime(), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="App">
      0{time.days}:0{time.hour}:0{time.mint}:{time.sec}
    </div>
  );
}
