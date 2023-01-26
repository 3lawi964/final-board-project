import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
// import db from "../../utils/firebase";
import { auth } from "../../utils/firebase";
// import AuthProvider from "./Auth.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log(userCredential);
    });
  };

  return (
    <div className="flex justify-center items-center flex-col space-y-4">
      <h2 className="text-lg">Sign in with</h2>
      <form onSubmit={loginUser}>
        <div className="flex justify-center items-center flex-col space-y-4">
          <label>
            Email
            <input
              className="form-control block w-fit px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              name="email"
              type="email"
              placeholder="Type it here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password
            <input
              className="form-control block w-fit px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
