import styles from './question-relier.module.sass'
import cover from '../../../assets/data/cover.json'
import { useState, useEffect } from 'react';
import Chrono from '../../chrono/chrono';

// eslint-disable-next-line no-empty-pattern
export default function QuestionRelier({setGame, Sources, setSources}) {


//HTML
  return (
    <section className={styles.timeline}>
        <h1>Question Relier</h1>
        
        <div className={styles.texte}>
            <p>Ancien</p>
            <Chrono 
                redirection = {'resultat-relier'}
                setGame={setGame}
                chrono={5}
            />
            <p>Récent</p>
        </div>
    </section>
    )
}

