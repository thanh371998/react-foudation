import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from '../component/Button'
import Statefull from '../component/Statefull'
import State from '../component/state'


function App() {
  const [count, setCount] = useState(0)
  const element1 = <h1>i love jsx{5+5}</h1>
  const element3 =(
   <div>
  <h1>i am thanh</h1>
  <h1>18t</h1>
  </div> 
  );
  const renderelement5=(
    <ul>
      <li>react</li>
      <li>angular</li>
    </ul>
  )


  
  function renderElemenFunction(){
    const IdoItem="car";
    console.log("renderElemenFunction",IdoItem)
    return(
      <ul>
        <li>123</li>
        <li>456</li>
      </ul>
    )

  }


  return (
    <div className="App">
      <div>
        <header>
          <Button/>
      </header>
      </div>
     {element1}
     {element3} 
     {renderElemenFunction() }
     {renderelement5}
     
         <div>
            <header>
              <Button text="toggel header" name="truong"/>
            </header>
          </div>

          <main>
             <button text="Add Todo"></button>
             <Statefull/>
             <State/>
             
          </main>

          <footer>
            <button text="Show footer"></button>
          </footer>
    </div>
  )
}






export default App
