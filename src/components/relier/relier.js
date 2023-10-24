import ExplicationRelier from './explication/explication-relier'
import QuestionRelier from './question/question-relier'
import ResultatRelier from './resultat/resultat-relier'
import { useState } from 'react';
import cover from '../../assets/data/cover.json'


export default function Relier({}) {
    //fonction permettant de choisir trois images totalement aléatoirement
    function random(){
        var rand1 = Math.floor(Math.random()*21);    
        var rand2 = Math.floor(Math.random()*21);    
        while(rand1 === rand2){
            rand2 = Math.floor(Math.random()*21); 
        }
        var rand3 = Math.floor(Math.random()*21);
        while(rand2 === rand3 || rand1 === rand3){
            rand3 = Math.floor(Math.random()*21); 
        } 
        return [rand1, rand2, rand3]
  }
  const source = random(21);
  console.log(source, 'img')

  //contient les 3 noms des fichiers des images
  const [Sources, setSources] = useState([cover[source[0]], cover[source[1]], cover[source[2]]]);

  const [gameT, setGame] = useState('explication-relier');
  let content;
  switch (gameT) {
    case 'explication-relier':
        content = (
          <ExplicationRelier
            setGame={setGame}
          />
        )
        break;
    case 'question-relier':
        content = (
          <QuestionRelier
          setGame={setGame}
          Sources={Sources}
          setSources={setSources}
          />
        )
        break;
    case 'resultat-relier':
        content = (
          <ResultatRelier
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