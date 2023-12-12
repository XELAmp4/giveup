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

    const [boutonActifTours, setboutonActifTours] = useState(2);

    const handleBoutonClickTours = (bouton) => {
        setboutonActifTours(bouton);
        setParty({...party,lap: bouton})
        console.log(party, 'party');
        
    };

    const submit = () => {

        const games = ['timeline','puzzle','relier'];



        let array =[];
            for (let index = 0; index < boutonActifTours; index++) {
                array.push([]);
                for (let index2 = 0; index2 < boutonActifUpers; index2++) {
                    array[index].push(games[Math.floor(Math.random() * games.length)]);
                }
                array[index].push('Question étoile');
            }
            // let array = [['a','b','c'],['a','b','c'],['a','b','c']]
            setParty((prev) => {
                const newDatas = {...prev};
                newDatas.deroulement = array;

                console.log(newDatas.deroulement,'deroulement');
                
                // newDatas.pageActive = array[0][0]; ligne finale qund tous les jeux seront prets :)
                newDatas.pageActive = 'puzzle';                

                return {...newDatas}

            })
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
                            className={boutonActifTours === 2 ? styles.bouton_actif_Tours : ''}
                            onClick={() => handleBoutonClickTours(2)}
                        >2</button>

                        <button
                            className={boutonActifTours === 4 ? styles.bouton_actif_Tours : ''}
                            onClick={() => handleBoutonClickTours(4)}
                        >4</button>
                        <button
                            className={boutonActifTours === 6 ? styles.bouton_actif_Tours : ''}
                            onClick={() => handleBoutonClickTours(6)}
                        >6</button>
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
  