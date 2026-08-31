import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./pages/navigation/Navigation";
import Home from "./pages/home/Home";
import { useEffect, useState, useRef } from "react";
import "./App.css";

const App = () => {
  const cursorRef1 = useRef(null);
  const cursorRef2 = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const [hoveredSection, setHoveredSection] = useState(null); // State to track hovered section

  useEffect(() => {
    const mouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", mouseMove);

    let raf;
    const updateCursor = () => {
      const { x, y } = mousePosition.current;
      if (cursorRef1.current) {
        cursorRef1.current.style.transform = `translate3d(${x - 16}px, ${
          y - 16
        }px, 0)`;
      }
      if (cursorRef2.current) {
        cursorRef2.current.style.transform = `translate3d(${x - 32}px, ${
          y - 32
        }px, 0)`;
      }
      raf = requestAnimationFrame(updateCursor);
    };
    updateCursor();

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

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
