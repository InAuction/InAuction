import React from "react";
import { Modal } from "../components";

export default function CardSide({ item }) {
  return (
    <>
      <div className="card card-side flex flex-row border-2 border-amber-200 border-opacity-60 bg-base-100 shadow-xl">
        <figure>
          <img
            className="size-80 object-cover"
            src={item.imageUrl}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <p className="max-w-xs">
            {item.detail}
          </p>
          <div className="card-actions justify-around">
            <button
              className="btn min-w-20 bg-orange-300 bg-opacity-90 text-neutral"
              onClick={() => document.getElementById(`${item.id}`).showModal()}
            >
              Bid
            </button>
            <button className="btn min-w-20 bg-orange-300 bg-opacity-90 text-neutral">
              Delete
            </button>
          </div>
          <div className="grid-cols col-span-2 flex">
            <p className="col-span-1">
              Last bidder: <br /> {item.bid.bidder}
            </p>
            <p className="col-span-1 text-end">
              Current Price: <br /> {item.currentPrice}
            </p>
            <Modal item={item}/>
          </div>
        </div>
      </div>
    </>
  );
}
