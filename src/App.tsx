import { useState } from "react";
import earth from "./assets/Earth.jpg";
import mars from "./assets/mars.webp";
import jupiter from "./assets/Jupiter.webp";
import "./App.css";

function App() {
  const [showExplorer, setShowExplorer] = useState(false);
  const [selectedFact, setSelectedFact] = useState("");
  const [earthWeight, setEarthWeight] = useState("");
  const [marsWeight, setMarsWeight] = useState("");

  const planets = [
    {
      name: "Earth",
      image: earth,
      fact: "Earth is the only planet known to support life."
    },
    {
      name: "Mars",
      image: mars,
      fact: "Mars is called the Red Planet."
    },
    {
      name: "Jupiter",
      image: jupiter,
      fact: "Jupiter is the largest planet in our solar system."
    }
  ];

  const calculateMarsWeight = () => {
    const result = Number(earthWeight) * 0.38;
    setMarsWeight(result.toFixed(2));
  };

  if (!showExplorer) {
    return (
      <div className="container">
        <h1>🚀 Space Science Mission</h1>
        <p>Explore planets and learn space science</p>

        <button
          className="button"
          onClick={() => setShowExplorer(true)}
        >
          Start Exploring
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>🪐 Planet Explorer</h1>

      <div className="planetRow">
        {planets.map((planet) => (
          <div
            key={planet.name}
            className="planetCard"
            onClick={() => setSelectedFact(planet.fact)}
          >
            <img src={planet.image} className="planetImage" />
            <h3>{planet.name}</h3>
          </div>
        ))}
      </div>

      {selectedFact && (
        <div className="factBox">
          <h2>Planet Fact</h2>
          <p>{selectedFact}</p>
        </div>
      )}

      <div className="gravityBox">
        <h2>🚀 Mars Gravity Simulator</h2>

        <input
          type="number"
          placeholder="Enter Earth weight"
          value={earthWeight}
          onChange={(e) => setEarthWeight(e.target.value)}
        />

        <button className="button" onClick={calculateMarsWeight}>
          Calculate
        </button>

        {marsWeight && (
          <p>Your weight on Mars: <b>{marsWeight} kg</b></p>
        )}
      </div>
    </div>
  );
}

export default App;