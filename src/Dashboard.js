import { Link } from "react-router-dom";

function Dashboard({ user, setUser }) {
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser("");
  };

  return (
    <div className="dashboard-page">
      <div className="card">
        <h1>Welcome {user}!</h1>
        <Link to="/findquestions"><button className="login-btn">Find Questions</button></Link>
        <button onClick={handleLogout} className="logout-btn" style={{ marginTop: '10px' }}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;
