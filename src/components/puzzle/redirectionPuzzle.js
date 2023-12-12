import Puzzle from "./puzzle";
import { useState } from 'react';

export default function RedirectionPuzzle({}) {
  const [gameT, setGame] = useState('puzzle');
  let content;
  switch (gameT) {
    case 'puzzle':
        content = (
          <Puzzle />
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