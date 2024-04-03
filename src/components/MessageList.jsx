
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
            <h3>Messages</h3>
            {mappedMessage}

        </>);
}

export default MessageList;