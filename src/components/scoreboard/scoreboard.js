import styles from './scoreboard.module.sass'
import { useParty } from '../../providers/party-provider';




export default function Scoreboard() {
    const { party, setParty } = useParty();
    const Points = [...party.points];
  
    // Trouver l'index du joueur avec le plus de points
    const gagnantIndex = Points.indexOf(Math.max(...Points));

    // Vérifier s'il y a égalité
  const egalite = Points.filter((point) => point === Points[gagnantIndex]).length > 1;

  console.log(egalite);

  
    return (
      <section className={styles.resultat}>
        <h1>La victoire revient à ...</h1>
        <div className={styles.Scoreboard}>
          {Points.map((joueur, index) => (
            <p key={index} className={styles.joueurs}>
              Joueur {index + 1} : {joueur} points </p>
          ))}
          {egalite === true ? <p className={styles.joueurs}>Égalité!</p> : <p className={styles.joueurs}>Bravo Joueur {gagnantIndex + 1} tu as gagné !!</p>}
}
        </div>
      </section>
    );
  }