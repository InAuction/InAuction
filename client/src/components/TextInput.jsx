import React from "react";

export default function TextInput() {
  return (
    <>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered mb-5 max-w-xl overflow-hidden sm:w-fit md:w-fit lg:w-[90%]"
      />
    </>
  );
}
