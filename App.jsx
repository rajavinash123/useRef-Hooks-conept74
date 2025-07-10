import { useRef, useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const val = useRef(0);
  const btnRef = useRef();

  function handlerIncrese() {
    val.current = val.current + 1;
    console.log("value of val:", val.current);
    setCount(count + 1);
  }

  function changeColor() {
    btnRef.current.style.backgroundColor = "red";
  }

  useEffect(() => {
    console.log("me free se render ho gaya");
  });

  return (
    <>
      <div>
        <button ref={btnRef} onClick={handlerIncrese}>
          increse btn
        </button>
        <br />
        <button onClick={changeColor}>chnage color buttton</button>
        <br />
        count: {count}
      </div>
    </>
  );
}

export default App;
