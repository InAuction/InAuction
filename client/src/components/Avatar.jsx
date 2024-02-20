import React from "react";

export default function Avatar() {
  return (
    <>
      <div className="avatar fixed">
        <div className="mt-5 flex size-56 flex-wrap rounded-full ring ring-offset-4">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div className="mt-64">
        <h1 className="text-neutral text-3xl font-bold">John Doe</h1>
      </div>
    </>
  );
}
