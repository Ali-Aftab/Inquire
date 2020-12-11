import React from "react";

export default function Login(props) {
  const { login, firstName, setFirstName, lastName, setLastName } = props;
  return (
    <form className="login fade-from-bottom" onSubmit={(e) => login(e)}>
      <div className="login-field">First Name</div>
      <div className="login-field">
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="login-input"
        />
      </div>
      <div className="login-field">Last Name</div>
      <div className="login-field">
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="login-input"
        />
      </div>
      <button className="login-field">Login</button>
    </form>
  );
}
