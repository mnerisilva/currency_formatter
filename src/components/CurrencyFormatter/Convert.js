function Convert(props) {
  console.log("props.valor: " + JSON.stringify(props));
  function Formatter(valor) {
    let paramToString = valor.toString();
    if (paramToString.includes(".")) {
      if (paramToString.split(".")[1].length === 1) {
        let paramToStringArr = paramToString.split(".");
        let decimalPartString = parseInt(paramToStringArr[1]) * 10;
        paramToString = `R$ ${paramToStringArr[0]},${parseInt(
          decimalPartString
        )}`;
        return paramToString;
      }
      if (paramToString.split(".")[1].length === 2) {
        let paramToStringArr = paramToString.split(".");
        paramToString = `R$ ${paramToStringArr[0]},${paramToStringArr[1]}`;
        return paramToString;
      }
    } else {
      // cria uma variável tipo string e armazena nela o valor de “param”, convertido para string
      let paramToString = valor.toString();
      console.log(paramToString); // resultado: '125’
      //paramToString = paramToString + ",00";
      paramToString = `R$ ${paramToString},00`;
      return paramToString;
    }
  }

  return (
    <div>
      <h1>Convetendo</h1>
      <h4>Moeda</h4>
      {console.log(props["valor"] + " ---")}
      {Formatter(props.valor)}
    </div>
  );
}

export default Convert;
