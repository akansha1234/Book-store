import React, { useState } from "react";
import fire from "../Config/firebase";
import Lottie from "react-lottie";
import animationData from "../lotties/reading-in-login";
import { Form, Button } from "react-bootstrap";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(true);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const Login = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log(u);
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };
  const SignUp = (e) => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log(u);
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };
  return (
    <div className="login-page">
      <div className="login-image">
        <Lottie options={defaultOptions} height={400} max-width={600} />
      </div>
      <Form className="login-form">
        <h1>Get's Started</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="btn-container">
          {hasAccount ? (
            <>
              <Button type="submit" onClick={Login} className="login-button">
                Sign In
              </Button>
              <p>
                Don't have an account?
                <span
                  className="register"
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  {" "}
                  Register{" "}
                </span>
                here.
              </p>
            </>
          ) : (
            <>
              <Button type="submit" onClick={SignUp} className="login-button">
                Register
              </Button>
              <p>
                Already have an account?
                <span
                  className="register"
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  {" "}
                  Sign In{" "}
                </span>
                here.
              </p>
            </>
          )}
        </div>
      </Form>
    </div>
  );
};
export default Login;
