import { useState } from 'react'
import Output from './components/Output'
import './App.css'
import {QContext} from './components/Context';
import Buttons from './components/Buttons';
function App() {
  const [count, setCount] = useState('0')
  const [secondCount,setSecondCount]=useState('0')
  return (
    
      <div className="calculatorBody">
            <QContext.Provider value={{count,setCount,secondCount,setSecondCount}}>
        <h1>Calculator</h1>
        <Output/>
        <Buttons/>
        </QContext.Provider>
      </div>
      
   
  )
}

export default App
