
import React, { useContext, useEffect, useState } from "react";
import {
  Avatar,
  CardSide,
  ChatBubbleStart,
  ChatBubbleEnd,
  TextInput,
  Button,
  AddItemModal,
} from "../components";
import { AuthContext } from "../context/AuthContext";
import { onSnapshot, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function Bidding() {
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    onSnapshot(collection(db, "auctionItem"), (querySnapshot) => {
      let listItem = [];
      querySnapshot.forEach((doc) => {
        const item = doc.data();
        item.id = doc.id;
        listItem.push(item);
      });
      setItemList((prev) => [...listItem]);
    });
  }, []);

  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <div className="relative flex flex-none">
        <div className="container sticky left-0 top-0 flex max-h-screen w-[70%] flex-wrap justify-center bg-orange-300">
          <div className="align-center container flex w-full flex-col">
            <Avatar currentUser={currentUser} />
            <div className="container absolute mt-80 flex flex-wrap justify-center">
              <Button onCF={() => signOut(auth)} label={"Logout"} />
              <Button
                onCF={() => document.getElementById("my_modal_2").showModal()}
                label={"Auction"}
              />
            </div>
          </div>
          <div className="fixed -bottom-0 flex flex-wrap justify-center">
            <div className="flex flex-wrap justify-evenly">
              <ChatBubbleStart />
              <ChatBubbleEnd />
            </div>
            <TextInput />
          </div>
        </div>
        <AddItemModal />
        <div className="m-4 flex flex-wrap justify-evenly gap-4">
          {itemList.map((item, index) => {
            return <CardSide key={index} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}
