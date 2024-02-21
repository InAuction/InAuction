import React, { useEffect } from "react";
import {
  Avatar,
  CardSide,
  ChatBubbleStart,
  ChatBubbleEnd,
  TextInput,
  Modal
} from "../components";
export default function Bidding() {
  const li = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  // useEffect(() => {
  //   const unsub = onSnapshot(doc(db, "users", "SF"), (doc) => {
  //     console.log("Current data: ", doc.data());
  //   });
  // }, []);

  return (
    <>
      <div className="flex flex-none">
        <div className="container sticky left-0 flex max-h-max w-[120%] flex-wrap justify-center bg-orange-300">
          <Avatar />
          <div className="fixed -bottom-0 flex flex-wrap justify-center">
            <div className="flex flex-wrap justify-evenly">
              <ChatBubbleStart />
              <ChatBubbleEnd />
            </div>
            <TextInput />
          </div>
        </div>
        <Modal />
        <div className="m-4 flex flex-wrap justify-evenly gap-4">
          {li.map((l, index) => {
            return <CardSide key={index}/>;
          })}
        </div>
      </div>
    </>
  );
}
