import { useState } from "react"
import "./App.css"

function App() {

  const [showExplorer, setShowExplorer] = useState(false)
  const [selectedPlanet, setSelectedPlanet] = useState("")

  const [earthWeight, setEarthWeight] = useState("")
  const [marsWeight, setMarsWeight] = useState("")

  const planets = [
    {name:"Earth", fact:"Earth is the only planet known to support life."},
    {name:"Mars", fact:"Mars is called the Red Planet due to iron oxide."},
    {name:"Jupiter", fact:"Jupiter is the largest planet in our solar system."}
  ]

  const calculateMarsWeight = () => {
    const result = Number(earthWeight) * 0.38
    setMarsWeight(result.toFixed(2))
  }

  return (
    <div style={{
      minHeight:"100vh",
      background:"linear-gradient(to bottom,#020111,#191621)",
      color:"white",
      textAlign:"center",
      paddingTop:"100px",
      fontFamily:"Arial"
    }}>

      {!showExplorer ? (

        <div>

          <h1 style={{fontSize:"50px"}}>🚀 Space Science Mission</h1>

          <p>Explore planets and learn space science</p>

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

          <div style={{
            display:"flex",
            justifyContent:"center",
            gap:"20px",
            marginTop:"40px"
          }}>

            {planets.map((planet) => (

              <div
                key={planet.name}
                onClick={() => setSelectedPlanet(planet.fact)}
                style={{
                  background:"#222",
                  padding:"20px",
                  borderRadius:"10px",
                  cursor:"pointer"
                }}
              >
                {planet.name}

              </div>

            ))}

          </div>

          {selectedPlanet && (

            <div style={{
              marginTop:"40px",
              background:"#333",
              padding:"20px",
              borderRadius:"10px",
              width:"400px",
              marginLeft:"auto",
              marginRight:"auto"
            }}>

              <h2>Planet Fact</h2>

              <p>{selectedPlanet}</p>

            </div>

          )}

          <div style={{
            marginTop:"50px",
            background:"#222",
            padding:"30px",
            borderRadius:"10px",
            width:"400px",
            marginLeft:"auto",
            marginRight:"auto"
          }}>

            <h2>🚀 Mars Gravity Simulator</h2>

            <p>Enter your weight on Earth</p>

            <input
              type="number"
              value={earthWeight}
              onChange={(e)=>setEarthWeight(e.target.value)}
              placeholder="Weight in kg"
              style={{
                padding:"10px",
                borderRadius:"5px",
                border:"none",
                marginTop:"10px"
              }}
            />

            <br/>

            <button
              onClick={calculateMarsWeight}
              style={{
                marginTop:"15px",
                padding:"10px 20px",
                background:"#6C63FF",
                border:"none",
                borderRadius:"5px",
                color:"white",
                cursor:"pointer"
              }}
            >
              Calculate
            </button>

            {marsWeight && (
              <p style={{marginTop:"20px"}}>
                Your weight on Mars: <b>{marsWeight} kg</b>
              </p>
            )}

          </div>

        </div>

      )}

    </div>
  )
}

export default App