import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  const handleButton = () =>{
    setCount(prevState=> prevState+1)
    setCount(prevState=> prevState+1)
  }

  return (
    <div className="App">
      <h1>Bai 1:</h1>
      <p>{count}</p>
      <button onClick={handleButton}>Click</button>
    </div>
  );
}

export default App;
