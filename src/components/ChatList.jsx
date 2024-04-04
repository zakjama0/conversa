import Chat from "./Chat";
import {  useNavigate, Outlet } from "react-router-dom";

const ChatList = ({ chatrooms }) => {
  
    const navigate = useNavigate();

    const mapChatList = chatrooms.map((chatroom, index) => {
        // return <Chat
        //     chatroom={chatroom}
        //     key={index}
        //     deleteChatroom={deleteChatroom} />
       
        return <button onClick={ () => navigate(`${chatroom.id}`)}>{chatroom.name}</button>
    })
     
    return (
        <>
            <div className="chatList">
                <h1>Chatroom List</h1>
                <div className="mappedChats">
                    {mapChatList}
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default ChatList;