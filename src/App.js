import React from 'react';
import {store} from "./redux";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Provider} from "react-redux"
import {HomePage} from "./pages/home-page/index";
import {Header} from "./components/header";
import {GamePage} from "./pages/game-page";

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <Router>
                  <Header />
                  <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/app/:title" element={<GamePage />} />
                  </Routes>
              </Router>
          </div>
      </Provider>
  );
}

export default App;
