import React, { useContext, useEffect, useState } from "react";
import {
  collection,
  addDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { TextInput } from "./index";
import { AuthContext } from "../context/AuthContext";
export default function AddItemModal() {
  const { currentUser } = useContext(AuthContext);
  const [item, setItem] = useState({
    name: "",
    startingPrice: 0,
    imageUrl: "",
    bid: [],
    owner: "",
    currentPrice: 0,
    status: true,
  });

  useEffect(() => {
    setItem((prev) => ({
      ...prev,
      owner: "/users/" + currentUser.uid,
    }));
  }, [currentUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "auctionItem"), item);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

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
          <form
            action=""
            className="mt-5 flex flex-wrap justify-center gap-5"
            onSubmit={handleSubmit}
          >
            <TextInput
              label={"Item Name"}
              name={"name"}
              onCF={handleInput}
              value={item.name}
            />
            <TextInput
              label={"Starting Price"}
              name={"currentPrice"}
              onCF={handleInput}
              value={item.currentPrice}
            />
            <TextInput
              label={"Image"}
              name={"imageUrl"}
              onCF={handleInput}
              value={item.imageUrl}
            />
            <button className="btn bg-orange-300 text-neutral">
              Put for auction
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
