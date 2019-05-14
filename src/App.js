import React from "react";
import "./App.css";
import Navigation from "./components/navbar/Navigation";
import { renderRoutes } from "react-router-config";
import ErrorBoundary from "./components/error/ErrorBoundary";
import HttpsRedirect from "react-https-redirect";

function App({ route }) {
  return (
    <div className="App">
      <Navigation />
      <HttpsRedirect>
        <ErrorBoundary>{renderRoutes(route.routes)}</ErrorBoundary>
      </HttpsRedirect>
    </div>
  );
}

export default App;
