import React from "react";
import {
  Avatar,
  CardSide,
  ChatBubbleStart,
  ChatBubbleEnd,
  TextInput,
} from "../components";
export default function Bidding() {
  const li = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
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
        <div className="m-4 flex flex-wrap justify-evenly gap-4">
          {li.map((l) => {
            return <CardSide />;
          })}
        </div>
      </div>
    </>
  );
}
