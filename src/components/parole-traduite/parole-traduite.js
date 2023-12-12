import TraductionQuest from './question/question-trad'
import ExplicationTrad from './explication/explication-trad';
import TraductionResult from './resultat/resultat-trad'
import { useState } from 'react';
import cover from '../../assets/data/cover.json'


export default function Traduction({}) {
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

    function randomIndex(x){
      var rand1 = Math.floor(Math.random()*x); 
      const falseProps = cover.filter(({langue, Artiste}) => {
        return langue === cover[rand1].langue && Artiste !== cover[rand1].Artiste
      }) 
      var rand2 = Math.floor(Math.random()*falseProps.length);    
      while(rand1 === rand2){
          rand2 = Math.floor(Math.random()*falseProps.length); 
      }
      var rand3 = Math.floor(Math.random()*falseProps.length);
      while(rand2 === rand3 || rand1 === rand3){
          rand3 = Math.floor(Math.random()*falseProps.length); 
      } 
      return {indexs: [rand1, rand2, rand3], falseProps}
}
  const index = random(3);
  const {indexs, falseProps} = randomIndex(cover.length);

  const [propo, setPropo] = useState([cover[indexs[0]], falseProps[indexs[1]], falseProps[indexs[2]]])
  //contient les 3 noms des fichiers des images

  const [game, setGame] = useState('explication-traduction');
  let content;
  switch (game) {
    case 'explication-traduction':
      content = (
        <ExplicationTrad
          setGame = {setGame}
        />
      )
      break;
    case 'question-traduction':
        content = (
          <TraductionQuest
            propo={propo}
            index={index}
            setGame={setGame}
          />
        )
        break;
    case 'resultat-traduction':
    content = (
      <TraductionResult
      index={propo[0]}
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