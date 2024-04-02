const Message = ({messageComponent}) => {
   
   
    return ( 
        <article>
            <p>{messageComponent.message}</p>
            <p>Sent By: {messageComponent.user.username}</p>
        </article>

      );
}
 
export default Message;