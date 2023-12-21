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
        deroulement: [],
        points: []
    });
    const [currentGameIndex, setCurrentGameIndex] = useState(0);
    const [currentTourIndex, setCurrentTourIndex] = useState(0);
    const [redirectionGame, setRedirectionGame] = useState(0);
    return (
        <PartyContext.Provider value={{ party, setParty, currentGameIndex, setCurrentGameIndex, currentTourIndex, setCurrentTourIndex, redirectionGame, setRedirectionGame}}>
            {children}
        </PartyContext.Provider>
    )
}