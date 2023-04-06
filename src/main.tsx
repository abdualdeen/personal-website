import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Charts from "./pages/Charts";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

console.log(process.env.appId);

const firebaseConfig = {
  apiKey: "AIzaSyBU1fjZ3fMLKryudRPULeU3wxUtiUKb_K4",
  authDomain: "abdullahhamad-ef3e2.firebaseapp.com",
  projectId: "abdullahhamad-ef3e2",
  storageBucket: "abdullahhamad-ef3e2.appspot.com",
  messagingSenderId: "659824625343",
  appId: "1:659824625343:web:2f06b611776f5a7df6e80a",
  measurementId: "G-CTHC8X3K61",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "charts",
    element: <Charts />
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
