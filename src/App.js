import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {HomePage} from "./pages/home-page/index";
import {Header} from "./components/header";

function App() {
  return (
          <div className="App">
              <Router>
                  <Header />
                  <Routes>
                      <Route path="/" element={<HomePage />} />
                  </Routes>
              </Router>
          </div>
  );
}

export default App;
