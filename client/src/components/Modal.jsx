import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";
import {
  arrayUnion,
  collection,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

const Card = ({ el }) => {
  return (
    <>
      <div className="container flex flex-auto">
        <p className="grid-span-1 flex justify-center text-lg">{el.bidder}</p>
        <p className="grid-span-1 flex justify-center text-lg">{el.bidAmount}</p>
      </div>
    </>
  );
};

export default function Modal({ item }) {
  const { currentUser } = useContext(AuthContext);

  const bidFiftyThousand = async () => {
    try {
      const updatedData = await updateDoc(
        doc(db, "auctionItem", item.id),
        {
          bid: [
            ...item.bid,
            {
              bidder: currentUser.displayName,
              bidAmount: +item.currentPrice + 50000,
            },
          ],
          currentPrice:
            item.bid.toSorted((a, b) => b.bidAmount - a.bidAmount)[0]
              ?.bidAmount + 50000 || +item.currentPrice + 50000,
        },
        { merge: false },
      );
    } catch (error) {
      console.error(error);
    }
  };

  const bidTenThousand = async () => {
    try {
      const updatedData = await updateDoc(
        doc(db, "auctionItem", item.id),
        {
          bid: [
            ...item.bid,
            {
              bidder: currentUser.displayName,
              bidAmount: +item.currentPrice + 10000,
            },
          ],
          currentPrice:
            item.bid.toSorted((a, b) => b.bidAmount - a.bidAmount)[0]
              ?.bidAmount + 10000 || +item.currentPrice + 10000,
        },
        { merge: false },
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id={item.id} className="modal content-center">
        <div className="full card modal-box w-1/4 bg-base-100 shadow-xl">
          <figure>
            <img
              className=""
              src={item.imageUrl}
              alt={item.name}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <div className="container flex flex-auto">
              <p className="grid-span-1 flex justify-center text-lg">Bidder</p>
              <p className="grid-span-1 flex justify-center text-lg">Amount</p>
            </div>
            {item.bid.map((el, index) => {
              return <Card key={index} el={el} />;
            })}
            <div className="card-actions justify-around">
              <button
                onClick={bidTenThousand}
                className="btn min-w-20 bg-orange-300 bg-opacity-90 text-neutral"
              >
                +10,000
              </button>
              <button
                onClick={bidFiftyThousand}
                className="btn min-w-20 bg-orange-300 bg-opacity-90 text-neutral"
              >
                +50,000
              </button>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
