import { useState } from "react";
import API from "../services/api";

export default function Login(props) {
  const { setUser } = props;

  // ✅ SAFE FALLBACK FUNCTION
  const openRegister =
    typeof props.setShowRegister === "function"
      ? () => props.setShowRegister(true)
      : () => alert("Register page not available");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/auth/login", {
        email,
        password,
      });
      alert("Login successful");
      localStorage.setItem("token", data.token);
      setUser(data.user);
    } catch {
      setError("Invalid credentials");
    }
  };

  return (
    <div style={{ maxWidth: "350px", margin: "80px auto" }}>
      <h2>Login</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={submitHandler}>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>

      {/* ✅ SIMPLE & SAFE REGISTER BUTTON */}
      <div style={{ marginTop: "15px" }}>
        <span>New user? </span>
        <button
          type="button"
          onClick={openRegister}>Register
        </button>
      </div>
    </div>
  );
}
