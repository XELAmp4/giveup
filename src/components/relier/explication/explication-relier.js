import styles from './explication-relier.module.sass'
import Chrono from '../../chrono/chrono';



export default function ExplicationRelier({setGame}) {
  return( 
  <section className={styles.explication}>
    <h1>Petite explication RELIER</h1>
    <Chrono 
      chrono={5}
      setGame={setGame}
      redirection={'question-relier'}
    />
  </section>
  )
}