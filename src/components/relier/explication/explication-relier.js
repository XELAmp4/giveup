import styles from './explication-relier.module.sass'
import Chrono from '../../chrono/chrono';

export default function ExplicationRelier({setGame}) {
  return( 
    <section className={styles.explication}>
    <h1>Petite explication</h1>
    <p className={styles.exp}>L'objectif est de relier l'artiste à sa cover avant le temps imparti.</p>
    <img src='imageExplication/exemple-relier.png' alt='Screen du jeu'></img>
    <Chrono 
      chrono={20}
      setGame={setGame}
      redirection={'question-relier'}
      button={'Passer !'}
    />
  </section>
  )
}