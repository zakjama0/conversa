import { useState, useEffect } from "react"
import MessageList from "./MessageList"
import MessageForm from "./MessageForm";

const Chat = ({chatroom, deleteChatroom, sendMessage}) => {

    const [messages, setMessages] = useState ([]);

    const handleDeleteButton = () => {
        deleteChatroom(chatroom.id)
    }

    

    const fetchMessages = async() => {
        const response = await fetch (`http://localhost:8080/chatrooms/${chatroom.id}`)
        // const response = await fetch (`http://localhost:8080/messages`)
        const data = await response.json()
        
        setMessages(data.messages)
    }

    useEffect(() => {
        fetchMessages();
        console.log(messages);
    }, [])
    
    return ( 
        <>
            <h2>{chatroom.name}</h2>
            <button onClick={handleDeleteButton}>Delete</button>
            <MessageList messages={messages}/>
            <MessageForm sendMessage={sendMessage}/>
            
        </>
    );
}
 
export default Chat;