import { useState } from "react";

const ChatForm = ({ chatrooms, postChatrooms }) => {

    const [stateChatroom, setStateChatroom] = useState(
        {
            name: ''
        }
    )

    const handleFormSubmit = (event) => {
        event.preventDefault();
        postChatrooms(stateChatroom);
        console.log("Saving this");
        setStateChatroom({
            name:""
        })
    }

    const handleChange = (event) => {
        const propertyName = event.target.name;
        const copiedChatroom = { ...stateChatroom };
        copiedChatroom[propertyName] = event.target.value;
        setStateChatroom(copiedChatroom);
    }

 

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="chatName"></label>
                <input
                     id="chatroom-name"
                     name="name"
                     type="text"
                     placeholder="enter chatroom name"
                     onChange={handleChange}
                     value={stateChatroom.name} 
                />
                <input type="submit" value= "Create Chatroom" />
            </form>
        </>
    );
}

export default ChatForm;