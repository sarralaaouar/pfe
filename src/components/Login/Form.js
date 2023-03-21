import React, { useRef, useState, useEffect } from "react";
import "./Loginform.css";

const Form = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSucess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser("");
    setPwd("");
    setSucess(true);
  };
  return (
    <>
      {success ? (
        <section className="sec2">
          <h1 className="log">You are logged in!</h1>
          <br />
          <p>
            <a href="/" className="si">
              Go to Home
            </a>
          </p>
        </section>
      ) : (
        <section className="sec1">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 className="cnx">Singn In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username" className="n1">
              Username:
            </label>
            <input
              className="name"
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="password" className="n1">
              Password:
            </label>
            <input
              className="pass"
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />

            <button className="sing">Sign In</button>
          </form>
          <p className="n1">
            Need an Account?
            <br />
            <span className="line">
              <a href="/register" className="si">
                Sign Up
              </a>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Form;
