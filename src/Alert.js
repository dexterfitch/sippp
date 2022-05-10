function Alert({ messages, setShowMessages }) {

    function parseMessages() {
        return messages.map((message, index) => <li key={index}>{message}</li>);
    }

    return (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <ul>
                {parseMessages()}
            </ul>
            <button onClick={() => setShowMessages(false)} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert;