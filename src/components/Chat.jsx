import { useState, useEffect } from "react"
import MessageList from "./MessageList"
import MessageForm from "./MessageForm";
import UserList from "./UserList";
import { useLoaderData, useNavigate } from "react-router-dom";


const Chat = ({  deleteChatroom }) => {
   
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const chatroom = useLoaderData();
    const navigate = useNavigate();

    const handleDeleteButton = () => {
        deleteChatroom(chatroom.id)
        navigate("/chatrooms");
    }

    const fetchMessages = async () => {
        const response = await fetch(`http://localhost:8080/chatrooms/${chatroom.id}`);
        const data = await response.json()

        setMessages(data.messages)
        let userData = data.messages.map((message) => message.user.username);
        let user = [...new Set(userData)];
        setUsers(user);
    }

    const postMessage = async (newMessage) => {
        const response = await fetch("http://localhost:8080/messages", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newMessage)
        })
        const savedNewMessage = await response.json();
        setMessages([...messages, savedNewMessage]);
    }

    useEffect(() => {
        fetchMessages();
    }, [chatroom])

    return (
        <>
            <div className="chat">
                <h2>{chatroom.name}</h2>
                <button onClick={handleDeleteButton}>Delete</button>
                <MessageList messages={messages} />
                <MessageForm postMessage={postMessage} chatroom={chatroom}/>
                <UserList users={users} />
            </div>
        </>
    );
}

export default Chat;