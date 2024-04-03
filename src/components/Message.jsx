const Message = ({ message }) => {

    return (
        <article className="message">
            <p>{message.message}</p>
            <div className="sender">
                <p>Sent By: {message.user.username}</p>
            </div>
        </article>
    );
}

export default Message;