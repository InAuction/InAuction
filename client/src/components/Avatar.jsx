import React from "react";

export default function Avatar({ currentUser }) {
  return (
    <>
      <div className="avatar fixed">
        <div className="mt-5 flex size-56 flex-wrap rounded-full ring ring-offset-4">
          <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg" />
        </div>
      </div>
      <div className="fixed mt-64 flex justify-center">
        <h1 className="text-3xl font-bold text-neutral">
          {currentUser.displayName}
        </h1>
      </div>
     
    </>
  );
}
