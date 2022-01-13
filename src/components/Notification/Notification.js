import React, {useContext} from 'react'
import NotificationContext from '../../context/NotificationContext'

function Notification(message, severity) {

    const {notification} = useContext(NotificationContext)

    return (
        <div style={{color: notification.severity === 'error' ? 'red' : 'green'}}>
            {notification.message}
        </div>
    )
}
export default Notification
