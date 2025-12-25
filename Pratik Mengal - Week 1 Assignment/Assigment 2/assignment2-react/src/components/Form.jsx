import { useState } from "react";
import Button from "./Button";

const Form = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (value.trim().length < 3) {
      setError("Minimum 3 characters required");
      return;
    }
    setError("");
    alert(`Submitted: ${value}`);
    setValue("");
  };

  return (
    <div className="card">
      <input
        className="input"
        placeholder="Enter something meaningful"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {error && <p style={{ color: "#ef4444", marginTop: "8px" }}>{error}</p>}

      <div style={{ marginTop: "15px" }}>
        <Button text="Submit" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Form;
