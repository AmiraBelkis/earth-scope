import Select from 'react-select';
import { Col } from 'react-bootstrap';
import { useContext } from 'react';
import { MapContext } from '../../../contexts/context';

export const Selector = ({ name, label, options, loading = false }) => {
    const [mapFilter, setMapFilter] = useContext(MapContext);
    const onChange = (e) => {
        const filter = {
            ...mapFilter
        }
        filter["regionId"] = (e && e.value) ? e.value : "all";
        setMapFilter(filter);
    }
    return (
        <Col sm="12">
            <label> {label} </label>
            <Select
                className="basic-single filter-selector"
                name={name}
                classNamePrefix="select"
                isLoading={loading}
                isClearable={true}
                isSearchable={true}
                options={options}
                onChange={onChange}
            />
        </Col>
    )
}
