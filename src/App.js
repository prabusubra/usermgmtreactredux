import GlobalToolbar from "./components/GlobalToolbar";
import UserInfo from "./components/redux/UserInfo";
import "./styles.css";

import React from "react";

export default function App() {
  return (
    <div className="App">
      <GlobalToolbar />
      <UserInfo />
    </div>
  );
}
