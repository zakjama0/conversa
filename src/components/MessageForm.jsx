import { useState, useContext } from "react";
import { userState } from "../container/ChatContainer";

const MessageForm = ({ postMessage, chatroom }) => {
    const context = useContext(userState)
    const { activeUser } = context;

    const [stateMessage, setStateMessage] = useState(
        {
            userId: activeUser.id,
            message: "",
            chatroomId: chatroom.id
        }
    )

    const handleFormSubmit = (event) => {
        event.preventDefault();
        postMessage(stateMessage);
        setStateMessage({
            userId: activeUser.id,
            message: "",
            chatroomId: chatroom.id
        })
    }

    const handleChange = (event) => {
        const propertyName = event.target.name;
        const copiedMessage = { ...stateMessage };
        copiedMessage[propertyName] = event.target.value;
        setStateMessage(copiedMessage);
    }

    return (
        <div className="messageForm">
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="userMessage"></label>
                <input
                    id="userMessage"
                    name="message"
                    type="text"
                    placeholder="Type here"
                    onChange={handleChange}
                    value={stateMessage.message} />
                <input className="send" type="submit" value="Send" />
            </form>
        </div>
    )
}
export default MessageForm;