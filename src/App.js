import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user") || "");

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    localStorage.setItem("user", username);
    setUser(username);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser("");
  };

  return (
    <div className={user ? "dashboard-page" : "login-page"}>
      {!user ? (
        <div className="card">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <input type="text" name="username" placeholder="Username" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit" className="login-btn">Login</button>
          </form>
        </div>
      ) : (
        <div className="card">
          <h1>Welcome, {user}!</h1>
          <button onClick={handleLogout} className="logout-btn">Sign Out</button>
        </div>
      )}
    </div>
  );
}

export default App;
