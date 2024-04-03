import React, { useState } from "react";

const MessageForm = ({ postMessage,  chatroom, activeUser}) => {
    const [stateMessage, setStateMessage] = useState(
        {
            userId: activeUser.id,
            message: "",
            chatroomId: chatroom.id
        }
    )

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // console.log(stateMessage);
        postMessage(stateMessage);
        setStateMessage({
            userId: activeUser.id,
            message: "",
            chatroomId: chatroom.id
        })
    }
    
    const handleChange = (event) => {
        const propertyName = event.target.name;
        const copiedMessage = {...stateMessage};
        copiedMessage[propertyName] = event.target.value;
        setStateMessage(copiedMessage);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="userMessage"></label>
            <input
                id="userMessage"
                name="message"
                type="text"
                placeholder="Type here"
                onChange={handleChange} 
                value = {stateMessage.message} />
            <input type="submit" value="Send"/>
        </form>
    )
}
export default MessageForm;