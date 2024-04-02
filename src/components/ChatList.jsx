import Chat from "./Chat";
const ChatList = ({chatrooms, getAllChatrooms, getChatroomById, updateChatroom, deleteChatroom}) => {
    const mapChatList = chatrooms.map((chat, index) => {
        return <Chat chat={chat} key={index} />
    })

    return ( 
        <>
            <h1>Chatroom List</h1>
            {mapChatList}
        </>
    );
}
 
export default ChatList;