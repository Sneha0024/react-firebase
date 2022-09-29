import React from "react";

function InputControl(props) {
  return (
    <div className="container flex flex-col">
      {props.label && <label class="block text-sm font-semibold text-gray-700">{props.label}</label>}
      <input type="text" {...props} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border border-voilet-600 hover:border-slate-400"/>
    </div>
  );
}
export default InputControl;
