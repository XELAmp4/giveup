import { createContext, useContext, useState } from "react";


const PartyContext = createContext()


export const useParty = () => {
    return useContext(PartyContext);
}


export const PartyProvider = ({
    children
}) => {
    const [party, setParty] = useState({
        playerNumber: 0,
        lap: 0,
        pageActive: 'home'
    });

    return (
        <PartyContext.Provider value={{ party, setParty }}>
            {children}
        </PartyContext.Provider>
    )
}