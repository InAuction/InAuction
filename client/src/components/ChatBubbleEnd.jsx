import React from "react";

export default function ChatBubbleEnd() {
  return (
    <>
      <div className="chat chat-end">
        <div className="avatar chat-image mx-2">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className="chat-header text-neutral">
          Anakin
          <time className="ms-2 text-xs opacity-90">12:46</time>
        </div>
        <div className="chat-bubble">I hate you!</div>
        <div className="chat-footer text-neutral opacity-90">Seen at 12:46</div>
      </div>
    </>
  );
}
