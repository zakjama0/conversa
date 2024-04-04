import {  useNavigate, Outlet } from "react-router-dom";

const ChatList = ({ chatrooms }) => {
    const navigate = useNavigate();
    const mapChatList = chatrooms.map((chatroom) => {
        return (
        <div className="image">
            <img src="https://media.gq.com/photos/5ba143d4fc6c6260e811638b/master/pass/Toad-Alternatives-GQ-2018-091818.jpg" alt="chatroom image" /> 
            <button onClick={ () => navigate(`${chatroom.id}`)} >{chatroom.name}</button>
        </div> ) 
    })
     
    return (
        <>
            <div className="chatList">
                <h1>Chatroom List</h1>
                <button onClick={() => navigate("/chatrooms/new")}>+</button>
                <div className="mappedChats">
                    {mapChatList}
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default ChatList;