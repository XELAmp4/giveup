// SortableImage.js
import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import styles from './puzzle.module.sass';

export default function SortableImage({ data, elements, setElements, imgWidth, imgHeight}) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: data.id });  
  const style = {
    ...data.style,
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    transition: undefined,
  };

  
  return (
    <div
      id={data.id}
      className={styles[data.class]}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      {}
    </div>
  );
}
