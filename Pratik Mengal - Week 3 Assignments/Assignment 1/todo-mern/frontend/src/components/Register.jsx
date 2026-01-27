import { useState } from "react";
import api from "../services/api";

export default function Register({ setShowRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    await api.post("/auth/register", { email, password });
    alert("Registered successfully");
    setShowRegister(false);
  };

  return (
    <div className="auth-box">
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>

      <p style={{ marginTop: "15px" }}>
        Already have an account?{" "}
        <button
          type="button"
          onClick={() => setShowRegister(false)}>
          Login
        </button>
      </p>
    </div>
  );
}
