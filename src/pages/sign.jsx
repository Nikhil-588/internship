
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Sign() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  function handleSignup(e) {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name").trim();
    const email = formData.get("email").trim().toLowerCase();
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    // Check whether passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Get registered users from localStorage
    const users = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    // Check whether email already exists
    const existingUser = users.find(
      (user) => user.email === email
    );

    if (existingUser) {
      setError("This email is already registered. Please log in.");
      return;
    }

    // Save new user
    users.push({ name, email, password });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! Please log in.");
    navigate("/login");
  }

  return (
    <div className="bg">
      <form className="login-form1" onSubmit={handleSignup}>
        <h1>Sign Up</h1>

        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Full Name"
          required
        />

        <br />

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
          placeholder="Enter Password"
          required
        />

        <br />

        <label htmlFor="confirmPassword">
          Re-enter Password
        </label>
        <br />
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Re-enter Password"
          required
        />

        {error && (
          <p className="error-message">{error}</p>
        )}

        <div className="account1">
          <p>
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>
        </div>

        <div className="sign-btn">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Sign;
