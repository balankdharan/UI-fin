import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./pages/navigation/Navigation";
import Home from "./pages/home/Home";
import { useEffect, useState, useRef } from "react";
import "./App.css";

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorRef1 = useRef(null);
  const cursorRef2 = useRef(null);
  const [hoveredSection, setHoveredSection] = useState(null); // State to track hovered section

  useEffect(() => {
    const mouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    const updateCursor = () => {
      if (cursorRef1.current && cursorRef2.current) {
        cursorRef1.current.style.transform = `translate3d(${
          mousePosition.x - 16
        }px, ${mousePosition.y - 16}px, 0)`;
        cursorRef2.current.style.transform = `translate3d(${
          mousePosition.x - 32
        }px, ${mousePosition.y - 32}px, 0)`;
      }
      requestAnimationFrame(updateCursor);
    };

    updateCursor();
  }, [mousePosition]);

  return (
    <>
      <div
        ref={cursorRef1}
        className={`cursor ${hoveredSection === "second" ? "change" : ""}`}
      />
      <div
        ref={cursorRef2}
        className={`cursor2 ${hoveredSection === "second" ? "change2" : ""}`}
      />
      <Router>
        <Navigation />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home setHoveredSection={setHoveredSection} />} // Pass setHoveredSection to Home
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
