import { useState, useContext } from "react";
import { userState } from "../container/ChatContainer";
const Message = ({ message }) => {
    const context = useContext(userState)
    const { activeUser } = context;

    // const isSender = () =>{
    //     return message.user.username === activeUser.username;
    // }

    return (
        <article className={message.user.id === activeUser.id ? "message2" : "message" } >
            <p className="message-content">{message.message}</p>
            <div className="sender">
                <p className="sentName">Sent By: {message.user.username}</p>
            </div>
        </article>
    );
}

export default Message;