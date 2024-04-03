import { useState, useEffect, useContext } from "react"
import MessageList from "./MessageList"
import MessageForm from "./MessageForm";
import UserList from "./UserList";
import { userState } from "../container/ChatContainer";

const Chat = ({chatroom, deleteChatroom}) => {
    const context = useContext(userState)
    const {activeUser} = context;

    const [messages, setMessages] = useState ([]);
    const [users, setUsers] = useState ([]);

    const handleDeleteButton = () => {
        deleteChatroom(chatroom.id)
    }

    const fetchMessages = async() => {
        const response = await fetch (`http://localhost:8080/chatrooms/${chatroom.id}`);
        const data = await response.json()
        
        setMessages(data.messages)
       let userData = data.messages.map((message)=> message.user.username);
       let user = [...new Set(userData)];
       setUsers(user);
    }
    
    const postMessage = async(newMessage) => {
        const response = await fetch("http://localhost:8080/messages", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newMessage)
        })
        const savedNewMessage = await response.json();
        setMessages([...messages, savedNewMessage]);
    }

    useEffect(() => {
        fetchMessages();
    }, [])
    
    return ( 
        <>
        <div className = "chat">
            <h2>{chatroom.name}</h2>
            <button onClick={handleDeleteButton}>Delete</button>
            <MessageList messages={messages}/>
            <MessageForm postMessage={postMessage} chatroom={chatroom} activeUser={activeUser}/>
            <UserList users={users}/>
            </div>

        </>
    );
}

 
export default Chat;