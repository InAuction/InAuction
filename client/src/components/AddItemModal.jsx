import React from "react";

import { TextInput } from "./index";

export default function AddItemModal() {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_2" className="modal content-center">
        <div className="full card modal-box w-1/4 bg-base-100 shadow-xl">
          <figure>
            <img
              className=""
              src="https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg"
              alt="Shoes"
            />
          </figure>
          <form action="" className="mt-5 flex flex-wrap justify-center gap-5">
            <TextInput label={"Item Name"} />
            <TextInput label={"Starting price"} />
            <button className="text-neutral btn bg-orange-300">Put for auction</button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
