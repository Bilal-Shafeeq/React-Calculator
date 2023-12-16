import React from 'react'
import styles from "./ButtonsData.module.css";




const ButtonsData = ({ items, onButtonClick }) => {

  const getButtonClass = (buttonContent) => {
    
    switch (buttonContent) {
      case "+":
      case "-":
      case "*":
      case "/":
        return styles.operatorButton;
      case "C":
        return styles.clearButton;
      default:
        return styles.normalButton;
    }
  };

  return (
    <div>
      {items.map((x) => {
        return (
          <button
            key={x}
            className={getButtonClass(x)}
            onClick={() => onButtonClick(x)}
          >
            {x}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonsData;