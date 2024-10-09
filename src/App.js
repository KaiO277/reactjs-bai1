import { useState, useEffect } from 'react'


function App() {

  const [students, setStudents] = useState([])
  // console.log(name);
  
  useEffect(()=>{
    fetch('http://127.0.0.1:8000/student/')
      .then(res =>res.json())
      .then(students=>{
        setStudents(students)
      })
  },[])

  return (
    <div className="App">
      <h1>Bai 1:</h1>
        <ul>
          {students.map(student=>(
            <li key={student.id}>{student.name}</li>
          ))}
        </ul>
    </div>
  );
}

export default App;
