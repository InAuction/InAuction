import React from "react";

export default function TextInput({ label, name, onCF, value }) {
  return (
    <>
      {label && (
        <label className="input input-bordered flex w-96 items-center">
          {label}
          <input
            type="text"
            className="ms-5 grow"
            placeholder="Type here"
            name={name}
            value={value}
            onChange={onCF}
          />
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
