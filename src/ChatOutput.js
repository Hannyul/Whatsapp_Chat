function ChatOutput(props){
    return (
        <a href={'http://wa.me/' + props.formattedPhone} className="btn">Start Chat!</a>
    );
}
export default ChatOutput;