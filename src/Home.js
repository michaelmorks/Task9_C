import { Link } from "react-router-dom";

function Home({ user }) {
  return (
    <div className="dashboard-page">
      <div className="card">
        <h1>Welcome {user ? user : "Guest"}!</h1>
        {!user ? (
          <>
            <Link to="/login"><button className="login-btn">Login</button></Link>
            <Link to="/signup"><button className="login-btn" style={{ marginTop: '10px' }}>Sign Up</button></Link>
          </>
        ) : (
          <Link to="/dashboard"><button className="login-btn">Go to Dashboard</button></Link>
        )}
      </div>
    </div>
  );
}

export default Home;
