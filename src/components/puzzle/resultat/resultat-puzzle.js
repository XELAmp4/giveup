import { useState, useEffect } from 'react';
import cover from '../../../assets/data/cover.json';        
import styles from './resultat-puzzle.module.sass';
import { useParty } from '../../../providers/party-provider'; 
import Chrono from '../../chrono/chrono';



export default function ResultatPuzzle({ orderCase, setOrderCase, elements, setElements, sourceCover, pochette, setGame }) {
  const [bravo, setBravo] = useState(false);
  const { currentGameIndex, setCurrentGameIndex } = useParty();
  const { currentTourIndex, setCurrentTourIndex } = useParty();
  const { party, setParty } = useParty();
  const {redirectionGame, setRedirectionGame} = useParty();

  const tableauWin = [
    { id: 0, class: 'emp_0', order: 0, style: {} },
    { id: 1, class: 'emp_1', order: 1, style: {} },
    { id: 2, class: 'emp_2', order: 2, style: {} },
    { id: 3, class: 'emp_3', order: 3, style: {} },
    { id: 4, class: 'emp_4', order: 4, style: {} },
    { id: 5, class: 'emp_5', order: 5, style: {} },
    { id: 6, class: 'emp_6', order: 6, style: {} },
    { id: 7, class: 'emp_7', order: 7, style: {} },
    { id: 8, class: 'emp_8', order: 8, style: {} }
  ];
  const coverImage = cover[pochette].img;
  const coverTitle = cover[pochette].Titre;
  const coverArtist = cover[pochette].Artiste;
  const coverDate = cover[pochette].Sortie
  
  useEffect(() => {
    const elementsWithoutStyle = elements.map(({ style, ...rest }) => rest);
    const tableauWithoutStyle = tableauWin.map(({ style, ...rest }) => rest);

    const sontEgaux = elementsWithoutStyle.every((element, index) =>
      JSON.stringify(element) === JSON.stringify(tableauWithoutStyle[index])
    );
    const nextIndex = currentGameIndex + 1;
    setCurrentGameIndex(nextIndex);
    setRedirectionGame(party.deroulement[currentTourIndex][nextIndex]);
    if(sontEgaux){
      const updatedPoints = [...party.points];
      updatedPoints[currentGameIndex % party.playerNumber] += 1;
      setParty(prevParty => ({
          ...prevParty,
          points: updatedPoints,
      }));
    }    
    setBravo(sontEgaux);
  }, []);

  return (
    <div>
      {bravo ? (
        <div className={styles.resultatPuzzle}>
            <h1 className={styles.titreResultat}>Bravo !!! C'est une bonne réponse !</h1>
            <img className={styles.imageResultat} src={'./cover/' + coverImage} alt="" />
          <div className={styles.infoResultat}>
            <p>{coverTitle} </p>
            <p>{coverArtist} </p>
            <p>{coverDate} </p>
          </div>  
          <svg width="10vw" height="10vw" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles.check}`}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M534.344 334.343C544.107 324.581 544.107 308.752 534.344 298.989C524.581 289.226 508.754 289.226 498.991 298.989L424.494 373.483L350.001 447.977L301.012 398.99C291.249 389.227 275.419 389.227 265.656 398.99C255.893 408.753 255.893 424.58 265.656 434.343L332.323 501.01C342.087 510.773 357.914 510.773 367.677 501.01L534.344 334.343Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M733.334 400C733.334 584.093 584.094 733.333 400 733.333C215.905 733.333 66.667 584.093 66.667 400C66.667 215.905 215.905 66.6666 400 66.6666C584.094 66.6666 733.334 215.905 733.334 400ZM534.344 298.989C544.107 308.752 544.107 324.581 534.344 334.343L367.677 501.01C357.914 510.773 342.087 510.773 332.323 501.01L265.656 434.343C255.893 424.58 255.893 408.753 265.656 398.99C275.419 389.227 291.248 389.227 301.011 398.99L350 447.977L424.494 373.483L498.99 298.989C508.754 289.226 524.58 289.226 534.344 298.989Z" fill="#2CC259"/>
          </svg>
          <Chrono 
            redirection = {party.pageActive}
            setGame={setGame}
            chrono={1}
            button={'Valider'}
            redirectionGameBoolean={true}
            redirectionGame={redirectionGame}
          />
        </div>
      ) : (
        <div className={styles.resultatPuzzle}>
            <h1 className={styles.titreResultat}>Vraiment mauvais... C'est une mauvaise réponse...</h1>
            <img className={styles.imageResultat} src={'./cover/' + coverImage} alt="" />+
            <div className={styles.infoResultat}>
                <p>{coverTitle} </p>
                <p>{coverArtist} </p>
                <p>{coverDate} </p>
            </div>
            <svg width="12vw" height="12vw" viewBox="0 0 1843 1843" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles.cross}`}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1215.1 1140.68C1235.36 1160.89 1235.36 1194.05 1215.1 1214.26C1194.9 1234.47 1162.05 1234.47 1141.79 1214.26L922.31 994.576L701.278 1215.81C680.864 1236.02 647.81 1236.02 627.395 1215.81C607.033 1195.09 607.033 1161.93 627.395 1141.72L848.427 920.481L628.948 701.316C608.69 681.109 608.69 647.946 628.948 627.739C649.103 607.533 681.952 607.533 702.211 627.739L921.69 847.424L1144.38 624.634C1164.79 604.427 1197.8 604.427 1218.21 624.634C1238.57 645.359 1238.57 677.997 1218.21 698.722L995.573 921.519L1215.1 1140.68ZM922 92C464.133 92 93 462.977 93 921C93 1379.02 464.133 1750 922 1750C1379.87 1750 1751 1379.02 1751 921C1751 462.977 1379.87 92 922 92Z" fill="#E12523"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1215.1 1214.26C1235.36 1194.05 1235.36 1160.89 1215.1 1140.68L995.572 921.519L1218.21 698.722C1238.57 677.997 1238.57 645.359 1218.21 624.634C1197.8 604.427 1164.79 604.427 1144.38 624.634L921.689 847.424L702.21 627.74C681.952 607.533 649.103 607.533 628.948 627.74C608.689 647.946 608.689 681.109 628.948 701.316L848.426 920.481L627.395 1141.72C607.032 1161.93 607.032 1195.09 627.395 1215.81C647.809 1236.02 680.863 1236.02 701.278 1215.81L922.309 994.576L1141.79 1214.26C1162.05 1234.47 1194.89 1234.47 1215.1 1214.26Z" fill="white"/>
          </svg>
          <Chrono 
            redirection = {party.pageActive}
            setGame={setGame}
            chrono={200}
            button={'Jeu suivant'}
            redirectionGameBoolean={true}
            redirectionGame={redirectionGame}
          />
        </div>
        
        
      )}
    </div>
  );
}
