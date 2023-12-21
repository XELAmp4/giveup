import ExplicationTimeline from './explication/explication-timeline'
import QuestionTimeline from './question/question-timeline'
import ResultatTimeline from './resultat/resultat-timeline'
import { useState } from 'react';
import cover from '../../assets/data/cover.json'


export default function Timeline({}) {
    //fonction permettant de choisir trois images totalement aléatoirement
    function random(x){
      var rand1 = Math.floor(Math.random()*x);    
      var rand2 = Math.floor(Math.random()*x);    
      while(rand1 === rand2){
          rand2 = Math.floor(Math.random()*x); 
      }
      var rand3 = Math.floor(Math.random()*x);
      while(rand2 === rand3 || rand1 === rand3){
          rand3 = Math.floor(Math.random()*x); 
      } 
      return [rand1, rand2, rand3]
}
const source = random(cover.length);
  console.log(source, 'img')

  //contient les 3 noms des fichiers des images
  const [Sources, setSources] = useState([cover[source[0]], cover[source[1]], cover[source[2]]]);

  const [game, setGame] = useState('explication-timeline');
  let content;
  switch (game) {
    case 'explication-timeline':
        content = (
          <ExplicationTimeline
            setGame={setGame}
          />
        )
        break;
    case 'question-timeline':
        content = (
          <QuestionTimeline
          setGame={setGame}
          Sources={Sources}
          setSources={setSources}
          />
        )
        break;
    case 'resultat-timeline':
        content = (
          <ResultatTimeline
            setGame={setGame}
            Sources={Sources}
          />
        )
        break;
    default:
      break;
    }
return (
    <div>
        {content}
    </div>
  )
}