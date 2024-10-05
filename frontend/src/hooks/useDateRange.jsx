import { useState, useEffect } from 'react';
import { useRef } from "react";
import { addDays } from 'date-fns';

export const useDateRange = () => {
    const [ranges, setRanges] = useState(
        {
            startDate: addDays(new Date(), -7),
            endDate: new Date(),
            key: 'selection'
        }
    );
    const [showPicker, setShowPicker] = useState(false);
    const pickerRef = useRef(null);


    const handleClickOutside = (event) => {
        if (pickerRef.current && !pickerRef.current.contains(event.target)) {
            setShowPicker(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return { ranges, showPicker, setShowPicker, setRanges, pickerRef };
};