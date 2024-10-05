import { Accordion, Col, Container, ListGroup, Row } from "react-bootstrap"
import { retrieveAboutContent } from "../../../hooks/retrieveAboutContent";
import { AccordionButton } from "../../AccordionButton";
import { SideBarHeader } from "../SideBarHeader";

export const SideMenu = () => {
    const sections = retrieveAboutContent();
    return (
        <>
            <Container className="mt-3 section-container">
                <Row>
                    <Col sm="12" className="mb-3">
                        <Accordion defaultActiveKey="0">
                            <SideBarHeader title="Sections"></SideBarHeader>
                            <Accordion.Collapse eventKey="0">
                                <ListGroup>
                                    {sections && sections.map(
                                        (section) =>
                                            <ListGroup.Item key={section.id} action href={`#${section.id}`} >
                                                {section.title}
                                            </ListGroup.Item>
                                    )}
                                </ListGroup>
                            </Accordion.Collapse>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
