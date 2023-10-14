import { useState } from "react";
import "./RadioButtons.css";

const RadioButton = ({ active, disabled, children, onClick }) => {
  return (
    <button
      className={
        active
          ? "rb-default rb-active"
          : disabled
          ? "rb-default rb-disabled"
          : "rb-default"
      }

      onClick={onClick}
    >
      {children}
    </button>
  );
};

const RadioButtons = () => {
  const buttonLabels = ["Apple", "Pear", "Orange", "Durian", "Papaya", "Avocado"];
  
  const disbledButton = ["Orange", "Durian"];

  const [currentlyActiveButton, setCurrentlyActiveButton] = useState("Apple");

  return (
    <div>
      {buttonLabels && buttonLabels.map((btnName) => (
        <RadioButton
          active={currentlyActiveButton === btnName}
          disabled={disbledButton.includes(btnName)}
          onClick={() => {
            if (!disbledButton.includes(btnName)){
              setCurrentlyActiveButton(btnName)
            }
            
          }}
        >
          {btnName}
        </RadioButton>
      ))}
    </div>
  );
};

export default RadioButtons;
