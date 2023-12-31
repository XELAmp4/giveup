import styles from './zoneQuestion.module.sass'
import Titre from '../Titre/Titre'
import Timeline from '../Timeline/timeline'
import Traduction from '../parole-traduite/parole-traduite'
import Relier from '../relier/relier'
import Parametres from '../Parametres/Parametres'
import { useParty } from '../../providers/party-provider'
import RedirectionPuzzle from '../puzzle/redirectionPuzzle'
import Scoreboard from '../scoreboard/scoreboard'

export default function ZoneQuestion({}) {
  const { party, setParty } = useParty();
  let content;
  
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

    case 'traduction':
        content = (
          <Traduction/>
        )
        break;
    case 'relier':
      content = (
        <Relier/>
      )
      break;
    case 'puzzle':
    content = (
      <RedirectionPuzzle />
    )
    break;
    case 'scoreboard':
      content = (
        <Scoreboard/>
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