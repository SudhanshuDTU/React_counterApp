import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setCounter] = useState(0);

 const increase = function() {
   if(counter < 10){
    counter++;
    setCounter(counter);
   }
  }
 const decrease = function () {
  if(counter > 0){
    counter--;
    setCounter(counter);

  }
  }

  return (
    <>
      <h1>Chai aur React</h1>
     <h3>Counter Value : {counter}</h3>
     <button onClick={increase}>Add value</button>
     <br />
     <button onClick={decrease}>Remove value</button>
    </>
  )
}

export default App
