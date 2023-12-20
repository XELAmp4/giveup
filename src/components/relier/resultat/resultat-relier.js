import styles from './resultat-relier.module.sass'
import { useState, useEffect } from 'react';


export default function ResultatTimeline({Sources, save, artistes}) {
//   const [date, setDate] = useState([Sources[0].Sortie, Sources[1].Sortie, Sources[2].Sortie]);
//   const [img, setImg] = useState([Sources[0].img, Sources[1].img, Sources[2].img]);

  console.log("%cRésultats", "color: red")
  // console.log(save);
  // console.log(Sources);
  let correct;
  let trouvezUnNomDeVariableWallahMoiLaFlemme;
  let nbOk = 0;
  if (save.length !=3) {
      correct = false;
      trouvezUnNomDeVariableWallahMoiLaFlemme = "fausse";
  }else{
    save.forEach(relation => {
      if (relation[0][0] == "G") {
        let artisteName = artistes[relation[0]];
        let artisteCover = Sources[relation[1][1]-1].Artiste;
        if (artisteName == artisteCover) {
          nbOk += 1;
        }
        
      }else{
        let artisteName = artistes[relation[1]];
        let artisteCover = Sources[relation[0][1]-1].Artiste;
        if (artisteName == artisteCover) {
          nbOk += 1;
        }
      }
    });
  }

  if (nbOk == 3) {
    correct = true;
    trouvezUnNomDeVariableWallahMoiLaFlemme = "vraie";
  }else{
    trouvezUnNomDeVariableWallahMoiLaFlemme = "fausse";

  }
  return( 
  <section className={styles.resultat}>
    <h1>Votre réponse était {trouvezUnNomDeVariableWallahMoiLaFlemme}</h1>
    
  </section>
  )
}