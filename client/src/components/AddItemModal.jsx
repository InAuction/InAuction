import React, { useContext, useState } from "react";
import {
  doc,
  onSnapshot,
  collection,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db, auth } from "../firebase";
import { TextInput } from "./index";
import { AuthContext } from "../context/AuthContext";

export default function AddItemModal() {
  const { currentUser } = useContext(AuthContext);
  const [item, setItem] = useState({
    itemName: "",
    startingPrice: 0,
    imageUrl: "",
  });

  // const unsub = onSnapshot(doc(db, "auctionItem", currentUser.uid), (doc) => {
  //   console.log("Current data: ", doc.data());
  // });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(currentUser.uid);
    try {
      const res = await getDocs(db, "auctionItem", currentUser.uid);

      if (!res.exists()) {
        await setDoc(doc(db, "auctionItem", currentUser.uid), { items: [] });
      }


//       auctionItem: {
//         auctioner:{
//           itemList:{
//             itemName,
//             startingPrice,
//             imageUrl,
//             bid:[{
// name,
// bidPrice,
// date,
//             }]
//           }
//         }
//       }
      console.log(item);
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
              name={"itemName"}
              onCF={handleInput}
              value={item.itemName}
            />
            <TextInput
              label={"Starting Price"}
              name={"startingPrice"}
              onCF={handleInput}
              value={item.startingPrice}
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
