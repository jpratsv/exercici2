import React, { useState } from "react";
import PropTypes from "prop-types";

export default function EntraNumeros({ setArrayNumeros }) {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 0) {
      if (Number(inputValue.trim())) {
        setArrayNumeros((cats) => [...cats, inputValue]);
        setInputValue("");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p> Entre los números que quiere añadir al array</p>
      <input type="num" value={inputValue} onChange={handleInputChange} />
      <hr></hr>
    </form>
  );
}

EntraNumeros.propTypes = {
  setArrayNumeros: PropTypes.func.isRequired,
};
