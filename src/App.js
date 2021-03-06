import "./style.css"
import { useEffect, useState } from "react";

function App() {
  //const [valorMoedaA, setValorMoedaA] = useState(0)
  const [valorMoedaB, setValorMoedaB] = useState(1)
  const [codeMoedaB, setCodeMoedaB] = useState()
  const [valueInput, setValueInput] = useState(null)
  const [resultCambio, setResultCambio] = useState(null)

  //
  function valueCoinAPI(coin) {
    fetch(`https://economia.awesomeapi.com.br/all/${coin}`)
      .then(response => response.json())
      .then((data) => {
        const { code, high } = data.USD
        setValorMoedaB(valorMoedaB * high)
        setCodeMoedaB(code)
      })
  }
  //
  useEffect(() => {
    valueCoinAPI(`USD-BRL`)
  }, [])
  //

  //
  function handleValueInput(data) {
    setValueInput(data.target.value)
  }
  //
  function resultCambioCoin() {
    setResultCambio(valorMoedaB * valueInput)
  }

  return (
    <div className="container">
      <section>

        <h3>Conversor de Moedas</h3>
        <span> Resultado: {resultCambio} </span>
        <input type="text" onChange={handleValueInput} placeholder="Digite algum valor" />
        <button onClick={resultCambioCoin}>Converter</button>
        <button onClick={() => { setResultCambio(null) }}>Limpar</button>
      </section>
    </div>
  );
}

export default App;
