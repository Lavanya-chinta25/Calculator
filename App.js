import './App.css';
import "./calculator.css"
import {createContext,useState} from 'react';
function App() {
  const [input,setInput]=useState("");
  const [result,setResult]=useState(0)

  const handler=e=>{
    setInput(e.target.value)
  }
  return (
    <div className="App">
     <h1 className="title">Calculator</h1>
     <input className="input" type="text" value={input} name="input" onChange={handler}></input>
     <br/>
     <br/>
     <button className="result" onClick={()=>setResult(eval(input))}>Result</button>
     <br/>
     <br/>
     <h4>Result is:{result}</h4>
     <button className="numbers" onClick={()=>setInput(input+1)}>1</button>
     <button className="keys" onClick={()=>setInput(input+'2')}>2</button>
     <button className="keys" onClick={()=>setInput(input+'3')}>3</button>
     <button className="keys" onClick={()=>setInput(input+'4')}>4</button>
     <button className="keys" onClick={()=>setInput(input+'5')}>5</button>
     <br/>
     <button className="keys" onClick={()=>setInput(input+'6')}>6</button>
     <button className="keys" onClick={()=>setInput(input+'7')}>7</button>
     <button className="keys" onClick={()=>setInput(input+'8')}>8</button>
     <button className="keys" onClick={()=>setInput(input+'9')}>9</button>
     <button className="keys" onClick={()=>setInput(input+'0')}>0</button>
     <br/>
     <button className="keys" onClick={()=>setInput(input+'+')}>+</button>
     <button className="keys" onClick={()=>setInput(input+'-')}>-</button>
     <button className="keys" onClick={()=>setInput(input+'*')}>*</button>
     <button className="keys" onClick={()=>setInput(input+'/')}>/</button>
     <button className="keys" onClick={()=>{setInput('');setResult(0)}}>clr</button>
    </div>
    )
}
export default App;