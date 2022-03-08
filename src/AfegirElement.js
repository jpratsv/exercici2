// Afegir un element.
// Donat un array d’enters, que puguis afegir un 
// nou enter tot indicant a quina posició el vols 
// afegir

import React, { useState } from "react";
import EntraNumeros from "./EntraNumeros";
import EntraPosicio from "./EntraPosicio";

export const AfegirElement = () => {
  const [arrayNumeros, setArrayNumeros] = useState([]);

  return (
    <>
      <h2>Entrada de los elementos del Array</h2>
      <div className="entrada">
        <EntraNumeros setArrayNumeros={setArrayNumeros} />
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
