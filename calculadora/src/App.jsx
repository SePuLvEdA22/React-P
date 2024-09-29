import { useState } from "react";
import "./App.css";

function App() {
  /*
  input: Este estado maneja la expresión actual que el usuario está ingresando. 
  Cada vez que se hace clic en un botón, se concatena el valor correspondiente al estado input.
  */
  const [input, setInput] = useState("");

  // result: Este estado almacena el resultado del cálculo.
  const [result, setResult] = useState("");

  /*
  handleClick: Concatenamos el valor del botón a la cadena input. 
  Este es el mecanismo que "construye" la expresión matemática.
  */
  const handleClick = (value) => {
    setInput(input + value);
  };

  // handleClear: Reinicia tanto la expresión (input) como el resultado (result) a una cadena vacía.
  const handleClear = () => {
    setInput("");
    setResult("");
  };

  /*
  handleCalculate: Usa eval() para evaluar la expresión matemática en input y almacenar el resultado en result. 
  Si la expresión no es válida, manejamos el error mostrando "Error".
  */
  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("error");
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <input type="text" value={input} disabled />
          <div className="result">{result}</div>
        </div>
        <div className="buttons">
          //onClick: Asignado a cada botón, permite ejecutar la función correspondiente al hacer clic.
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("*")}>*</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={() => handleClick("/")}>/</button>
          <button onClick={handleClear}>C</button>
          <button onClick={handleCalculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
