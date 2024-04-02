import Chat from "./Chat";
const ChatList = ({chatrooms, getAllChatrooms, getChatroomById, updateChatroom, deleteChatroom}) => {
    const mapChatList = chatrooms.map((chatroom, index) => {
        return <Chat 
                chatroom={chatroom} 
                key={index} 
                deleteChatroom={deleteChatroom}/>
    })

    

    return ( 
        <>
            <h1>Chatroom List</h1>
            {mapChatList}
        </>
    );
}
 
export default ChatList;