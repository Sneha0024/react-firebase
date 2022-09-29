import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        
        navigate("/LoggedIn");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <div className="flex h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 items-center justify-center">
      <div className= "shadow-lg rounded-lg bg-white p-6 gap-8 flex flex-col">
        <div>
        <h1 className="text-xl font-bold text-center">Welcome !</h1>
        <h3 className="text-base text-center text-slate-500">Please Login to Continue</h3>
        </div>
        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <InputControl
          label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />

        <div className="flex flex-col">
          <b className="text-center text-red-500">{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission} className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white cursor-pointer font-semibold py-2 px-6 rounded-sm shadow-sm footer-button">
            Login
          </button>
          <p className="text-black font-bold py-2">
            Already have an account?{" "}
            <span className="text-violet-600 font-semibold">
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
