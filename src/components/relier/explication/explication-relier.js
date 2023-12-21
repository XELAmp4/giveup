import styles from './explication-relier.module.sass'
import Chrono from '../../chrono/chrono';



export default function ExplicationRelier({setGame}) {
  return( 
    <section className={styles.explication}>
    <h1>Petite explication</h1>
    <p className={styles.exp}>L'objectif est de relier l'artiste a ca cover avant le temp imparti.</p>
    <img src='Timeline/exemple-timeline.png' alt='Screen du jeu'></img>
    <Chrono 
      chrono={1}
      setGame={setGame}
      redirection={'question-relier'}
    />
  </section>
  )
}