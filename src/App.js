import React from "react";
import "./App.css";
import Navigation from "./components/navbar/Navigation";
import { renderRoutes } from "react-router-config";
import ErrorBoundary from "./components/error/ErrorBoundary";

function App({ route }) {
  return (
    <div className="App">
      <Navigation />
      <ErrorBoundary>{renderRoutes(route.routes)}</ErrorBoundary>
    </div>
  );
}

export default App;
