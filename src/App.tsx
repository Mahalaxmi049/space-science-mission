import { useState } from "react"
import "./App.css"

function App() {

  const [showExplorer, setShowExplorer] = useState(false)

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to bottom,#020111,#191621)",
      color: "white",
      textAlign: "center",
      paddingTop: "100px",
      fontFamily: "Arial"
    }}>

      {!showExplorer ? (

        <div>
          <h1 style={{fontSize:"50px"}}>🚀 Space Science Mission</h1>

          <p style={{fontSize:"20px", marginTop:"10px"}}>
            Explore planets, learn physics and test your knowledge
          </p>

          <button
            onClick={() => setShowExplorer(true)}
            style={{
              marginTop:"30px",
              padding:"12px 25px",
              fontSize:"18px",
              background:"#6C63FF",
              border:"none",
              borderRadius:"8px",
              color:"white",
              cursor:"pointer"
            }}
          >
            Start Exploring
          </button>
        </div>

      ) : (

        <div>

          <h1>🪐 Planet Explorer</h1>

          <p>Select a planet to learn more</p>

          <div style={{
            display:"flex",
            justifyContent:"center",
            gap:"20px",
            marginTop:"40px"
          }}>

            <div style={{background:"#222", padding:"20px", borderRadius:"10px"}}>
              🌍 Earth
            </div>

            <div style={{background:"#222", padding:"20px", borderRadius:"10px"}}>
              🔴 Mars
            </div>

            <div style={{background:"#222", padding:"20px", borderRadius:"10px"}}>
              🟡 Jupiter
            </div>

          </div>

        </div>

      )}

    </div>
  )
}

export default App