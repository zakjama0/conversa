const Message = ({message}) => {
   
   
    return ( 
        <article>
            <p>{message.message}</p>
            <p>Sent By: {message.user.username}</p>
        </article>

      );
}
 
export default Message;