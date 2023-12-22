import styles from './resultat-trad.module.sass'
import { useParty } from '../../../providers/party-provider';
import Chrono from '../../chrono/chrono';
import { useState, useEffect } from 'react';

export default function TraductionResult({index, gagnant, setGame}) {


  const { party, setParty } = useParty();
  const { currentGameIndex, setCurrentGameIndex } = useParty();
  const { currentTourIndex, setCurrentTourIndex } = useParty();
  const {redirectionGame, setRedirectionGame} = useParty(); 

  useEffect(() => {
    var nextTourIndex = currentTourIndex +1;
    const updatedPoints = [...party.points];
    updatedPoints[gagnant - 1] += 1; // Soustrayez 1 car les indices du tableau commencent à 0
    setParty((prevParty) => ({
      ...prevParty,
      points: updatedPoints,
    }));
    if (nextTourIndex < party.lap) {
      setCurrentTourIndex(nextTourIndex)
      var nextIndex = 0;
      setCurrentGameIndex(nextIndex);
      setRedirectionGame(`${party.deroulement[nextTourIndex][nextIndex]}`);
    }else{
      setRedirectionGame(`scoreboard`)
    }    
  }, [])

  return( 
  <section className={styles.resultat}>
    <h1>La réponse est ...</h1>
    <p className={styles.gagnant}>Bravo Joueur {gagnant} tu as trouvé la bonne réponse !</p>
    <div>
      <p className={styles.musique}>{index.musique} de {index.Artiste}</p>
      <img className={styles.cover} src={'cover/'+index.img} alt=''></img>
    </div>
    <h2>Les vrais paroles :</h2>
    <p className={styles.parole}>{index.parole}</p>
    <svg width="10vw" height="10vw" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.check}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M534.344 334.343C544.107 324.581 544.107 308.752 534.344 298.989C524.581 289.226 508.754 289.226 498.991 298.989L424.494 373.483L350.001 447.977L301.012 398.99C291.249 389.227 275.419 389.227 265.656 398.99C255.893 408.753 255.893 424.58 265.656 434.343L332.323 501.01C342.087 510.773 357.914 510.773 367.677 501.01L534.344 334.343Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M733.334 400C733.334 584.093 584.094 733.333 400 733.333C215.905 733.333 66.667 584.093 66.667 400C66.667 215.905 215.905 66.6666 400 66.6666C584.094 66.6666 733.334 215.905 733.334 400ZM534.344 298.989C544.107 308.752 544.107 324.581 534.344 334.343L367.677 501.01C357.914 510.773 342.087 510.773 332.323 501.01L265.656 434.343C255.893 424.58 255.893 408.753 265.656 398.99C275.419 389.227 291.248 389.227 301.011 398.99L350 447.977L424.494 373.483L498.99 298.989C508.754 289.226 524.58 289.226 534.344 298.989Z" fill="#2CC259"/>
    </svg>
    <Chrono 
      redirection = {party.pageActive}
      setGame={setGame}
      chrono={200}
      button={'Jeu suivant'}
      redirectionGameBoolean={true}
      redirectionGame={redirectionGame}
    />
  </section>
  )
}