import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const Button = ({color,increment,underline}) => {
  const [counter,setCounter] = useState(0)
  return <div style={{color,textDecoration:underline&&'underline'}} onClick={()=>setCounter((c)=>c+increment)}>I am a button {counter}</div>
}

function App() {
  const props={
    increment:2,
    underline:true
  };

  return (
    <div className="App">
        <Button {...props} color="blue"/> 
        <Button {...props} color="green"/>
        <Button {...props} color="red"/>
    </div>
  );
}

export default App;
