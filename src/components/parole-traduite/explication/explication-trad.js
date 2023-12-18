import styles from './explication-trad.module.sass'
import Chrono from '../../chrono/chrono';



export default function ExplicationTrad({setGame}) {
  return( 
  <section className={styles.explication}>
    <h1>Petite explication</h1>
    <p className={styles.exp}>Tout le monde participe ! Utilisé les touches du clavier qui vous sont attribués pour buzzer et tenter votre chance. /!\ Attention si votre réponse est incorrect vous perderai des points. Bonne chance à vous !</p>
    <img src='Timeline/exemple-traduction.png' alt='Screen du jeu Timeline'></img>
    <Chrono 
      chrono={30}
      setGame={setGame}
      redirection={'question-traduction'}
      button={'Passer !'}
    />
  </section>
  )
}