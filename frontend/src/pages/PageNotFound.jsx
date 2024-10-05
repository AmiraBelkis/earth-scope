import { Container } from "react-bootstrap";

export const PageNotFound = () => {
    return (
        <Container className="not-found">
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
        </Container>
    );
};