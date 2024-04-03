import { Navbar } from "./Components/navbar/Navbar";
import "./App.css";
import Home from "./Components/home/Home";
import "./SyntaxHighlighter.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import { GameProvider } from "./context/GameContext.jsx";
import Footer from "./Components/footer/Footer.jsx";
import AboutMe from "./Components/about/AboutMe.jsx";
import { SelectedFolderProvider } from "./context/SelectedFolderContext.jsx";
import Project from "./Components/projects/Projects.jsx";
import Contact from "./Components/contact/Contact.jsx";

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
                <SelectedFolderProvider>
                  <AboutMe />
                </SelectedFolderProvider>
              </PrivateRoute>
            }
          />
          <Route
            path="/projects"
            element={
              <PrivateRoute>
                <SelectedFolderProvider>
                  <Project />
                </SelectedFolderProvider>
              </PrivateRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <PrivateRoute>
                <SelectedFolderProvider>
                  <Contact />
                </SelectedFolderProvider>
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
        <Footer className={`hidden`} />
      </GameProvider>
    </BrowserRouter>
  );
}

export default App;
