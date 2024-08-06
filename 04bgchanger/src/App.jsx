import { useState } from "react"

function App() {
  const [color, setColor] = useState("#212121")
  return (
    <div className="w-full h-screen"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("#ff6961")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"#ff6961"}}
          >Pastel Red</button>
          <button
          onClick={() => setColor("#ffb480")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"#ffb480"}}
          >Mellow Apricot</button>
          <button
          onClick={() => setColor("#f8f38d")}
          className="outline-none px-4 py-1 rounded-full text-Black shadow-lg"
          style={{backgroundColor:"#f8f38d"}}
          >Light Goldenrod Yellow</button>
          <button
          onClick={() => setColor("#42d6a4")}
          className="outline-none px-4 py-1 rounded-full text-Black shadow-lg"
          style={{backgroundColor:"#42d6a4"}}
          >Eucalyptus</button>
          <button
          onClick={() => setColor("#08cad1")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"#08cad1"}}
          >Bright Turquoise</button>
          <button
          onClick={() => setColor("#59adf6")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"#59adf6"}}
          >Carolina Blue</button>
          <button
          onClick={() => setColor("#9d94ff")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"#9d94ff"}}
          >Pale Violet</button>
          <button
          onClick={() => setColor("#c780e8")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"#c780e8"}}
          >Bright Lavender</button>
        </div>
      </div>
    </div>
  )
}

export default App
