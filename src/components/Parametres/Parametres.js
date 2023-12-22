import { useParty } from '../../providers/party-provider';
import styles from './Parametres.module.sass';
import React, { useState } from 'react';

export default function Parametres() {
    const { party, setParty } = useParty();
    const { setCurrentGameIndex } = useParty();

    const [boutonActifUpers, setboutonActifUpers] = useState(2);
    const [boutonActifTours, setboutonActifTours] = useState(2);

    const handleBoutonClickUpers = (bouton) => {
        setboutonActifUpers(bouton);
    };

    const handleBoutonClickTours = (bouton) => {
        setboutonActifTours(bouton);
    };

    const submit = () => {

        const games = ['timeline', 'puzzle', 'relier'];

        let array = [];
        for (let index = 0; index < boutonActifTours; index++) {
            array.push([]);
            for (let index2 = 0; index2 < boutonActifUpers; index2++) {
                let randomGame;
                do {
                    randomGame = games[Math.floor(Math.random() * games.length)];
                } while (index2 > 0 && randomGame === array[index][index2 - 1]); // Vérifie si le jeu précédent est le même
        
                array[index].push(randomGame);
            }
            array[index].push('traduction');
        }

        const initialPoints = Array(boutonActifUpers).fill(0); // Crée un tableau de zéros avec la taille boutonActifUpers

        setParty((prev) => {
            const newDatas = { ...prev };
            newDatas.playerNumber = boutonActifUpers;
            newDatas.deroulement = array;
            newDatas.lap = boutonActifTours;
            newDatas.pageActive = array[0][0];
            newDatas.points = initialPoints; // Initialise le tableau des points avec des zéros
            setCurrentGameIndex(0);
            return { ...newDatas };

        });
    };

    return (
        <div className={`${styles.parametres}`}>
            <h2>Paramètres de la partie</h2>
            <div className={`${styles.container}`}>
                <div className={`${styles.upers}`}>
                    <p>Nombres de Upers:</p>
                    <div>
                        <button
                            className={boutonActifUpers === 2 ? styles.bouton_actif_Upers : ''}
                            onClick={() => handleBoutonClickUpers(2)}
                        >
                            2
                        </button>
                        <button
                            className={boutonActifUpers === 3 ? styles.bouton_actif_Upers : ''}
                            onClick={() => handleBoutonClickUpers(3)}
                        >
                            3
                        </button>
                        <button
                            className={boutonActifUpers === 4 ? styles.bouton_actif_Upers : ''}
                            onClick={() => handleBoutonClickUpers(4)}
                        >
                            4
                        </button>
                    </div>
                </div>
                <div className={`${styles.tours}`}>
                    <p>Nombres de tours:</p>
                    <div>
                        <button
                            className={boutonActifTours === 2 ? styles.bouton_actif_Tours : ''}
                            onClick={() => handleBoutonClickTours(2)}
                        >
                            2
                        </button>
                        <button
                            className={boutonActifTours === 4 ? styles.bouton_actif_Tours : ''}
                            onClick={() => handleBoutonClickTours(4)}
                        >
                            4
                        </button>
                        <button
                            className={boutonActifTours === 6 ? styles.bouton_actif_Tours : ''}
                            onClick={() => handleBoutonClickTours(6)}
                        >
                            6
                        </button>
                    </div>
                </div>
            </div>
            <button className={`${styles.jouer}`} onClick={() => submit()}>
                JOUER !
            </button>
        </div>
    );
}
