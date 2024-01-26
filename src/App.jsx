import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store.js";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>💖 Hello World!</h1>
        <p>Welcome to your Electron application.</p>
      </div>
    </Provider>
  );
}

export default App;
