import React from 'react';
import './App.css';
import { last, makeArr, sample } from './generics';

function App() {
const l = last([1,2,3]);
const l2 = last(['hi', 'hello', 'july']);
// const l2 = last<string>(['hi', 'hello', 'july']); // You can specifically say what type is using in this generics
const arrayValue = makeArr(5);

const value1 = sample(2, 3);
const value2 = sample('hi', 'Hello');
const value3 = sample<string | null, number> ('Hello', 2);

  return (
    <div className="App">
     <p>Typescript generics</p>
     <p>{l}</p>
     <p>{l2}</p>
     <p>{arrayValue}</p>
     <p>{value1}</p>
     <p>{value2}</p>
     <p>{value3}</p>
    </div>
  );
}

export default App;
