import { useState } from 'react';

import Buttom from './components/Buttom';


const App = () => {

  const [value, setValue] = useState(0);

  const randomNumber = () => {
    setValue(Math.floor((Math.random() * 100) + 1));
  }

  return (
    <>
      <h1>Gerador de numero aleatorio(1 a 100)</h1>
      <Buttom name="Gerar" onClick = {randomNumber}/>
      <p>Resultado <strong>{value}</strong></p>
    </>
  );
}

export default App;
