import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import Todo from "./Todo.jsx";
import Reducer from "./Reducer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Todo /> */}
    <Reducer />
  </StrictMode>
);
