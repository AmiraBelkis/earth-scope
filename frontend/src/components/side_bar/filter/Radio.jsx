import React, { useContext } from 'react'
import { Col } from 'react-bootstrap'
import { MapContext } from '../../../contexts/context';

export const Radio = ({ name, label, options }) => {
    const [mapFilter, setMapFilter] = useContext(MapContext);
    const onChange = (e) => {
        const filter = {
            ...mapFilter
        }
        filter["status"] = e.target.value;
        setMapFilter(filter);
    }
    return (
        <Col sm="12">
            <label> {label} </label>
            <br />
            <div className="radio-container">
                {options.map((option, index) => {
                    return (
                        <label className="custom-radio" key={`radio-btn-${index}`}>
                            <input
                                type="radio"
                                name={name}
                                value={option.value}
                                className="custom-radio-input"
                                onChange={onChange}
                            />
                            <span className="custom-radio-checkmark"></span>
                            {option.label}
                        </label>
                    )
                })}
            </div>

        </Col>
    )
}
