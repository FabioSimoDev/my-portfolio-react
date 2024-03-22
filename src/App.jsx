import { Navbar } from "./Components/Navbar";
import "./App.css";
import Home from "./Components/Home";
import "./SyntaxHighlighter.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import { GameProvider } from "./context/GameContext.jsx";

function App() {
  return (
    <BrowserRouter>
      <GameProvider>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/about"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </Routes>
      </GameProvider>
    </BrowserRouter>
  );
}

export default App;
