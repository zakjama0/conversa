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
            <h1>Messages</h1>
            {mappedMessage}

        </>);
}

export default MessageList;