import styles from './explication-timeline.module.sass'


export default function ExplicationTimeline() {
  return( 
  <section className={styles.explication}>
    <h1>Petite explication</h1>
    <p>Le but est simple mettre dans l'ordre chronologique (du plus vieux au plus récent) les covers des albums. Pour changer la position de deux cover c'est simple il suffis simplement de cliquer sur les deux covers.</p>
    <img src='Timeline/exemple-timeline.png' alt='screen du jeu'></img>
  </section>
  )
}