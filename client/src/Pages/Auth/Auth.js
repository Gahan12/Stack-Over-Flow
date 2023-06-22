import React, { useState } from "react";
import logo from "../../Components/images/logo.webp";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp, logIn } from "../../actions/auth.js";

const Auth = () => {
  const [login, setLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handle = () => {
    setLogin(!login);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    if (!email || !password) alert('Enter email and password');
    if (!login) {
      if (!name) alert('Enter a name to continue');
      dispatch(signUp({ name, email, password }, navigate));
    }
    else {
      dispatch(logIn({ email, password }, navigate));
    }
  }

  return (
    <div
      className="auth-section"
      style={
        !login
          ? {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
              width: "100vw",
              backgroundColor: "#f1f2f3",
            }
          : {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
              width: "100vw",
              backgroundColor: "#f1f2f3",
            }
      }
    >
      {login ? (
        <img src={logo} style={{ backgroundColor: "#f1f2f3", height:"7vh", width:"7vh" }} />
      ) : (
        <div
          className="auth-container-1"
          style={{
            padding: "20px",
            marginRight: "30px",
          }}
        >
          <h1>Join the Stack Overflow community</h1>
          <p>Get unstuck — ask a question</p>
          <p>Unlock new privileges like voting and commenting</p>
          <p>Save your favorite tags, filters, and jobs</p>
          <p>Earn reputation and badges</p>
          <p style={{ fontSize: "13px", color: "rgb(102, 103, 103)" }}>
            Collaborate and share knowledge with a private group for
          </p>
          <p style={{ fontSize: "13px", color: "rgb(0, 122, 198)" }}>
            Get Stack Overflow for Teams free for up to 50 users.
          </p>
        </div>
      )}

      <div
        className="auth-container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "20px",
            width: "20vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          onSubmit={submitHandle}
        >
          {!login && (
            <div
              className="name"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label
                style={{
                  marginBottom: "1vh",
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                Display Name
              </label>
              <input type="text" style={{ padding: "10px", fontSize: "13px" }} onChange={(e) => { setName(e.target.value) }} />
              <br />
            </div>
          )}
          <label
            style={{
              marginBottom: "1vh",
              color: "black",
              fontWeight: "bolder",
            }}
          >
            Email
          </label>
          <input type="text" style={{ padding: "10px", fontSize: "13px" }} onChange={(e) => { setEmail(e.target.value) }} />
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1vh",
            }}
          >
            <label style={{ color: "black", fontWeight: "bolder" }}>
              Password
            </label>
            {login && (
              <div style={{ color: "#007ac6", cursor: "pointer" }}>
                Forgot password?
              </div>
            )}
          </div>
          <input type="password" style={{ padding: "10px", fontSize: "13px" }} onChange={(e) => { setPassword(e.target.value) }} />
          {!login && (
            <div style={{ color: "#666767", fontSize: "13px" }}>
              Passwords must contain at least eight
              <br /> characters, including at least 1 letter and 1<br /> number.
            </div>
          )}
          {!login && (
            <label style={{ display: "flex", flexDirection: "row" }}>
              <input type="checkbox" />
              <p style={{ fontSize: "13px" }}>
                Opt-in to receive occasional
                <br /> product updates, user research invitations,
                <br /> company announcements, and digests.
              </p>
            </label>
          )}
          <br />
          <button
            type="submit"
            style={{
              color: "#fff",
              backgroundColor: "#009ddf",
              padding: "10px 5px",
              borderRadius: "5px",
                cursor: "pointer",
              border: "1px solid #009ddf"
            }}
          >
            {login ? "Log In" : "Sign Up"}
          </button>
          {!login && (
            <p style={{ color: "#666767", fontSize: "13px" }}>
              By clicking “Sign up”, you agree to our{" "}
              <span style={{ color: "#007ac6" }}>
                terms of <br /> service, privacy policy
              </span>{" "}
              and<span style={{ color: "#007ac6" }}> cookie policy</span>
            </p>
          )}
        </form>
        <p>
          {!login ? "Alreay have an account?" : "Don't have an account?"}
          <button
            onClick={handle}
            style={{ border: "none", color: "#007ac6", cursor: "pointer" }}
          >
            {login ? "sign up" : "log in"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
