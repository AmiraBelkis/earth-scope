
import { Col } from "react-bootstrap";
import { DateRangePickerCalender } from "./DateRangePickerCalender";
import { DateRangeInput } from "./DateRangeInput";
import { useDateRange } from "../../../../hooks/useDateRange"

export const DateRangePicker_ = ({ name, label }) => {
    const { ranges, showPicker, setShowPicker, setRanges, pickerRef } = useDateRange();
    return (
        <Col sm="12">
            <label> {label} </label><br />
            <div ref={pickerRef}>
                <DateRangeInput
                    name={name}
                    ranges={ranges}
                    setShowPicker={setShowPicker}
                />
                {showPicker && (
                    <DateRangePickerCalender ranges={ranges} setRanges={setRanges} />
                )}
            </div>
        </Col>
    );
}