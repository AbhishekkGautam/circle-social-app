import React, { useState } from "react";
import {
  CalendarIcon,
  EmojiHappyIcon,
  PhotographIcon,
} from "@heroicons/react/outline";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

export const Input = () => {
  const [input, setInput] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);

  const addEmoji = emoji => {
    setInput(input + emoji.native);
  };

  return (
    <div
      className={`border-b border-gray-700 py-3 px-4 flex space-x-3 overflow-y-scroll scrollbar-hide`}
    >
      <img
        src="https://i.pravatar.cc/300?img=11"
        alt="avatar"
        className="h-11 w-11 rounded-full cursor-pointer"
      />
      <div className="w-full divide-y divide-gray-700">
        <div className={`${input && "space-y-2.5"}`}>
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            rows="3"
            placeholder="What's happening?"
            className="bg-transparent outline-none text-white text-xl placeholder-gray-500 tracking-wide w-full min-h-[54px]"
          />
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex items-center">
            <div className="icon">
              <PhotographIcon className="h-6 text-[#1d9bf0]" />
              <input type="file" className="hidden" />
            </div>
            <div className="icon" onClick={() => setShowEmoji(!showEmoji)}>
              <EmojiHappyIcon className="h-6 text-[#1d9bf0]" />
            </div>
            <div className="icon">
              <CalendarIcon className="h-6 text-[#1d9bf0]" />
            </div>
            {showEmoji && (
              <Picker
                onSelect={addEmoji}
                style={{
                  position: "absolute",
                  marginTop: "465px",
                  marginLeft: -40,
                  maxWidth: "320px",
                  borderRadius: "20px",
                }}
                theme="dark"
                set="twitter"
              />
            )}
          </div>
          <button
            className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:cursor-default disabled:opacity-50"
            disabled={!input.trim()}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};
