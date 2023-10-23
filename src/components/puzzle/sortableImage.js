// SortableImage.js
import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import PartImage from './partImage';

export default function SortableImage({ data, elements, setElements, imgWidth, imgHeight, key}) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: data.id });
  console.log(data, 'SORTABLE');
  
  const style = {
    ...data.style,
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    transition,
  };

  return (
    <div
      id={data.id}
      className={"item"}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      {key}
    </div>
  );
}
