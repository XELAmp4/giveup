import styles from './resultat-relier.module.sass'
import Chrono from '../../chrono/chrono';
import { useParty } from '../../../providers/party-provider';
import { useEffect, useState } from 'react';


export default function ResultatRelier({Sources, save, artistes, setGame}) {
  const [correct, setCorrect] = useState([false, 'fausse']);
  const { party, setParty } = useParty();
  const { currentGameIndex, setCurrentGameIndex } = useParty();
  const { currentTourIndex, setCurrentTourIndex } = useParty();
  const {redirectionGame, setRedirectionGame} = useParty();

  useEffect(() => {
    const nextIndex = currentGameIndex + 1;
    console.log(currentGameIndex,'currentGameIndex');
    console.log(nextIndex,'nextIndex');
    
    // party.deroulement[0][nextIndex];
    setCurrentGameIndex(nextIndex);
    setRedirectionGame(`${party.deroulement[currentTourIndex][nextIndex]}`);
    console.log(party.deroulement[currentTourIndex][nextIndex],'redirectionGame');

  let nbOk = 0;
  if (save.length === 3) {
    save.forEach(relation => {
      if (relation[0][0] === "G") {
        let artisteName = artistes[relation[0]];
        let artisteCover = Sources[relation[1][1]-1].Artiste;
        if (artisteName === artisteCover) {
          nbOk += 1;
        }
        
      }else{
        let artisteName = artistes[relation[1]];
        let artisteCover = Sources[relation[0][1]-1].Artiste;
        if (artisteName === artisteCover) {
          nbOk += 1;
        }
      }
    });
  }

  if (nbOk === 3) {
    setCorrect([true, 'juste']);
    const updatedPoints = [...party.points];
      updatedPoints[currentGameIndex % party.playerNumber] += 1;
      setParty(prevParty => ({
          ...prevParty,
          points: updatedPoints,
      }));
  }

}, []); 
  return( 
  <section className={styles.resultat}>
    <h1>Votre réponse est {correct[1]}</h1>
    <aside className={styles.correc}>
      <div className={styles.musique}>
        <img className={styles.cover} src={'cover/'+Sources[0].img} alt=''></img>
        <p className={styles.artiste}>{Sources[0].Titre} de {Sources[0].Artiste}</p>
      </div>
      <div className={styles.musique}>
        <img className={styles.cover} src={'cover/'+Sources[1].img} alt=''></img>
        <p className={styles.artiste}>{Sources[1].Titre} de {Sources[1].Artiste}</p>
      </div>
      <div className={styles.musique}>
        <img className={styles.cover} src={'cover/'+Sources[2].img} alt=''></img>
        <p className={styles.artiste}>{Sources[2].Titre} de {Sources[2].Artiste}</p>
      </div>
    </aside>
    <div>
    <svg width="12vw" height="12vw" viewBox="0 0 1843 1843" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles.cross} ${ correct[0] === false ? styles.block : styles.none}`}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1215.1 1140.68C1235.36 1160.89 1235.36 1194.05 1215.1 1214.26C1194.9 1234.47 1162.05 1234.47 1141.79 1214.26L922.31 994.576L701.278 1215.81C680.864 1236.02 647.81 1236.02 627.395 1215.81C607.033 1195.09 607.033 1161.93 627.395 1141.72L848.427 920.481L628.948 701.316C608.69 681.109 608.69 647.946 628.948 627.739C649.103 607.533 681.952 607.533 702.211 627.739L921.69 847.424L1144.38 624.634C1164.79 604.427 1197.8 604.427 1218.21 624.634C1238.57 645.359 1238.57 677.997 1218.21 698.722L995.573 921.519L1215.1 1140.68ZM922 92C464.133 92 93 462.977 93 921C93 1379.02 464.133 1750 922 1750C1379.87 1750 1751 1379.02 1751 921C1751 462.977 1379.87 92 922 92Z" fill="#E12523"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1215.1 1214.26C1235.36 1194.05 1235.36 1160.89 1215.1 1140.68L995.572 921.519L1218.21 698.722C1238.57 677.997 1238.57 645.359 1218.21 624.634C1197.8 604.427 1164.79 604.427 1144.38 624.634L921.689 847.424L702.21 627.74C681.952 607.533 649.103 607.533 628.948 627.74C608.689 647.946 608.689 681.109 628.948 701.316L848.426 920.481L627.395 1141.72C607.032 1161.93 607.032 1195.09 627.395 1215.81C647.809 1236.02 680.863 1236.02 701.278 1215.81L922.309 994.576L1141.79 1214.26C1162.05 1234.47 1194.89 1234.47 1215.1 1214.26Z" fill="white"/>
    </svg>
    <svg width="10vw" height="10vw" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles.check} ${ correct[0] === false ? styles.none : styles.block}`}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M534.344 334.343C544.107 324.581 544.107 308.752 534.344 298.989C524.581 289.226 508.754 289.226 498.991 298.989L424.494 373.483L350.001 447.977L301.012 398.99C291.249 389.227 275.419 389.227 265.656 398.99C255.893 408.753 255.893 424.58 265.656 434.343L332.323 501.01C342.087 510.773 357.914 510.773 367.677 501.01L534.344 334.343Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M733.334 400C733.334 584.093 584.094 733.333 400 733.333C215.905 733.333 66.667 584.093 66.667 400C66.667 215.905 215.905 66.6666 400 66.6666C584.094 66.6666 733.334 215.905 733.334 400ZM534.344 298.989C544.107 308.752 544.107 324.581 534.344 334.343L367.677 501.01C357.914 510.773 342.087 510.773 332.323 501.01L265.656 434.343C255.893 424.58 255.893 408.753 265.656 398.99C275.419 389.227 291.248 389.227 301.011 398.99L350 447.977L424.494 373.483L498.99 298.989C508.754 289.226 524.58 289.226 534.344 298.989Z" fill="#2CC259"/>
    </svg>
    </div>
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