import React from 'react';
import './App.css';
import { last } from './generics';

function App() {

const l = last([1,2,3]);
const l2 = last(['hi', 'hello', 'july']);
// const l2 = last<string>(['hi', 'hello', 'july']); // You can specifically say what type is using in this generics
  return (
    <div className="App">
     <p>Typescript generics</p>
     <p>{l}</p>
     <p>{l2}</p>
    </div>
  );
}

export default App;
