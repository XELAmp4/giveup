import styles from './zoneQuestion.module.sass'
import Titre from '../Titre/Titre'
import Parametres from '../Parametres/Parametres'



export default function zoneQuestion({PageActive}) {
  let content;
  switch (PageActive) {
    case 'home':
      content = (
        <Titre/>
      )
      break;
    case 'parametres':
      content = (
        <Parametres/>
      )
      break;
    default:
      break;
  }
  return (
    <div className={styles.gradient}>
      <div className={styles.zoneQuestion}>
        {content}
      </div>
    </div>
  )
}