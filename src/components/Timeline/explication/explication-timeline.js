import styles from './explication-timeline.module.sass'
import Chrono from '../../chrono/chrono';



export default function ExplicationTimeline({setGame}) {
  return( 
  <section className={styles.explication}>
    <h1>Petite explication</h1>
    <p className={styles.exp}>Le but est simple mettre dans l'ordre chronologique (du plus vieux au plus récent) les covers des albums. Pour changer la position de deux cover c'est simple il suffis simplement de cliquer sur les deux covers.</p>
    <img src='Timeline/exemple-timeline.png' alt='Screen du jeu'></img>
    <Chrono 
      chrono={30}
      setGame={setGame}
      redirection={'question-timeline'}
      button={'Passer !'}
      redirectionGameBoolean={false}
    />
  </section>
  )
}