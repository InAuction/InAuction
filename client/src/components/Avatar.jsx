import React from "react";

export default function Avatar({ currentUser }) {
  return (
    <>
      <div className="avatar mx-auto">
        <div className="mt-5 flex size-56 flex-wrap rounded-full ring">
          <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg" />
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <h1 className="text-3xl font-bold text-neutral">
          {currentUser.displayName}
        </h1>
      </div>
    </>
  );
}
