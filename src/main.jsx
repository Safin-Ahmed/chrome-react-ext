import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.createElement("div");
root.id = "crx-root";

root.style.display = "none";

function toggle() {
  if (root.style.display === "none") {
    root.style.display = "block";
  } else if (root.style.display === "block") {
    root.style.display = "none";
  }
}

chrome.runtime.onMessage.addListener((req, sender, res) => {
  if (req.clicked) {
    console.log(req.clicked);
    toggle();
  }
});

document.body.append(root);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
