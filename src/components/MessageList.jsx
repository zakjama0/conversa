import Message from './Message';
const MessageList = ({ messages }) => {
    const messageComponent = messages.map((messageComponent) => {
        return <Message
            key={messageComponent.id}
            messageComponent={messageComponent}
            />
    })

    return (
        <>
            <h1>Messages</h1>
            {messageComponent}



        </>);
}

export default MessageList;