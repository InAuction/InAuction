import React from "react";

export default function ChatBubbleStart() {
  return (
    <>
      <div className="chat chat-start object-left">
        <div className="avatar chat-image mx-2">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className="chat-header text-neutral">
          Obi-Wan Kenobi
          <time className="ms-2 text-xs text-neutral opacity-90">12:45</time>
        </div>
        <div className="chat-bubble">You were the Chosen One!</div>
        <div className="chat-footer text-neutral opacity-90">Delivered</div>
      </div>
    </>
  );
}
