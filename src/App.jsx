import { useState } from "react"

function App() {
  
  
  
  const [color, setColor] = useState("")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap bottom-12 justify-center inset-x-0">
        <div className="bg-white flex flex-wrap px-7 py-3 rounded-full gap-10">
          <button onClick={()=>{setColor(document.getElementsByTagName('button')[0].innerHTML)}} className="text-center px-6 shadow-lg shadow-black py-2 rounded-full text-white font-semibold" style={{backgroundColor: "red"}}>Red</button>
          <button onClick={()=>{setColor(document.getElementsByTagName('button')[1].innerHTML)}} className="text-center px-6 shadow-lg shadow-black py-2 rounded-full text-white font-semibold" style={{backgroundColor: "green"}}>Green</button>
          <button onClick={()=>{setColor(document.getElementsByTagName('button')[2].innerHTML)}} className="text-center px-6 shadow-lg shadow-black py-2 rounded-full text-white font-semibold" style={{backgroundColor: "grey"}}>Grey</button>
          <button onClick={()=>{setColor(document.getElementsByTagName('button')[3].innerHTML)}} className="text-center px-6 shadow-lg shadow-black py-2 rounded-full text-white font-semibold" style={{backgroundColor: "pink"}}>Pink</button>
          <button onClick={()=>{setColor(document.getElementsByTagName('button')[4].innerHTML)}} className="text-center px-6 shadow-lg shadow-black py-2 rounded-full text-white font-semibold" style={{backgroundColor: "aqua"}}>Aqua</button>
          <button onClick={()=>{setColor(document.getElementsByTagName('button')[5].innerHTML)}} className="text-center px-6 shadow-lg shadow-black py-2 rounded-full text-white font-semibold" style={{backgroundColor: "Blue"}}>Blue</button>
          <button onClick={()=>{setColor(document.getElementsByTagName('button')[6].innerHTML)}} className="text-center px-6 shadow-lg shadow-black py-2 rounded-full text-white font-semibold" style={{backgroundColor: "Purple"}}>Purple</button>
          <button onClick={()=>{setColor(document.getElementsByTagName('button')[7].innerHTML)}} className="text-center px-6 shadow-lg shadow-black py-2 rounded-full text-white font-semibold" style={{backgroundColor: "Yellow"}}>Yellow</button>
        </div>
      </div>
    </div>  
    )
}

export default App
