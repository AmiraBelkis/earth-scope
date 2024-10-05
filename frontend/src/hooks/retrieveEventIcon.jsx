import { useEffect, useState } from "react";
import { divIcon } from "leaflet";
import eventCategories from "../assets/data/Icons.json"
import { getIcon, loadIcon } from '@iconify/react';

const getIconByName = async (iconName) => {
    await loadIcon(iconName)
        .then()
        .catch(() => {
            console.log(`Icon ${iconName} does not exist.`);
        });
    let icon = getIcon(iconName);
    return icon
};

export const getIconName = (eventCategory) => {
    const eventCategoryData = eventCategories.Icons.find((event) => event.category === eventCategory);
    return eventCategoryData ? [eventCategoryData.icon, eventCategoryData.color] : ["mdi:alert", "red"];
};


export const retrieveEventIcon = (eventCategory) => {
    const [eventIcon, setEventIcon] = useState(divIcon({}));
    useEffect(() => {
        const createCustomIcon = async (eventCategory) => {
            const [iconName, color] = getIconName(eventCategory)
            const iconifyIcon = await getIconByName(iconName);
            let icon;
            if (!iconifyIcon || !iconifyIcon.width || !iconifyIcon.height || !iconifyIcon.body) {
                icon = divIcon({ className: "event-icon" })
            }
            icon = divIcon({
                html: `<svg width="${iconifyIcon.width}" height="${iconifyIcon.height}" style="color: ${color}" viewBox="0 0 ${iconifyIcon.width} ${iconifyIcon.height}" fill="none" xmlns="http://www.w3.org/2000/svg">${iconifyIcon.body}</svg>`,
                className: "event-icon",
                iconSize: [iconifyIcon.width, iconifyIcon.height],
                iconAnchor: [iconifyIcon.width / 2, iconifyIcon.height],
                popupAnchor: [0, - iconifyIcon.height],
            });
            setEventIcon(icon)
        };
        createCustomIcon(eventCategory)
    }, [eventCategory]);
    return eventIcon;
}
