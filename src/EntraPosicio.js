import React, { useState } from "react";

export default function EntraPosicio({ setArrayNumeros }) {
  const [inputValue, setInputValue] = useState("");
  const [inputPosition, setInputPosition] = useState("");

  //---------------------------------------------------------------
  //   Entra el valor.
  //---------------------------------------------------------------
  const handleInputChangeValor = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmitValor = (e) => {
    e.preventDefault();
  };

  //---------------------------------------------------------------
  //   Entra la posicion.
  //---------------------------------------------------------------
  const handleInputChangePosition = (e) => {
    setInputPosition(e.target.value);
  };

  const handleSubmitPosition = (e) => {
    e.preventDefault();

    let valorPosicion = +inputPosition.trim();
    let valorEntrado = +inputValue.trim();

    if (valorEntrado > 0) {
      setArrayNumeros((numerosOriginals) => {
        const copiaDelsNumeros = [...numerosOriginals];
        let total = copiaDelsNumeros.length;

        if (valorPosicion <= total) {
          console.log(total);
          console.log(copiaDelsNumeros);
          // console.log(ultimo);
          console.log(copiaDelsNumeros[total - 1]);
          copiaDelsNumeros.splice(valorPosicion - 1, 0, valorEntrado);
          // arrayNumeros((cats) => [...cats, inputValue]);
          setInputValue("");
          setInputPosition("");
        }
        return copiaDelsNumeros;
      });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmitValor}>
        <p>Entre el valor que quiere adicionar</p>
        <input
          type="num"
          value={inputValue}
          onChange={handleInputChangeValor}
        />
      </form>

      <form onSubmit={handleSubmitPosition}>
        <p>Entre la posicion donde quiere que pase el valor</p>
        <input
          type="num"
          value={inputPosition}
          onChange={handleInputChangePosition}
        />
      </form>
    </>
  );
}
