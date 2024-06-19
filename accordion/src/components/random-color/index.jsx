/**
 * Project: Random Color Component
 * Developer: Ed Duenas
 * Date Started: 6/19/2024
 * Date Finished: 6/19/2024
 */

import { useState, useEffect } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000");

  // Function to generate a random integer up to length
  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  // Function to generate a random HEX color
  function handleCreateRandomHexColor() {
    const hex = "0123456789ABCDEF";
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  // Function to generate a random RGB color
  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  }

  // Effect to generate a new color when typeOfColor changes
  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <button
          onClick={() => setTypeOfColor("hex")}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Create HEX Color
        </button>
        <button
          onClick={() => setTypeOfColor("rgb")}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#008CBA",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Create RGB Color
        </button>
        <button
          onClick={
            typeOfColor === "hex" ? handleCreateRandomHexColor : handleCreateRandomRgbColor
          }
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Generate Random Color
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "24px",
          marginTop: "20px",
          textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
        }}
      >
        <h3 style={{ marginBottom: "10px", textTransform: "uppercase" }}>
          {typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}
        </h3>
        <h1 style={{ fontFamily: "monospace" }}>{color}</h1>
      </div>
    </div>
  );
}
