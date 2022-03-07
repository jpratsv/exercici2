import React, { useState } from "react";
import AddNumeros from "./AddNumeros";
import EntraPosicio from "./EntraPosicio";

export const EntraArray = () => {
  const [arrayNumeros, setArrayNumeros] = useState([]);

  return (
    <>
      <h2>Entrada de los elementos del Array</h2>
      <div className="entrada">
        <AddNumeros setArrayNumeros={setArrayNumeros} />
        <EntraPosicio setArrayNumeros={setArrayNumeros} />
      </div>
      <hr />
      <ol>
        {arrayNumeros.map((num) =>
          num > 0 ? (
            <li key={num}> {num}</li>
          ) : (
            <li> {num} "--------------------"</li>
          )
        )}
      </ol>
    </>
  );
};
