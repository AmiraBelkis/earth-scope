import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import { retrieveMapGeoData } from '../../hooks/retrieveMapGeoData'
import { EventMarker, EventPolyline } from './EventMarker';
import { useContext, useEffect, useState } from 'react';
import { MapContext } from '../../contexts/context';
import { Loader } from '../../components/Loader';
import { mapCenter } from '../../utils/constants';
import { Toast_ } from '../../components/Toast';

let show = 1;
const Map = () => {
    const [mapFilter, setMapFilter] = useContext(MapContext);
    const [goeData, loading, error] = retrieveMapGeoData(mapFilter);
    const [events, setEvents] = useState([])
    const [zoom, position] = mapCenter[mapFilter.regionId];


    useEffect(() => {
        if (error) {
            setEvents([]); // Clear map when there's an error
        } else if (goeData && goeData.features) {
            setEvents(goeData.features);
        }
    }, [goeData, error]);
    return (<>
        <div className="main-container" >
            <h1 className="mb-3">Map</h1>
            <div id="leaflet-map" className='bg-white'>
                {(loading && <Loader></Loader>) ||
                    <MapContainer center={position} zoom={zoom}>
                        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {events.map((e, index) => {
                            const Component = e.geometry.type === 'Point' ? EventMarker : EventPolyline;
                            return <Component key={index} event={e}></Component>;
                        })}
                        {!loading && error && <></>}
                    </MapContainer>
                }
            </div>
        </div>
        {!loading && !error && !(goeData && goeData.features.length) && (show++) &&
            <Toast_ iconName="jam:info" type="info" show={show}>
                No events found for the selected filter.
            </Toast_>
        }
        {!loading && error && (show++) &&
            <Toast_ iconName="jam:alert" type="danger" show={show}>
                Error: An error occurred while trying to retrieve the events list.
            </Toast_>
        }

    </>
    )
}

export default Map