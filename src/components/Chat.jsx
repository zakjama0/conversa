import { useState, useEffect, useContext } from "react"
import MessageList from "./MessageList"
import MessageForm from "./MessageForm";
import UserList from "./UserList";
import { userState } from "../container/ChatContainer";

const Chat = ({chatroom, deleteChatroom, sendMessage}) => {
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

    useEffect(() => {
        fetchMessages();
    }, [])
    
    return ( 
        <>
            <h2>{chatroom.name}</h2>
            <button onClick={handleDeleteButton}>Delete</button>
            <MessageList messages={messages}/>
            <MessageForm sendMessage={sendMessage}/>
            <UserList users={users}/>

        </>
    );
}

 
export default Chat;