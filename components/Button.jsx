import React from "react";
const Button = (headText, disabled = false, onChange, className = "") => {
  return (
    <button
      className={`${className} || bg-black rounded-md px-5 py-2 text-white hover:bg-slate-800`}
      onClick={() => {
        onChange
      }}
    >
      {headText}
    </button>
  );
};
export default Button;
