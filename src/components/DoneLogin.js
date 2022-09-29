import React from "react";
import { Link } from "react-router-dom";

function DoneLogin (props){
  return (
    <div className="flex h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 items-center justify-center flex-col">
      <div className="text-white font-bold text-2xl">{`Hey there ${props.name} !`}</div>
      <div className="text-white font-semibold text-xl">You are logged In</div>
      <div> <Link to="/" className="underline text-white font-medium">Back to login</Link></div>
       </div>
  );
}

export default DoneLogin;
