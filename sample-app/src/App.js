import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const Button = () => {
  const [counter,setCounter] = useState(0)
  return <div onClick={()=>setCounter((c)=>c+1)}>I am a button {counter}</div>
}

function App() {
  return (
    <div className="App">
        <Button color="blue"/> 
        <Button color="green"/>
        <Button color="red"/>
    </div>
  );
}

export default App;
