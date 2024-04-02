import React, { useState } from "react";

const MessageForm = ({ sendMessage }) => {
    const [content, setContent] = useState("");

    const handleSendMessage = (event) => {
        event.preventDefault();
        const newMessage = {
            content
        }

        sendMessage(newMessage);
        setContent("");
    }

    return (
        <form onSubmit={handleSendMessage}>
            <input
                type="text"
                placeholder="Type here"
                value={content}
                onChange={(event) => setContent(event.target.value)} />
            <input type="submit" value="Send"/>
        </form>
    )
}

export default MessageForm;