import styles from './scoreboard.module.sass'
import { useParty } from '../../../providers/party-provider';




export default function Scoreboard( ) {
    const { party, setParty } = useParty();
    const Points = [...party.points];


  return   (
    <section className={styles.resultat}>
    <h1>La victoire reviens à ...</h1>
  </section>
  )
}