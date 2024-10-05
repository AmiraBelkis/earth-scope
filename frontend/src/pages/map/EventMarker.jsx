import { Marker, Polyline, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Table } from 'react-bootstrap'
import { getIconName, retrieveEventIcon } from "../../hooks/retrieveEventIcon";


export const EventMarker = ({ event }) => {
    const icon = retrieveEventIcon(event.properties.categories[0].id)
    const [lng, lat] = event.geometry.coordinates;
    return (
        <Marker
            position={[lat, lng]}
            icon={icon}
        >
            <CustomPopup properties={event.properties}></CustomPopup>
        </Marker>
    );
};

export const EventPolyline = ({ event }) => {
    const [iconName, color] = getIconName(event.properties.categories[0].id);
    const polyline = event.geometry.coordinates.map(([lng, lat]) => [lat, lng]);
    return <Polyline pathOptions={{ color: color, opacity: "50%" }} positions={polyline} />
}

const CustomPopup = ({ properties }) => {
    return <>
        <Popup>
            <Table>
                <tbody>
                    {
                        properties.title && <tr>
                            <td>Title</td>
                            <td>{properties.title}</td>
                        </tr>
                    }
                    {
                        properties.date && <tr>
                            <td>Date</td>
                            <td>{properties.date.toString().replace('T', ' ').replace('Z', '')}</td>
                        </tr>
                    }
                    {
                        properties.categories && properties.categories[0] && properties.categories[0].title && <tr>
                            <td>Category</td>
                            <td>{properties.categories[0].title}</td>
                        </tr>
                    }
                    <tr>
                        <td>Sources</td>
                        <td>
                            {
                                properties.sources.map((source, index) => {
                                    return <a key={index} className="ms-1" href={source.url} target="blank">{source.id}</a>
                                })
                            }
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Popup>
    </>
}