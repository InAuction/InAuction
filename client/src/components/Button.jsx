import React from "react";

export default function Button({ onCF, label }) {
  return (
    <>
      <button
        onClick={onCF}
        className="btn btn-primary text-3xl font-bold text-neutral"
      >
        {label}
      </button>
    </>
  );
}
