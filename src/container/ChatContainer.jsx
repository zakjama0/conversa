import React, { useEffect, useState } from "react";
import ChatList from "../components/ChatList";
import ChatForm from "../components/ChatForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Navigation from "../components/Navigation";

export const userState = React.createContext();

const ChatContainer = () => {

    const [users, setUsers] = useState([]);
    const [activeUser, setActiveUser] = useState({});
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

    const registerUser = (newUser) => {
        setUsers([...users, newUser]);
      }
    
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


    const chatRoutes = createBrowserRouter([
        {
            path: "/",
            element: <Navigation />,
            children: [
                {
                    path: "/login",
                    element: <Login
                        users={users} />
                },
                {
                    path: "/chatrooms",
                    element: <ChatList
                        chatrooms={chatrooms}
                        deleteChatroom={deleteChatroom} />
                },
                {
                    path: "/chatrooms/new",
                    element: <ChatForm
                        chatrooms={chatrooms}
                        postChatrooms={postChatrooms} />
                },
                {
                    path: "/register",
                    element: <Register users={users} registerUser={registerUser} />
                }


            ]

        }

    ])

    return (
        <>

            <userState.Provider value={{ activeUser, setActiveUser }}>
                {/* <Login users={users} />
                <ChatList chatrooms={chatrooms} deleteChatroom={deleteChatroom} />
                <ChatForm chatrooms={chatrooms} postChatrooms={postChatrooms} /> */}
                <RouterProvider router={chatRoutes}/>
            </userState.Provider>
        </>
    );
}

export default ChatContainer;