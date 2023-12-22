import ExplicationPuzzle from './explication/explication-puzzle'
import QuestionPuzzle from './question/question-puzzle'
import ResultatPuzzle from './resultat/resultat-puzzle'
import React, { useState, useEffect } from 'react';
import cover from '../../assets/data/cover.json'

export default function Puzzle({}) {
  const [elements, setElements] = useState([]);
  const [orderCase, setOrderCase] = useState([]);
  const [pochette, setPochette] = useState([]);
  const [game, setGame] = useState('explication-puzzle');
  let content;
  switch (game) {
    case 'explication-puzzle':
        content = (
          <ExplicationPuzzle
            setGame={setGame}
          />
        )
        break;
    case 'question-puzzle':
        content = (
          <QuestionPuzzle
            setGame={setGame}
            elements={elements}
            setElements={setElements}
            orderCase={orderCase}
            setOrderCase={setOrderCase}
            pochette={pochette}
            setPochette={setPochette}
          />
        )
        break;
    case 'resultat-puzzle':
        content = (
          <ResultatPuzzle
            setGame={setGame}
            elements={elements}
            setElements={setElements}
            orderCase={orderCase}
            setOrderCase={setOrderCase}
            pochette={pochette}
            setPochette={setPochette}
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