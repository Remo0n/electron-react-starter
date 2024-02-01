import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import UploadScreen from "./screens/UploadScreen.jsx";
import FileEditingScreen from "./screens/FileEditingScreen.jsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<UploadScreen />} />
          <Route path="/fileediting" element={<FileEditingScreen />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
