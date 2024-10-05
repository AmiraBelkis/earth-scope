import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { useContext } from 'react';
import { MapContext } from '../../../../contexts/context';

export const DateRangePickerCalender = ({ ranges, setRanges }) => {
    const [mapFilter, setMapFilter] = useContext(MapContext);
    const onChange = (e) => {
        setRanges(e.selection)
        const filter = {
            ...mapFilter
        }
        filter["startDate"] = e.selection.startDate;
        filter["endDate"] = e.selection.endDate;
        setMapFilter(filter);
    }
    return (
        <DateRangePicker
            ranges={[ranges]}
            onChange={onChange}
        />
    )
}