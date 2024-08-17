import React, { useRef, useEffect } from "react";
import "./MatrixRain.css";

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions to full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Matrix letters
    const letters =
      "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
    const letterArray = letters.split("");

    // Columns for the rain
    const fontSize = 10;
    const columns = canvas.width / fontSize;

    // Array for the rain drops
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Drawing the characters
    const draw = () => {
      // Length of the rain drops
      ctx.fillStyle = "rgba(0, 0, 0, .12)";

      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0f0"; // Green text
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text =
          letterArray[Math.floor(Math.random() * letterArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    };

    // Draw function every 33ms
    const interval = setInterval(draw, 33);

    // Cleanup function on unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-canvas"></canvas>;
};

export default MatrixRain;
