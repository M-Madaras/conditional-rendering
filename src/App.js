import { useState } from "react"
import Loading from './Loading';
import Loaded from "./Loaded"
import './App.css';

function App() {
  // const isLoaded = true;
  const [isLoaded, setIsLoaded] = useState(false)
  const [obejectExample, setObjectExample] = useState({ name: "Name Of Object" })// don't need this
  const [username, setUsername] = useState("")
  // const ternary = isLoaded ? 'Yes' : 'No'

const numbers = [1,2,3,4,5,6,7,8,9,0]
  return (
    <div className="App">
      <h1>Username is:{username !== "" ? username : "Guest"}</h1>
      <h1>Username is:{username || "Guest"}</h1>
      <h1>{
        numbers.length > 0 &&
         <>
        {numbers.map((num)=>{
          return num + " & "
        })}
        <Loaded />
        <h2>I have {numbers.length} numbers</h2>
        </>
      }</h1>

      <h1>{obejectExample.name}</h1>
      <h1>{isLoaded ? 'Yes' : '👾Downloading👾'}</h1>
      {
        isLoaded
          ?
          <Loaded />
          :
          <Loading />
      }
      <button onClick={() => {
        setIsLoaded(!isLoaded)//allows to switch between boolean
      }}>Change Loaded</button>
      <h1>isLoaded ={String(isLoaded)}</h1>
    </div>
  );
}

export default App;
