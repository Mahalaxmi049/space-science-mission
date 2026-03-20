import { useState } from "react"

import earth from "./assets/Earth.jpg"
import mars from "./assets/mars.webp"
import jupiter from "./assets/Jupiter.webp"

import "./App.css"

function App() {

  const [showExplorer, setShowExplorer] = useState(false)
  const [selectedPlanet, setSelectedPlanet] = useState("")

  const [earthWeight, setEarthWeight] = useState("")
  const [marsWeight, setMarsWeight] = useState("")

  const planets = [
    {
      name: "Earth",
      image: earth,
      fact: "Earth is the only planet known to support life."
    },
    {
      name: "Mars",
      image: mars,
      fact: "Mars is called the Red Planet due to iron oxide."
    },
    {
      name: "Jupiter",
      image: jupiter,
      fact: "Jupiter is the largest planet in our solar system."
    }
  ]

  const calculateMarsWeight = () => {
    const result = Number(earthWeight) * 0.38
    setMarsWeight(result.toFixed(2))
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom,#020111,#191621)",
        color: "white",
        textAlign: "center",
        paddingTop: "80px",
        fontFamily: "Arial"
      }}
    >

      {!showExplorer ? (

        <div>

          <h1 style={{ fontSize: "50px" }}>
            🚀 Space Science Mission
          </h1>

          <p style={{ fontSize: "18px" }}>
            Explore planets and learn space science
          </p>

          <button
            onClick={() => setShowExplorer(true)}
            style={{
              marginTop: "30px",
              padding: "12px 25px",
              fontSize: "18px",
              background: "#6C63FF",
              border: "none",
              borderRadius: "8px",
              color: "white",
              cursor: "pointer"
            }}
          >
            Start Exploring
          </button>

        </div>

      ) : (

        <div>

          <h1>🪐 Planet Explorer</h1>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              marginTop: "40px"
            }}
          >

            {planets.map((planet) => (

              <div
                key={planet.name}
                onClick={() => setSelectedPlanet(planet.fact)}
                style={{
                  background: "#222",
                  padding: "20px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  width: "150px"
                }}
              >

                <img
                  src={planet.image}
                  style={{
                    width: "90px",
                    height: "90px",
                    objectFit: "contain"
                  }}
                />

                <h3>{planet.name}</h3>

              </div>

            ))}

          </div>

          {selectedPlanet && (

            <div
              style={{
                marginTop: "40px",
                background: "#333",
                padding: "20px",
                borderRadius: "10px",
                width: "400px",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >

              <h2>Planet Fact</h2>

              <p>{selectedPlanet}</p>

            </div>

          )}

          <div
            style={{
              marginTop: "50px",
              background: "#222",
              padding: "30px",
              borderRadius: "10px",
              width: "400px",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >

            <h2>🚀 Mars Gravity Simulator</h2>

            <p>Enter your weight on Earth</p>

            <input
              type="number"
              value={earthWeight}
              onChange={(e) => setEarthWeight(e.target.value)}
              placeholder="Weight in kg"
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                marginTop: "10px"
              }}
            />

            <br />

            <button
              onClick={calculateMarsWeight}
              style={{
                marginTop: "15px",
                padding: "10px 20px",
                background: "#6C63FF",
                border: "none",
                borderRadius: "5px",
                color: "white",
                cursor: "pointer"
              }}
            >
              Calculate
            </button>

            {marsWeight && (
              <p style={{ marginTop: "20px" }}>
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