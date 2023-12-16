import React, { useState } from 'react'
import "./App.css"
import styles from "./App.module.css"
import ButtonsData from './ButtonsData'



const App = () => {

  const calculatorArray = ["1","2","3","+","4","5","6","-","7","8","9","*","C","0","=","/"]

    const [calcValue, setCalcValue] = useState("");

    let onButtonClick = (buttonText) => {
      console.log(buttonText);

      if (buttonText === "C") {
        setCalcValue("");
      } else if (buttonText === "=") {
        const result = eval(calcValue)
        setCalcValue(result)
      } else {
        const newDisplayValue = calcValue + buttonText;
        setCalcValue(newDisplayValue);
      }
    };

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <input
          className={styles.display}
          id="display"
          type="text"
          value={calcValue}
          readOnly
        />
        <div className="button-container">
          <ButtonsData items={calculatorArray} onButtonClick={onButtonClick} />
        </div>
      </div>
    </div>
  );
}

export default App