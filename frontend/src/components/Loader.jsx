import Spinner from 'react-bootstrap/Spinner';

export const Loader = () => {
    return (
        <div className="loader-container">
            <Spinner className='loader' animation="border" role="status" size="lg">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}