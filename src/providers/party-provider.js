import { createContext, useContext, useState } from "react";


const PartyContext = createContext()


export const useParty = () => {
    return useContext(PartyContext);
}


export const PartyProvider = ({
    children
}) => {
    
    const [party, setParty] = useState({
        playerNumber: 2,
        lap: 2,
        pageActive: 'home',
        deroulement: []
    });

    return (
        <PartyContext.Provider value={{ party, setParty }}>
            {children}
        </PartyContext.Provider>
    )
}