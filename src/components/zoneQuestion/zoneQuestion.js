import styles from './zoneQuestion.module.sass'
import Titre from '../Titre/Titre'
import Timeline from '../Timeline/timeline'
import Parametres from '../Parametres/Parametres'
import { useParty } from '../../providers/party-provider'
import RedirectionPuzzle from '../puzzle/redirectionPuzzle'




export default function ZoneQuestion({}) {
  const { party, setParty } = useParty();
  let content;
  // console.log(party.pageActive);
  switch (party.pageActive) {
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
    case 'timeline':
        content = (
          <Timeline/>
        )
        break;
    case 'puzzle':
    content = (
      <RedirectionPuzzle />
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