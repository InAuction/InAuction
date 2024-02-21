import React from "react";
import Modal from "./Modal";

export default function CardSide() {
  return (
    <>
      <div className="card card-side flex flex-row border-2 border-amber-200 border-opacity-60 bg-base-100 shadow-xl">
        <figure>
          <img
            className="size-80 object-cover"
            src="https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Item Name</h2>
          <p className="max-w-xs">
            Item description: Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Maxime maiores, nostrum ipsa temporibus iusto
            totam?
          </p>
          <div className="card-actions justify-around">
            <button
              className="btn min-w-20 bg-orange-300 bg-opacity-90 text-neutral"
              onClick={() => document.getElementById("my_modal").showModal()}
            >
              Bid
            </button>
            <button className="btn min-w-20 bg-orange-300 bg-opacity-90 text-neutral">
              Delete
            </button>
          </div>
          <div className="grid-cols col-span-2 flex">
            <p className="col-span-1">
              Last bidder: <br /> John Doe
            </p>
            <p className="col-span-1 text-end">
              Latest bid amount: <br /> 800000
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
