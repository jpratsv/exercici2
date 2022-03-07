import React, { useState } from "react";
import PropTypes from "prop-types";

export default function EntraPosicio({ setArrayNumeros }) {
 

  const [inputValue, setInputValue] = useState(""); 

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  let ValorEntrado = +(inputValue.trim())
    if (ValorEntrado > 0) {
      if (ValorEntrado < arrayNumeros.length) {
        let total = arrayNumeros.length;
        console.log(arrayNumeros);
        console.log(arrayNumeros.length);
        console.log(ValorEntrado);
        // console.log(ultimo);
        console.log(arrayNumeros[total]);
        setArrayNumeros(arrayNumeros.splice(ValorEntrado, 0, arrayNumeros[total -1]))
        ;
        // arrayNumeros((cats) => [...cats, inputValue]);
        setInputValue("");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="num" value={inputValue} onChange={handleInputChange} />
    </form>
  );
}
