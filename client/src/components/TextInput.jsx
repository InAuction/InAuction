import React from "react";

export default function TextInput({ label }) {
  return (
    <>
      {label && (
        <label className="input input-bordered flex w-96 items-center">
          {label}
          <input type="text" className="grow ms-5" placeholder="Type here" />
        </label>
      )}
      {!label && (
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered mb-5 max-w-xl overflow-hidden sm:w-fit md:w-fit lg:w-[90%]"
        />
      )}
    </>
  );
}
