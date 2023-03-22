import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const { label, onChange, errorMessage, id, ...inputProps } = props;
  const [focused, setFocused] = useState(false);
  const handleFocused = (e) => {
    setFocused(true);
  };
  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocused}
        onFocus={() => inputProps.name === "confirmPasword" && setFocused(true)}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
