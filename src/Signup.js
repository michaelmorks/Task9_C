import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup({ setUser }) {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem("user", username);
    setUser(username);
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="card">
        <h1>Sign Up</h1>
        <form onSubmit={handleSignup}>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="login-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
