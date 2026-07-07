import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

function Conversation({ conversation }) {
    const {selectedConversation , setSelectedConversation} = useConversation()
    const isSelected = selectedConversation?._id === conversation._id
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id)

  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-sky-500 py-2 cursor-pointer
         ${isSelected ? "bg-sky-500" : ""}
        `}
        onClick={()=> setSelectedConversation(conversation)}>
        <div className={`avatar ${isOnline ? "avatar-online" : "avatar-offline"}`}>
          <div className="w-12 rounded-full border border-black">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
          </div>
        </div>
      </div>
      <div></div>
        {/* Divider */}
    <div className="border-b border-gray-600 mx-2"></div>
    </>
  );
}

export default Conversation;
