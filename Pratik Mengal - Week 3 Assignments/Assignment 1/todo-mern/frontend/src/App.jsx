import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  if (user) {
    return <Dashboard />;
  }

  return (
    <div
      className="app-container"
      style={{ position: "relative", zIndex: 10 }}
    >
      <h1>Task Manager</h1>

      {showRegister ? (
        <Register setShowRegister={setShowRegister} />
      ) : (
        <Login
          setUser={setUser}
          setShowRegister={setShowRegister}
        />
      )}
    </div>
  );
}
