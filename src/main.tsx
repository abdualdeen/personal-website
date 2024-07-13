import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Charts from "./pages/Charts";
import "./index.css";
import Projects from "./pages/Projects";

/**
 * Initializing Firebase
 * the import and init is done this way to allow for local development without loading in Firebase.
 */
if (!window.location.origin.includes("localhost:5173")) {
  import("firebase/app")
    .then((firebase) => {
      const firebaseConfig = {
        apiKey: "AIzaSyBU1fjZ3fMLKryudRPULeU3wxUtiUKb_K4",
        authDomain: "abdullahhamad-ef3e2.firebaseapp.com",
        projectId: "abdullahhamad-ef3e2",
        storageBucket: "abdullahhamad-ef3e2.appspot.com",
        messagingSenderId: "659824625343",
        appId: "1:659824625343:web:2f06b611776f5a7df6e80a",
        measurementId: "G-CTHC8X3K61",
      };

      const { initializeApp } = firebase.default;
      import("firebase/analytics")
        .then((analytics) => {
          const { getAnalytics } = analytics.default;

          // Initialize Firebase
          const firebaseApp = initializeApp(firebaseConfig);
          const analyticsInstance = getAnalytics(firebaseApp);
        })
        .catch((error) => {
          console.error("Failed to load firebase/analytics:", error);
        });
    })
    .catch((error) => {
      console.error("Failed to load firebase/app:", error);
    });
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "charts",
    element: <Charts />,
  },
  {
    path: "projects",
    element: <Projects />,
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
