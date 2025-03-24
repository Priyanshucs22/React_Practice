import './App.css'
import {useState} from 'react';

function App() {
  const [count,setCount] = useState(12);
  // useState is a React Hook used to manage state in functional components. It allows variables to persist between renders and triggers UI updates when changed. Since state updates are asynchronous, using functional updates (prevState => newValue) ensures correctness. React also batches state updates to optimize performance.If we use without using functional updates, it will not work properly and give output like 12,13,14,15,16 but with function inside setCount it will give output like 15,19,23 and so on.
  const addValue = () =>{
    // if(count < 20)
    setCount(prevcount => prevcount+1);
    setCount(prevcount => prevcount+1);
    setCount(prevcount => prevcount+1);
    setCount(prevcount => prevcount+1);
  }
  const removeValue = () =>{
    // if(count > 0)
    setCount(count-1);
  }
  return (
    <>
      <h1>This is my counter</h1>
      <button onClick={addValue}>Add : {count}</button>
      <br/>
      <button onClick={removeValue}>Remove : {count}</button>
    </>
  )
}

export default App
