
import { useState} from "react";
import { useNavigate } from "react-router-dom";

const ChatForm = ({postChatrooms }) => {

    const [stateChatroom, setStateChatroom] = useState(
        {
            name: ''
        }
    )
    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        postChatrooms(stateChatroom);
        console.log("Saving this");
        setStateChatroom({
            name: ""
        })
        navigate("/chatrooms");
    }

    const handleChange = (event) => {
        const propertyName = event.target.name;
        const copiedChatroom = { ...stateChatroom };
        copiedChatroom[propertyName] = event.target.value;
        setStateChatroom(copiedChatroom);
    }

    return (
        <>
            <div className="chatForm">
                <form onSubmit={handleFormSubmit}>
                    <div className="input-box">
                    <label htmlFor="chatName"></label>
                    <input
                        id="chatName"
                        name="name"
                        type="text"
                        placeholder="enter chatroom name"
                        onChange={handleChange}
                        value={stateChatroom.name}
                    />
                    <input className="create" type="submit" value="Create" />
                    </div>
                    
                </form>
            </div>
        </>
    );
}

export default ChatForm;