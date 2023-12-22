import styles from './scoreboard.module.sass'
import { useParty } from '../../providers/party-provider';
import Chrono from '../chrono/chrono';
import { useState, useEffect } from 'react';    

export default function Scoreboard() {
    const { party, setParty } = useParty();
    const {redirectionGame, setRedirectionGame} = useParty(); 
    setRedirectionGame(`home`)
    const Points = [...party.points];
    const [game, setGame] = useState('home');
    // Trouver l'index du joueur avec le plus de points
    const gagnantIndex = Points.indexOf(Math.max(...Points));

    // Vérifier s'il y a égalité
  const egalite = Points.filter((point) => point === Points[gagnantIndex]).length > 1;
 
    return (
      <section className={styles.resultat}>
        <Chrono 
          redirection = {party.pageActive}
          setGame={setGame}
          chrono={30}
          button={'Valider'}
          redirectionGameBoolean={true}
          redirectionGame={redirectionGame}
        />
        <h1>La victoire revient à ...</h1>
        <div className={styles.Scoreboard}>
          {Points.map((joueur, index) => (
            <p key={index} className={styles.joueurs}>
              Joueur {index + 1} : {joueur} points </p>
          ))}
          {egalite === true ? <p className={styles.joueurs}>Égalité!</p> : <p className={styles.joueurs}>Bravo Joueur {gagnantIndex + 1} tu as gagné !!</p>}
        </div>
        
      </section>
    );
  }