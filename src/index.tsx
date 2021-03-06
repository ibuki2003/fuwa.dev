import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

// Your top level component
import App from "./App";

// Export your top level component as JSX (for static rendering)
export default App;

const target =
  typeof window !== "undefined" && document?.getElementById("root");
// Render your app
if (target) {
  const renderMethod = target.hasChildNodes()
    ? ReactDOM.hydrate
    : ReactDOM.render;

  const render = (Comp: React.FC) => {
    renderMethod(
      <AppContainer>
        <Comp />
      </AppContainer>,
      target
    );
  };

  // Render!
  render(App);

  // Hot Module Replacement
  if (module && module.hot) {
    module.hot.accept("./App", () => {
      render(App);
    });
  }
}
