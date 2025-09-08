import React from "react";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div
      className="min-h-screen font-poppins bg-cover bg-center "
      style={{ backgroundImage: "url('/src/assets/bgImage.png')" }}
    >
      <Dashboard />
    </div>
  );
}

export default App;
