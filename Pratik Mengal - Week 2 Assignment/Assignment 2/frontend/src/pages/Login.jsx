import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      toast.error("Email and password required");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );

      localStorage.setItem("token", res.data.token);
      toast.success("Login successful");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="auth-card">
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button>Login</button>
        <p style={{ marginTop: "16px", textAlign: "center", color: "#9ca3af" }}>
          New user?{" "}
          <span
            style={{ color: "#818cf8", cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            Create an account
          </span>
        </p>
      </form>
    </div>
  );
}
