import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submitHandler = async e => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      toast.error("All fields are required");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      toast.success("Account created successfully");
      setForm({ name: "", email: "", password: "" });
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="auth-card">
      <h2>Create Account</h2>
      <form onSubmit={submitHandler}>
        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button>Create Account</button>
      </form>
    </div>
  );
}
