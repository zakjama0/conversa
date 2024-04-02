const Chat = ({chatroom, deleteChatroom}) => {

    const handleDeleteButton = () => {
        deleteChatroom(chatroom.id)
    }
    
    return ( 
        <>
            <h2>{chatroom.name}</h2>
            <button onClick={handleDeleteButton}>Delete</button>
        </>
    );
}
 
export default Chat;