import React from "react";

export default function Login(props) {
  const { login, firstName, setFirstName, lastName, setLastName } = props;
  return (
    <form className="login" onSubmit={(e) => login(e)}>
      <div>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <button>Login</button>
    </form>
  );
}
