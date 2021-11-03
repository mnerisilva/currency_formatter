import { useState } from "react";
import Convert from "./Convert";

function CurrencyFormatter(event) {
  const [valorInput, setValorInput] = useState(null);
  const [valorAenviar, setValorAenviar] = useState("");

  function mudaValor(event) {
    console.log(event.target.value);
    setValorInput(event.target.value);
  }

  function enviaValor() {
    setValorAenviar(valorInput);
  }
  return (
    <div>
      CurrencyFormatter
      <input type="text" onChange={mudaValor} />
      {console.log("valorInput: " + valorInput)}
      {console.log("valorAenviar: " + valorAenviar)}
      <button onClick={enviaValor}>Coverte</button>
      <Convert valor={valorAenviar} />
    </div>
  );
}

export default CurrencyFormatter;
