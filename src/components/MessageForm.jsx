
import React, { useState } from "react";

const MessageForm = ({ activeUser, chatroom, sendMessage, postMessage}) => {
    const [content, setContent] = useState("");
    const [stateMessage, setStateMessage] = useState(
        {
            userId: null,
            content: "",
            chatroomId: null
        }
    )

    const handleFormSubmit = (event) => {
        event.preventDefault();
        postMessage(stateMessage);
        setStateMessage({
            userId: null,
            content: "",
            chatroomid: null
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
            <input
                type="text"
                placeholder="Type here"
                onChange={handleChange} 
                value = {stateMessage.content} />
            <input type="submit" value="Send"/>
        </form>
    )
}
export default MessageForm;