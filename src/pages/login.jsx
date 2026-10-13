
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  function handle1(e) {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email").trim().toLowerCase();
    const password = formData.get("password");

    const users = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      localStorage.setItem("isLoggedIn", "true");

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          name: user.name,
          email: user.email
        })
      );

      navigate("/");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  }

  return (
    <div>
      <form onSubmit={handle1} className="login-form">
        <h1>Login</h1>

        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your Email"
          required
        />

        <br />

        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        />

        {error && (
          <p className="error-message">{error}</p>
        )}

        <div className="account">
          <p>
            Don't have an account? <Link to="/sign">Create one</Link>
          </p>
        </div>

        <div className="login-btn">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
