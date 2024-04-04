import {  useNavigate, Outlet } from "react-router-dom";

const ChatList = ({ chatrooms }) => {
    const navigate = useNavigate();
    const mapChatList = chatrooms.map((chatroom) => {
        return <button onClick={ () => navigate(`${chatroom.id}`)} >{chatroom.name}</button>        
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