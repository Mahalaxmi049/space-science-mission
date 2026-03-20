import "./App.css"

function App() {
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

      <h1 style={{fontSize:"50px"}}>
        🚀 Space Science Mission
      </h1>

      <p style={{fontSize:"20px", marginTop:"10px"}}>
        Explore planets, learn physics and test your knowledge
      </p>

      <button style={{
        marginTop:"30px",
        padding:"12px 25px",
        fontSize:"18px",
        background:"#6C63FF",
        border:"none",
        borderRadius:"8px",
        color:"white",
        cursor:"pointer"
      }}>
        Start Exploring
      </button>

    </div>
  )
}

export default App