import { useEffect, useState } from "react";
import yaml from 'js-yaml';

export const retrieveAboutContent = () => {
    const [sections, setSections] = useState([]);

    useEffect(() => {
        fetch('/about.yml')
            .then(response => response.text())
            .then(text => {
                const data = yaml.load(text);
                setSections(data.sections);
            })
            .catch(console.error);
    }, []);
    return sections
}

export const renderContent = (content) => {
    return content.map((item, index) => {
        switch (item.type) {
            case 'p':
                return <p key={index}>{item.value}</p>;
            case 'span':
                return <span className="ms-1" key={index}>{item.value}</span>;
            case 'ul':
                return (
                    <ul key={index}>
                        {item.children.map((child, childIndex) => (
                            <li key={childIndex}>
                                {child.children ? renderContent(child.children) : child.value}
                            </li>
                        ))}
                    </ul>
                );
            case 'li':
                return (
                    <li key={index}>
                        {item.children ? renderContent(item.children) : item.value}
                    </li>
                );
            case 'strong':
                return <strong key={index}>{item.value}</strong>;
            default:
                return null;
        }
    });
};