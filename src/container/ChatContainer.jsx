import React, { useEffect, useState } from "react";
import ChatList from "../components/ChatList";
import ChatForm from "../components/ChatForm";
import Login from "../components/Login";

export const userState = React.createContext();

const ChatContainer = () => {
    const [users, setUsers] = useState([]);
    const [activeUser, setActiveUser] = useState([]);
    const [chatrooms, setChatrooms] = useState([]);

    const fetchChatroom = async () => {
        const response = await fetch('http://localhost:8080/chatrooms')
        const data = await response.json()
        setChatrooms(data)
    }

    const fetchUsers = async () => {
        const response = await fetch('http://localhost:8080/users')
        const data = await response.json()
        setUsers(data)
    }


    useEffect(() => {
        fetchChatroom()
        fetchUsers()
        console.log(users)
    }, [])


    const postChatrooms = async (newChatroom) => {
        const response = await fetch("http://localhost:8080/chatrooms", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newChatroom)
        })
        const savedNewChatroom = await response.json();
        setChatrooms([...chatrooms, savedNewChatroom]);
    }

    const deleteChatroom = async (chatroomId) => {

        await fetch("http://localhost:8080/chatrooms/" + chatroomId, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })
        console.log(chatroomId);
        setChatrooms(chatrooms.filter((chatroom) => chatroom.id !== chatroomId))
    }


    return (
        <>

            <userState.Provider value={{ activeUser, setActiveUser }}>
                <Login users={users} />
                <ChatList chatrooms={chatrooms} deleteChatroom={deleteChatroom} />
                <ChatForm chatrooms={chatrooms} postChatrooms={postChatrooms} />

            </userState.Provider>
        </>
    );
}

export default ChatContainer;