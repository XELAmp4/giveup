import styles from './explication-trad.module.sass'
import Chrono from '../../chrono/chrono';

export default function ExplicationTrad({setGame}) {
  return( 
  <section className={styles.explication}>
    <h1 className={styles.titre}>Petite explication</h1>
    <p className={styles.exp}>Tout le monde participe ! Utilisez les touches du clavier qui vous sont attribuées pour buzzer et tenter votre chance. Attention, si votre réponse est incorrecte, vous perdrez des points. Bonne chance à tous !</p>
    <div className={styles.touche}>
      <p className={styles.touchep}> Touche A : Joueur 1</p>
      <p className={styles.touchep}> Touche T : Joueur 2</p>
      <p className={styles.touchep}> Touche U : Joueur 3</p>
      <p className={styles.touchep}> Touche P : Joueur 4</p>
    </div>
    <img className={styles.imgjeu} src='imageExplication/exemple-traduction.png' alt='Screen du jeu Timeline'></img>
    <Chrono 
      chrono={30}
      setGame={setGame}
      redirection={'question-traduction'}
      button={'Passer !'}
    />
  </section>
  )
}