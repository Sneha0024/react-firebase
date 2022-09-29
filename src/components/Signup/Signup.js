import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";
function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/LoggedIn");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 items-center justify-center">
      <div className="shadow-lg rounded-lg bg-white p-6 gap-8 flex flex-col">
      <div>
        <h1 className="text-xl font-bold text-center">Signup !</h1>
        <h3 className="text-base text-center text-slate-500">Please Signup to Register</h3>
        </div>
        <InputControl
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />

        <div className="flex flex-col">
          <b className="text-center text-red-500">{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled} className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white cursor-pointer font-semibold py-2 px-6 rounded-sm shadow-sm footer-button">
            Signup
          </button>
          <p className="text-black font-bold py-2">
            Already have an account?{" "}
            <span className="text-violet-600 font-semibold">
              <Link to="/">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
