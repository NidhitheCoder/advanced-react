import React from 'react';
import './App.css';
import Form from './components/Form';
import { last, makeArr, makeFullName, makeFullName2, sample } from './generics';

function App() {
const l = last([1,2,3]);
const l2 = last(['hi', 'hello', 'july']);
// const l2 = last<string>(['hi', 'hello', 'july']); // You can specifically say what type is using in this generics
const arrayValue = makeArr(5);

const value1 = sample(2, 3);
const value2 = sample('hi', 'Hello');
const value3 = sample<string | null, number> ('Hello', 2);
const nameObject = makeFullName({firstName: 'John', lastName: 'honay'});
const nameObject2 = makeFullName2({firstName: 'John', lastName: 'honay', age: 25});
// const errorNameObj = makeFullName2({newName: 'John', lastName: 'honay', age: 25}); // getting error firstName and lastName are must needed.

  return (
    <div className="App">
     <p>Typescript generics</p>
     <p>{l}</p>
     <p>{l2}</p>
     <p>{arrayValue}</p>
     <p>{value1}</p>
     <p>{value2}</p>
     <p>{value3}</p>
     <p>{nameObject.fullName}</p>
     <p>{nameObject2.fullName}</p>

     <Form<{lastName: string| null}> values={{lastName: 'Bob'}}>
       {(values) => <div> Hello from form {values.lastName}</div>}
     </Form>
    </div>
  );
}

export default App;
