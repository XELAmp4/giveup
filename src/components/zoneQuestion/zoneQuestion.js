import styles from './zoneQuestion.module.sass'
import Titre from '../Titre/Titre'



export default function zoneQuestion() {
  return (
    <div className={styles.gradient}>
      <div className={styles.zoneQuestion}>
        <Titre/>
      </div>
    </div>
  )
}