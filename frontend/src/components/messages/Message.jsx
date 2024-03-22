/* eslint-disable react/prop-types */
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { formatTime } from "../../utils/formatTime";

const Message = ({ message }) => {

  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = formatTime(message.createdAt);
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic; 
  const bubbleBgColor = fromMe ? 'bg-blue-500' : '';
  const shakeClass = message.animate ? 'shake' : '';

  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
            <div className="w-8 rounded-full">
              <img alt="User Avatar" src={profilePic} />
          </div>
        </div>
      <div className={`chat-bubble text-white text-sm pb-1 ${bubbleBgColor}${shakeClass}`}>{message.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTime}</div>
    </div>
  )
}

export default Message