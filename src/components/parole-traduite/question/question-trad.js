import styles from './question-trad.module.sass';
import { useState, useEffect } from 'react';

export default function Question({ propo, index, setGame, buzzer, setBuzzer}) {
     const text = propo[0];
  const [correc, setcorrec] = useState('');

  useEffect(() => {
    const handleKeyPress = (event) => {
      const buzzerKeyMap = {
        a: 'Joueur 1',
        t: 'Joueur 2',
        u: 'Joueur 3',
        p: 'Joueur 4',
      };

      const buzzerName = buzzerKeyMap[event.key];

      if (buzzer === null && buzzerName) {
        setBuzzer(buzzerName);
        setcorrec(buzzerName);
      }
    };

    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [buzzer]);

  function submit(index, button) {
    if (buzzer === null) {
      return;
    }

    console.log(JSON.stringify(text) === JSON.stringify(propo[index]));
    if (JSON.stringify(text) !== JSON.stringify(propo[index])) {
      setcorrec(button);
    } else {
      setGame('resultat-traduction');
      return;
    }

    // Réinitialisez le buzzer après le buzz
    setBuzzer(null);
  }

  return (
     <section className={styles.containerQuest}>
        <h1>Question *</h1>
        {buzzer && <p className={styles.buzzer}>Au tour de : {buzzer}</p>}
        <div className={styles.containerTrad}>
             <p className={styles.traduction}>{text.traduction}</p>
        </div>
        <div className={styles.containerButtons}>
             <p className={`${styles.button} ${ correc === 'button1' ? styles.button1 : ''}`} onClick={() => submit(index[0], 'button1')}>"{propo[index[0]].musique}" de {propo[index[0]].Artiste}</p>
             <p className={`${styles.button} ${ correc === 'button2' ? styles.button2 : ''}`} onClick={() => submit(index[1], 'button2')}>"{propo[index[1]].musique}" de {propo[index[1]].Artiste}</p>
             <p className={`${styles.button} ${ correc === 'button3' ? styles.button3 : ''}`} onClick={() => submit(index[2], 'button3')}>"{propo[index[2]].musique}" de {propo[index[2]].Artiste}</p>
        </div>
        <p className={styles.aide}>Chanson {text.langue} traduite en {text.langueTrad}</p>
        <svg width="10vw" height="10vw" viewBox="0 0 1843 1843" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles.cross} ${ correc === false ? styles.block : styles.none}`}>
           <path fill-rule="evenodd" clip-rule="evenodd" d="M1215.1 1140.68C1235.36 1160.89 1235.36 1194.05 1215.1 1214.26C1194.9 1234.47 1162.05 1234.47 1141.79 1214.26L922.31 994.576L701.278 1215.81C680.864 1236.02 647.81 1236.02 627.395 1215.81C607.033 1195.09 607.033 1161.93 627.395 1141.72L848.427 920.481L628.948 701.316C608.69 681.109 608.69 647.946 628.948 627.739C649.103 607.533 681.952 607.533 702.211 627.739L921.69 847.424L1144.38 624.634C1164.79 604.427 1197.8 604.427 1218.21 624.634C1238.57 645.359 1238.57 677.997 1218.21 698.722L995.573 921.519L1215.1 1140.68ZM922 92C464.133 92 93 462.977 93 921C93 1379.02 464.133 1750 922 1750C1379.87 1750 1751 1379.02 1751 921C1751 462.977 1379.87 92 922 92Z" fill="#E12523"/>
           <path fill-rule="evenodd" clip-rule="evenodd" d="M1215.1 1214.26C1235.36 1194.05 1235.36 1160.89 1215.1 1140.68L995.572 921.519L1218.21 698.722C1238.57 677.997 1238.57 645.359 1218.21 624.634C1197.8 604.427 1164.79 604.427 1144.38 624.634L921.689 847.424L702.21 627.74C681.952 607.533 649.103 607.533 628.948 627.74C608.689 647.946 608.689 681.109 628.948 701.316L848.426 920.481L627.395 1141.72C607.032 1161.93 607.032 1195.09 627.395 1215.81C647.809 1236.02 680.863 1236.02 701.278 1215.81L922.309 994.576L1141.79 1214.26C1162.05 1234.47 1194.89 1234.47 1215.1 1214.26Z" fill="white"/>
      </svg>
     </section>
     )
 }
 