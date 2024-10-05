import { useEffect, useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import { Icon } from '@iconify/react';


export const Toast_ = ({ show, iconName, type, children }) => {
    const [showAlert, setShowAlert] = useState(show);
    useEffect(() => {
        setShowAlert(true);
    }, [show]);
    return (
        <Toast show={showAlert} onClose={() => { setShowAlert(false) }} className={`alert bg-white ${type}`} delay={5000} autohide >
            <Toast.Header className='gap-3 border-0'>
                <Icon icon={iconName} className={`icon ${type}`} />
                {children}
            </Toast.Header>
        </Toast>
    )
}
