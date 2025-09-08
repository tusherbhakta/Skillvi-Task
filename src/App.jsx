import React from "react";
import Dashboard from "./pages/Dashboard";
import bgImage from "./assets/bgImage.png";

function App() {
  return (
    <div
      className="min-h-screen font-poppins bg-cover bg-center "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Dashboard />
    </div>
  );
}

export default App;
