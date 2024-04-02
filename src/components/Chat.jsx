import { useState, useEffect } from "react"

const Chat = ({chatroom, deleteChatroom}) => {

    const [messages, setMessages] = useState ([])

    const handleDeleteButton = () => {
        deleteChatroom(chatroom.id)
    }

    const fetchMessages = async() => {
        const response = await fetch ('http://localhost:8080/messages')
        const data = await response.json()
        setMessages(data)
    }

    useEffect(() => {
        fetchMessages();
    }, [])
    
    return ( 
        <>
            <h2>{chatroom.name}</h2>
            <button onClick={handleDeleteButton}>Delete</button>
        </>
    );
}
 
export default Chat;