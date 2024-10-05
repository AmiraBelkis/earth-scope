import { Col, Row } from "react-bootstrap"

export const Section = ({ id, title, children }) => {
    return (
        <Row className="gap-3  mb-5" id={id}>
            <Col sm="12">
                <h5>
                    {title}
                </h5>
            </Col>
            {children}
            <hr className="separator"></hr>
        </Row>
    )
}