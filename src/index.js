import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import UserStore from "./components/redux/store/UserStore";

import App from "./App";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={UserStore()}>
      <App />
    </Provider>
  </StrictMode>
);
