import { useState } from 'react'


function App() {

  const [name, setName] = useState('')
  console.log(name);
  

  const handleButton = () =>{
    
  }

  return (
    <div className="App">
      <h1>Bai 1:</h1>
      <input 
        value={name}
        onChange={e=>setName(e.target.value)}
      />
      <button onClick={()=>setName("Tran Van Nghia")}>Click</button>
    </div>
  );
}

export default App;
