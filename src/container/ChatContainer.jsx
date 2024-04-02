import MessageList from "../components/MessageList";
import { useEffect, useState } from "react";
import ChatList from "../components/ChatList";
import ChatForm from "../components/ChatForm";
import Login from "../components/Login";

const ChatContainer = () => {
   const [users, setUsers] = useState([]);
   const  [chats, setChats] = useState([]);
   const [messages, setMessages] = useState([])
   const [chatrooms, setChatrooms] = useState([]);
//    const [activeUser, setActiveUser] = useState({});

   const fetchChatroom = async () =>{
    const response = await fetch('http://localhost:8080/chatrooms')
    const data = await response.json()
    setChatrooms(data)
   }

   const fetchUsers = async () =>{
    const response = await fetch('http://localhost:8080/users')
    const data = await response.json()
    setUsers(data)
   }
 

   useEffect(() =>{
    fetchChatroom()
    fetchUsers()
    console.log(users)
   }, [])

//    const chatroomTest = chatroom.map( chatroom =>{
//     return <p>{chatroom.name}</p>
//    })

    const postChatrooms = async(newChatroom) => {
        // console.log(newChatroom);
        const response = await fetch("http://localhost:8080/chatrooms", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newChatroom)
        })
        const savedNewChatroom = await response.json();
        setChatrooms([...chatrooms, savedNewChatroom]);
    }

    const deleteChatroom = async (chatroomId) => {

        await fetch("http://localhost:8080/chatrooms/"+chatroomId, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
        })
        console.log(chatroomId);
        setChatrooms(chatrooms.filter((chatroom) => chatroom.id !== chatroomId))
    }


   return ( 
   <>
   {/* {chatroomTest} */}
        <Login users = {users} />
        <ChatList chatrooms={chatrooms} deleteChatroom={deleteChatroom}/>
        <ChatForm chatrooms={chatrooms} postChatrooms={postChatrooms} />
    </> );
}
 
export default ChatContainer;