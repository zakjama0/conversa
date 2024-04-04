import React, { useEffect, useState } from "react";
import ChatList from "../components/ChatList";
import ChatForm from "../components/ChatForm";
import Chat from "../components/Chat";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Navigation from "../components/Navigation";
import Welcome from "../components/Welcome"


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

    // const registerUser = (newUser) => {
    //     setUsers([...users, newUser]);
    // }

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

    const registerUser = async (newUser) => {
        const response = await fetch("http://localhost:8080/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser)
        })
        const savedUser = await response.json();
        setUsers([...users, savedUser]);
    }

    const chatroomLoader = ({params}) => {
        return chatrooms.find(chatroom => {
            return chatroom.id === parseInt(params.id);
        });
    }

    const chatRoutes = createBrowserRouter([
        {
            path: "/",
            element: <Navigation />,
            children: [
                {
                    path: "/home",
                    element: <Welcome
                    />
                },
                {
                    path: "/login",
                    element: <Login
                        users={users} />
                },
                {
                    path: "/chatrooms/new",
                    element: <ChatForm
                        chatrooms={chatrooms}
                        postChatrooms={postChatrooms} />
                },
                {
                    path: "/chatrooms",
                    element: <ChatList
                        chatrooms={chatrooms}/>,
                        children: [
                            {
                                path:"/chatrooms/:id",
                                loader: chatroomLoader,
                                element: <Chat deleteChatroom={deleteChatroom}/>
                            },
    
                        ]
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
            <div className="container">
                <userState.Provider value={{ activeUser:activeUser, setActiveUser:setActiveUser }}>
                    {/* <Login users={users} />
                <ChatList chatrooms={chatrooms} deleteChatroom={deleteChatroom} />
                <ChatForm chatrooms={chatrooms} postChatrooms={postChatrooms} /> */}
                    <RouterProvider router={chatRoutes} />
                </userState.Provider>
            </div>
        </>
    );
}


export default ChatContainer;