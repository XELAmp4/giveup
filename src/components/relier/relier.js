import ExplicationRelier from './explication/explication-relier'
import QuestionRelier from './question/question-relier'
import ResultatRelier from './resultat/resultat-relier'
import React, { useState, useMemo } from 'react';
import cover from '../../assets/data/cover.json'


export default function Relier({}) {

    const [save, setSave] = useState([]);
    // const [artistes, setArtistes] = useState([]);


    //fonction permettant de choisir trois images totalement aléatoirement
    function random(){
        var rand1 = Math.floor(Math.random()*20);    
        var rand2 = Math.floor(Math.random()*20);    
        while(rand1 === rand2){
            rand2 = Math.floor(Math.random()*20); 
        }
        var rand3 = Math.floor(Math.random()*20);
        while(rand2 === rand3 || rand1 === rand3){
            rand3 = Math.floor(Math.random()*20); 
        } 
        return [rand1, rand2, rand3]
  }
  const source = random(20);

  //contient les 3 noms des fichiers des images
  const [Sources, setSources] = useState([cover[source[0]], cover[source[1]], cover[source[2]]]);

  const [gameT, setGame] = useState('explication-relier');
  let content;


  const getRandomInt = (max) =>  {return Math.floor(Math.random() * max);}
  const createList = (datas) => {
    let n1 = getRandomInt(3);
    let n2 = getRandomInt(3);
    while (n2 == n1) {
        n2 = getRandomInt(3);  
    }
    let n3 = getRandomInt(3);
    while ((n3 == n1) || (n3 == n2)) {
        n3 = getRandomInt(3);  
    }
    let res=["","",""];
    res[n1]= datas[0];
    res[n2]= datas[1];
    res[n3]= datas[2];
  
    return res;
}

const liste = useMemo(() => createList(Sources), [Sources]);
console.log(liste,'liste');

const artistes = {
  G1: liste[0] ? liste[0].Artiste : "a",
  G2: liste[1] ? liste[1].Artiste : "b",
  G3: liste[2] ? liste[2].Artiste : "c",
};
console.log(artistes,'artistes');

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
          save = {save}
          setSave = {setSave}
          artistes = {artistes}
          liste = {liste}
          />
        )
        break;
    case 'resultat-relier':
        content = (
          <ResultatRelier
            setGame={setGame}
            Sources={Sources}
            save = {save}
            artistes={artistes}
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