import { AccordionButton } from "../AccordionButton"

export const SideBarHeader = ({ title }) => {
    return (
        <h2 className="mb-3 d-flex align-items-center justify-content-between">
            {title}
            <AccordionButton eventKey="0"></AccordionButton>
        </h2>
    )
}
