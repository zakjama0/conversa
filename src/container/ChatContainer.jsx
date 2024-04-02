import { useEffect, useState } from "react";

const ChatContainer = () => {
   const [users, setUsers] = useState([]);
   const  [chats, setChats] = useState([]);
   const [chatroom, setChatroom] = useState([]);

   const fetchChatroom = async () =>{
    const response = await fetch('http://localhost:8080/chatrooms')
    const data = await response.json()
    setChatroom(data)
   }

   useEffect(() =>{
    fetchChatroom()
    console.log(chatroom)
   }, [])

   const chatroomTest = chatroom.map( chatroom =>{
    return <p>{chatroom.name}</p>
   })

   return ( 
   <>
   {chatroomTest}
    
    </> );
}
 
export default ChatContainer;