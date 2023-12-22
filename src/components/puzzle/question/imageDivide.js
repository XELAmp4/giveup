import React from 'react';
import { SortableContext, useSortable, arraySwap, rectSwappingStrategy } from '@dnd-kit/sortable';
import SortableImage from './sortableImage';
import styles from './puzzle.module.sass';

export default function ImageDivide({ elements, orderCase }) {
  
  return (
    <SortableContext reorderItems={arraySwap} strategy={rectSwappingStrategy}  items={elements.map((el) => el.id)}>
      {elements.map((data, index) => (
        <SortableImage key={index} data={data} imgWidth={data.style.width} imgHeight={data.style.height} />
      ))}
    </SortableContext>
  );
}
