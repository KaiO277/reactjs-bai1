import { useState } from 'react'

const gifts = [
  'CPU',
  'IPHONE',
  'MOTO'
]

function App() {

  const [gift, setGift] = useState()

  const handleButton = () =>{
    setGift(gifts[Math.floor(Math.random()*gifts.length)])
  }

  return (
    <div className="App">
      <h1>Bai 1:</h1>
      <h3>{gift||'Chua co phan thuong'}</h3>
      <button onClick={handleButton}>Click</button>
    </div>
  );
}

export default App;
