function Alert({ error, setError }) {

    return (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <ul>
            <li>{error}</li>
            </ul>
            <button onClick={() => setError("")} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert;