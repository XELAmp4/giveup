import styles from './resultat-timeline.module.sass'
import { useState, useEffect } from 'react';


export default function ResultatTimeline({Sources}) {
  const [date, setDate] = useState([Sources[0].Sortie, Sources[1].Sortie, Sources[2].Sortie]);
  const [img, setImg] = useState([Sources[0].img, Sources[1].img, Sources[2].img]);

  useEffect(() => {
      const timestamp1 = Sources[0].date;
      const timestamp2 = Sources[1].date;
      const timestamp3 = Sources[2].date;
      console.log(timestamp1, timestamp2, timestamp3)
      var tabdate = [];
      var tabsrc = [];
  
      if (timestamp1 < timestamp2) {
        console.log('Date 1 avant Date 2');
        if (timestamp2 < timestamp3) {
          console.log('Date 2 avant Date 3');
          if (timestamp1 < timestamp3) {
            console.log('Date 1 avant Date 3');
            tabdate =[Sources[0].Sortie ,Sources[1].Sortie ,Sources[2].Sortie]
            tabsrc =[Sources[0].img ,Sources[1].img ,Sources[2].img]
          } 
        } else {
          console.log('Date 2 apres 3');
          if (timestamp1 < timestamp3) {
            console.log('Date 1 avant Date 3');
            tabdate =[Sources[0].Sortie ,Sources[2].Sortie ,Sources[1].Sortie]
            tabsrc =[Sources[0].img ,Sources[2].img ,Sources[1].img]
          } else {
            console.log('Date 1 apres 3');
            tabdate =[Sources[2].Sortie, Sources[0].Sortie, Sources[1].Sortie]
            tabsrc =[Sources[2].img, Sources[0].img, Sources[1].img]
          }
        }
      } else {
        console.log('Date 1 apres Date 2');
        if (timestamp2 < timestamp3) {
          console.log('Date 2 avant Date 3');
          if (timestamp1 < timestamp3) {
            console.log('Date 1 avant Date 3');
            tabdate =[Sources[1].Sortie, Sources[0].Sortie, Sources[2].Sortie]
            tabsrc =[Sources[1].img, Sources[0].img, Sources[2].img]
          } else {
            console.log('Date 1 apres 3');
            tabdate =[Sources[1].Sortie, Sources[2].Sortie, Sources[0].Sortie]
            tabsrc =[Sources[1].img, Sources[2].img, Sources[0].img]
          }
        } else {
          console.log('Date 2 apres Date 3');
          if (timestamp1 < timestamp3) {
            console.log('Date 1 avant Date 3');
            tabdate =[Sources[2].Sortie, Sources[1].Sortie, Sources[0].Sortie]
            tabsrc =[Sources[2].img, Sources[1].img, Sources[0].img]
          } else {
            console.log('Date 1 apres 3');
            tabdate =[Sources[2].Sortie, Sources[1].Sortie, Sources[0].Sortie]
            tabsrc =[Sources[2].img, Sources[1].img, Sources[0].img]
          }
        }
    }
    setDate(tabdate);
    setImg(tabsrc);
  }, []); 


  return( 
  <section className={styles.resultat}>
    <h1>La réponse est ...</h1>
    <img className={styles.cover1} src={'Timeline/'+img[0]} alt=''></img>
    <p className={styles.date1}>{date[0]}</p>
    <img className={styles.cover2} src={'Timeline/'+img[1]} alt=''></img>
    <p className={styles.date2}>{date[1]}</p>
    <img className={styles.cover3} src={'Timeline/'+img[2]} alt=''></img>
    <p className={styles.date3}>{date[2]}</p>
  </section>
  )
}