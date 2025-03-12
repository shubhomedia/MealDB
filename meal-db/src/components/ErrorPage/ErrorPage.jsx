
const ErrorPage = () => {
    const handleClick = () => {
        window.location.href = '/';
    }
    return (
        <div>
            <h2 className="text-3xl font-bold underline">Not Found 404!</h2>
            <button onClick={handleClick} className="btn btn-primary mt-4">Back to Home</button>
        </div>
    );
};

export default ErrorPage;