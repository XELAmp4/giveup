import { useParty } from '../../providers/party-provider';
import styles from './Parametres.module.sass'
import React, { useEffect, useState } from 'react';


export default function Parametres({}) {

    const { party, setParty } = useParty()

    // useEffect(() => {
    //     setParty({...party,playerNumber: 1})
        
    // }, [])

    const [boutonActifUpers, setboutonActifUpers] = useState(2);

    const handleBoutonClickUpers = (bouton) => {
        setboutonActifUpers(bouton);
        setParty({...party,playerNumber: bouton})
    };

    const [boutonActifTours, setboutonActifTours] = useState(8);

    const handleBoutonClickTours = (bouton) => {
        setboutonActifTours(bouton);
        setParty({...party,lap: bouton})
    };

    const submit = () => {
        setParty({...party,pageActive: 'timeline'})
    };


    return (
        <div className={ `${styles.parametres}`}>
            <h2>Paramètres de la partie</h2>
            <div className={ `${styles.container}`}>
                <div className={ `${styles.upers}`}>
                    <p>Nombres de Upers:</p>
                    <div>
                        <button
                            className={boutonActifUpers === 2 ? styles.bouton_actif_Upers : ''}
                            onClick={() => handleBoutonClickUpers(2)}
                        >2</button>

                        <button
                            className={boutonActifUpers === 3 ? styles.bouton_actif_Upers : ''}
                            onClick={() => handleBoutonClickUpers(3)}
                        >3</button>
                        <button
                            className={boutonActifUpers === 4 ? styles.bouton_actif_Upers : ''}
                            onClick={() => handleBoutonClickUpers(4)}
                        >4</button>
                    </div>
                </div>
                <div className={ `${styles.tours}`}>
                    <p>Nombres de tours:</p>
                    <div>
                    <button
                            className={boutonActifTours === 8 ? styles.bouton_actif_Tours : ''}
                            onClick={() => handleBoutonClickTours(8)}
                        >8</button>

                        <button
                            className={boutonActifTours === 16 ? styles.bouton_actif_Tours : ''}
                            onClick={() => handleBoutonClickTours(16)}
                        >16</button>
                        <button
                            className={boutonActifTours === 24 ? styles.bouton_actif_Tours : ''}
                            onClick={() => handleBoutonClickTours(24)}
                        >24</button>
                    </div>
                </div>
            </div>
            <button 
                className={ `${styles.jouer}`}
                onClick={() => submit()}
            >JOUER !</button>
        </div>
    )
}
  