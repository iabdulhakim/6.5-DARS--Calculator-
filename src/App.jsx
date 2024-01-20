import { useState } from "react";

const numbers = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, ".", 0, "/", "x"] ;

// const result = [1, 2]


function App() {
  const [result, setResult] = useState([]);

  const handleNumber = (num) => {
    setResult([...result, num]);
  };


  const handleClear = () => {
    if (result.length > 0) {
      setResult(result.slice(0, result.length - 1));
    } 
  };
  return (
    <div className="container">
      <div className="header">
        <a href="">calc</a>
        <p>theme</p>
      </div>
      <div className="header-num">{result}</div>
      <div className="numbers">
        {numbers.map(number => (
          <button onClick={() => handleNumber(number)} key={number}>{number}</button>
        ))}
        <button onClick={handleClear} id="del">Del</button>
        
      </div>
      <div className="assistant">
        <a id="reset" href="#">reset</a>
        <a id="equal" href="#">=</a>
      </div>
    </div>
  )
}


export default App;