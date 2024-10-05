import { Icon } from '@iconify/react';
import { format } from 'date-fns';


export const DateRangeInput = ({ name, ranges, setShowPicker }) => {
    return (
        <div className='input-container' onClick={() => setShowPicker(true)}>
            <input className="filter-input"
                type="text"
                name={name}
                readOnly
                value={`${format(ranges.startDate, 'MM/dd/yyyy')} - ${format(ranges.endDate, 'MM/dd/yyyy')}`}
            />
            <span className='input-icon'>
                <Icon icon='uil:calender' width="24px" height="24px" color='#0B3D91' />
            </span>
        </div>
    )
}