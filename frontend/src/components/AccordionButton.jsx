import { useState } from "react";
import { useAccordionButton } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify.js";

export const AccordionButton = ({ eventKey }) => {
    const [iconName, setIconName] = useState("mingcute:down-line");

    const onClick = useAccordionButton(eventKey, () => {
        setIconName((iconName === "mingcute:down-line") ? "mingcute:up-line" : "mingcute:down-line")
    });

    return (
        <button className="icon-btn" type="button" onClick={onClick} >
            <Icon icon={iconName} ></Icon>
        </button >
    );
}