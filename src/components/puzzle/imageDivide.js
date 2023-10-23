import React, { useEffect } from 'react';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import SortableImage from './sortableImage';
import styles from './puzzle.module.sass';

export default function ImageDivide({ elements }) {
  const imgWidth = 150;
  const imgHeight = 150;

  useEffect(() => {
    // La fonction imageLoad() est appelée une seule fois au chargement de la page.
    imageLoad();
  }, []);

  function imageLoad() {
    const newElements = [];
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const style = {
          backgroundImage: `url(https://musister.com/cdn/shop/files/garcon.png?v=1688509611&width=1946)`,
          backgroundPosition: `-${col * imgWidth}px -${row * imgHeight}px`,
          width: imgWidth,
          height: imgHeight,
        };
        newElements.push({ id: `column_${col}_row_${row}`, style });
      }
    }
    // setElements(newElements);
  }

  return (
    <SortableContext items={elements.map((el) => el.id)}>
      {elements.map((data, index) => (
        <SortableImage key={index} data={data} imgWidth={imgWidth} imgHeight={imgHeight} />
      ))}
    </SortableContext>
  );
}
