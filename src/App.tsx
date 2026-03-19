import { useState } from "react"
import "./App.css"

function App() {

  // React state → stores dynamic data
  const [count, setCount] = useState(0)

  return (
    <div style={{
      height: "100vh",
      background: "linear-gradient(to bottom, #020111, #191621)",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial"
    }}>

      {/* Title */}
      <h1 style={{
        fontSize: "48px",
        marginBottom: "20px"
      }}>
        🚀 Space Mission Explorer
      </h1>

      {/* Description */}
      <p style={{
        fontSize: "18px",
        marginBottom: "30px"
      }}>
        Welcome to your Space Science Internship Project
      </p>

      {/* Counter Button */}
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "15px 30px",
          fontSize: "18px",
          backgroundColor: "#6C63FF",
          border: "none",
          borderRadius: "10px",
          color: "white",
          cursor: "pointer"
        }}
      >
        Clicked {count} times
      </button>

    </div>
  )
}

export default App