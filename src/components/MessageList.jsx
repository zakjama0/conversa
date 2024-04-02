const MessageList = ({messages}) => {
    const mappingMessageList = messages.map((messages, index)=>{
        return <Message message={message} key={index} />
    })
    return ( 
        <h1>Hi</h1>
    );
}
 
export default MessageList;