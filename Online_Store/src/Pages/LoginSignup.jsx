import "./CSS/LoginSignup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const resetFields = () => {
    setName("");
    setEmail("");
    setPassword("");
    setAgree(false);
  };

  const handleSignup = () => {
    if (!name.trim()) {
      window.Swal?.fire("Validation", "Please enter your name", "warning");
      return;
    }
    if (!EMAIL_REGEX.test(email)) {
      window.Swal?.fire("Validation", "Please enter a valid email", "warning");
      return;
    }
    if (password.length < 6) {
      window.Swal?.fire(
        "Validation",
        "Password must be at least 6 characters",
        "warning"
      );
      return;
    }
    if (!agree) {
      window.Swal?.fire(
        "Validation",
        "You must agree to the terms to continue",
        "warning"
      );
      return;
    }

    try {
      const stored = localStorage.getItem("registeredUsers");
      const users = stored ? JSON.parse(stored) : {};
      // store by email
      users[email] = { name: name.trim(), email, password };
      localStorage.setItem("registeredUsers", JSON.stringify(users));
      window.Swal?.fire(
        "Success",
        "Signup successful. Please login.",
        "success"
      );
      resetFields();
      setIsSignup(false);
    } catch (e) {
      window.Swal?.fire("Error", "Unable to save user. Try again.", "error");
    }
  };

  const handleLogin = () => {
    if (!EMAIL_REGEX.test(email)) {
      window.Swal?.fire("Validation", "Please enter a valid email", "warning");
      return;
    }
    if (!password) {
      window.Swal?.fire("Validation", "Please enter your password", "warning");
      return;
    }

    const stored = localStorage.getItem("registeredUsers");
    const users = stored ? JSON.parse(stored) : {};
    const user = users[email];
    if (!user || user.password !== password) {
      window.Swal?.fire("Error", "Invalid email or password", "error");
      return;
    }

    // Save current user session
    localStorage.setItem(
      "currentUser",
      JSON.stringify({ name: user.name, email: user.email })
    );
    // Notify other components (Navbar) about auth change
    window.dispatchEvent(new Event("authChanged"));
    window.Swal?.fire(
      "Success",
      `Login successful. Welcome ${user.name}!`,
      "success"
    );
    resetFields();
    navigate("/");
  };

  return (
    <div className="loginSignup">
      <div className="loginSignup-container">
        <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
          <button
            type="button"
            onClick={() => setIsSignup(true)}
            className={isSignup ? "active-tab" : "tab"}
          >
            Sign Up
          </button>
          <button
            type="button"
            onClick={() => setIsSignup(false)}
            className={!isSignup ? "active-tab" : "tab"}
          >
            Login
          </button>
        </div>

        <h1>{isSignup ? "Create your account" : "Welcome back"}</h1>

        <div className="loginSignup-fields">
          {isSignup && (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your Name"
            />
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email Address"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </div>

        {isSignup ? (
          <>
            <div className="loginsignup-agree" style={{ marginTop: 18 }}>
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <p>
                By continuing, I agree to the terms of use and privacy policy.
              </p>
            </div>
            <button type="button" onClick={handleSignup}>
              Continue
            </button>
            <p className="loginSignup-login">
              Already have an account?{" "}
              <span onClick={() => setIsSignup(false)}>Login here</span>
            </p>
          </>
        ) : (
          <>
            <button type="button" onClick={handleLogin}>
              Login
            </button>
            <p className="loginSignup-login">
              Don't have an account?{" "}
              <span onClick={() => setIsSignup(true)}>Sign up here</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
