import { Col, Container } from "react-bootstrap"
import { Section } from "./Section"
import { renderContent, retrieveAboutContent } from "../../hooks/retrieveAboutContent";

export const About = () => {
    const sections = retrieveAboutContent();

    return (
        <div className="main-container" >
            <h1 className="mb-3">About</h1>
            <Container className="bg-white p-5">
                {sections && sections.map(section => (
                    <Section key={section.id} id={section.id} title={section.title}>
                        <Col sm="12">
                            {renderContent(section.content)}
                        </Col>
                    </Section>
                ))}
            </Container>
        </div>
    )
}