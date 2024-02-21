import { signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

export default function Avatar() {
  return (
    <>
      <div className="avatar fixed">
        <div className="mt-5 flex size-56 flex-wrap rounded-full ring ring-offset-4">
          <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg" />
        </div>
      </div>
      <div className="fixed mt-64 flex justify-center">
        <h1 className="text-3xl font-bold text-neutral">Garfield</h1>
      </div>
      <button
        onClick={() => signOut(auth)}
        className="btn btn-primary mt-80 text-3xl font-bold text-neutral"
      >
        Logout
      </button>
    </>
  );
}
