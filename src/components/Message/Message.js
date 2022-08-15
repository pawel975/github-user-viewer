import "./Message.scss";

const Message = ({message, type}) => {

    return (
        <section
            className={
                `${type === "error" ? "error-theme" : "info-theme"} 
                message-wrapper`
            }
        >
            <span>{message}</span>
        </section>
    )
}

export default Message;