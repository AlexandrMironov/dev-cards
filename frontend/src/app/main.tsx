import ReactDOM from "react-dom/client";
import { StrictMode } from "react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./styles.css";

// Mock the environment in case, we are outside Telegram.

const root = ReactDOM.createRoot(document.getElementById("root")!);

// Mock the environment in case, we are outside Telegram.
import App from "./App.js";

root.render(<StrictMode>
  <App />
</StrictMode>);