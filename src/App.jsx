import { useEffect, useState } from "react";
import "./App.css";

let isInitial = true;
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storageCount = localStorage.getItem("count");
    const countData = JSON.parse(storageCount);
    setCount(countData ? countData : 0);
  }, []);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    } else {
      localStorage.setItem("count", count);
    }
  }, [count]);

  const decrementHandler = () => {
    setCount((prevCount) => {
      if (prevCount !== 0) {
        return prevCount - 1;
      } else {
        return prevCount;
      }
    });
  };

  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };

  const resetHandler = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>React Counter Extension</p>
        <p className="btn_box">
          <button onClick={decrementHandler}>-</button>
          <p>count is: {count}</p>
          <button onClick={incrementHandler}>+</button>
        </p>
        <button onClick={resetHandler}>Reset</button>
      </header>
    </div>
  );
}

export default App;
