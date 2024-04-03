import Chat from "./Chat";


const ChatList = ({ chatrooms, getAllChatrooms, getChatroomById, updateChatroom, deleteChatroom }) => {
    const mapChatList = chatrooms.map((chatroom, index) => {
        return <Chat
            chatroom={chatroom}
            key={index}
            deleteChatroom={deleteChatroom} />
        return <button>{chatroom.name}</button>
    })

     
    return (
        <>
            <div className="chatList">
                <h1>Chatroom List</h1>
                <div className="mappedChats">
                    {mapChatList}
                </div>
            </div>
        </>
    );
}

export default ChatList;