import Message from './Message';

const MessageList = ({ messages }) => {
    const mappedMessage = messages.map((message) => {
        return <Message
            key={message.id}
            message={message}
        />
    })

    return (
        <>
            <div className="messageList">
                <h3>Messages</h3>
                <div className="mappedMessages">
                    {mappedMessage}
                </div>
            </div>
        </>);
}

export default MessageList;