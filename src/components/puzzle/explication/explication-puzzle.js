import styles from './explication-puzzle.module.sass'
import Chrono from '../../chrono/chrono';



export default function ExplicationPuzzle({setGame}) {
  return( 
  <section className={styles.explication}>
    <h1>Petite explication</h1>
    <p>Réassemble le puzzle pour reconstruire la cover ! </p>
    <div className={styles.divImage}>
      <img src='./imageExplication/explicationImage.png' alt='Screen du jeu'></img>
      <img src='./cover/joji_cover.jpeg' alt='Screen du jeu'></img>
    </div>
    
    <Chrono 
      chrono={2000000}
      setGame={setGame}
      redirection={'question-puzzle'}
    />
  </section>
  )
}