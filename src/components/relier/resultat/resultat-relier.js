import styles from './resultat-relier.module.sass'
import { useState, useEffect } from 'react';


export default function ResultatTimeline({Sources, save}) {
//   const [date, setDate] = useState([Sources[0].Sortie, Sources[1].Sortie, Sources[2].Sortie]);
//   const [img, setImg] = useState([Sources[0].img, Sources[1].img, Sources[2].img]);

  console.log("%cRésultats", "color: red")
  console.log(save);
  console.log(Sources);

  let juste;
  console.log(save.length);
  if (save.length !=3) {
      juste = "FAUX"
  }else{
    juste = 'jsp wsh'
  }
  return( 
  <section className={styles.resultat}>
    <h1>La réponse est ... relier</h1>
    
    <p>{juste}</p>
  </section>
  )
}