import "./RadioButtons.css";

const RadioButton = ({ active, disabled, children }) => {
  return (
    <button
      className={active ? "rb-default rb-active" : disabled ? "rb-default rb-disabled" : "rb-default"}
    >
      {children}
    </button>
  );
};

const RadioButtons = () => {
  return (
    <div>
      <RadioButton active>Apple</RadioButton>
      <RadioButton>Pear</RadioButton>
      <RadioButton disabled>Orange</RadioButton>
    </div>
  );
};

export default RadioButtons;
