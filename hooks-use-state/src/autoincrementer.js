import { useState } from "react";

const AutoIncrementer = () => {
  const [counter, setCounter] = useState(0); 
  
  const autCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Click Button to Increase Count : {counter}</h1>
      <button onClick={autCounter}>Click me</button>
    </div>
  );
};

export default AutoIncrementer;
