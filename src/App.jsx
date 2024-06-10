// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./pages/navigation/Navigation";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
