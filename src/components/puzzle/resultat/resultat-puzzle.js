import { useState, useEffect } from 'react';
import cover from '../../../assets/data/cover.json';        
import styles from './resultat-puzzle.module.sass';

export default function ResultatPuzzle({ orderCase, setOrderCase, elements, setElements, sourceCover, pochette }) {
  const [bravo, setBravo] = useState(false);

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

    setBravo(sontEgaux);
  }, [elements, tableauWin]);

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
        </div>
        
      )}
    </div>
  );
}
