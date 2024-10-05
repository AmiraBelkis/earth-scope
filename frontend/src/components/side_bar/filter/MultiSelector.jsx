import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Col } from 'react-bootstrap';
import { useContext } from 'react';
import { MapContext } from '../../../contexts/context';


export const MultiSelector = ({ name, label, options, loading = false }) => {
    const [mapFilter, setMapFilter] = useContext(MapContext);
    const onChange = (e) => {
        const filter = {
            ...mapFilter
        }
        filter[name] = e.map(item => item.value);
        setMapFilter(filter);
    }
    return (
        <Col sm="12">
            <label> {label} </label>
            <Select
                className='filter-selector'
                name={name}
                closeMenuOnSelect={false}
                components={makeAnimated()}
                isMulti
                isLoading={loading}
                options={options}
                onChange={onChange}
            />
        </Col>
    )
}
