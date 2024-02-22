import React, { useContext, useEffect, useState } from "react";
import {
  Avatar,
  CardSide,
  ChatBubbleStart,
  ChatBubbleEnd,
  TextInput,
  Modal,
  Button,
  AddItemModal,
} from "../components";
import { AuthContext } from "../context/AuthContext";
import {
  doc,
  onSnapshot,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";
import { db, auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function Bidding() {
  const li = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    fetchAuctionItem();
  }, []);

  const fetchAuctionItem = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "auctionItem"));
      querySnapshot.forEach((doc) => {
        const { items } = doc.data();
        console.log(items);
        setItemList(items);
      });
    } catch (error) {
      console.error(error);
    }
  };

  // const auctionedItem = async () => {
  //   try {
  //     const docRef = await addDoc(collection(db, "auctionItem"), {
  //       name: "",
  //       startingPrice: 0,
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // };

  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <div className="flex flex-none">
        <div className="container sticky left-0 flex max-h-max w-[120%] flex-wrap justify-center bg-orange-300">
          <Avatar currentUser={currentUser} />
          <div className="container mt-80 flex flex-wrap justify-center">
            <Button onCF={() => signOut(auth)} label={"Logout"} />
            <Button
              onCF={() => document.getElementById("my_modal_2").showModal()}
              label={"Auction"}
            />
          </div>
          <div className="fixed -bottom-0 flex flex-wrap justify-center">
            <div className="flex flex-wrap justify-evenly">
              <ChatBubbleStart />
              <ChatBubbleEnd />
            </div>
            <TextInput />
          </div>
        </div>
        <Modal />
        <AddItemModal />
        <div className="m-4 flex flex-wrap justify-evenly gap-4">
          {itemList.map((l, index) => {
            return <CardSide key={index} />;
          })}
        </div>
      </div>
    </>
  );
}
