import React, {useState} from "react";

const Context = React.createContext()

export const NotificationContextProvider =({children})=>{
    
    const [message, setMessage]     = useState('')
    const [severity, setSeverity]   = useState('')

    function setNotification(message, severity){
        setMessage(message)
        setSeverity(severity)
        setTimeout(()=>{
            setMessage('')
        }, 3000)
    }

    return(
        <Context.Provider value={{
            notification:{
                message,
                severity
            },
            setNotification
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context