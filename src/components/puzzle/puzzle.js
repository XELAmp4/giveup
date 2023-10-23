// Puzzle.js
import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import ImageDivide from './imageDivide';
import styles from './puzzle.module.sass'

export default function Puzzle() {
  const [elements, setElements] = useState([]);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!active || !over) {
      return;
    }

    const activeIndex = elements.findIndex((el) => el.id === active.id);
    const overIndex = elements.findIndex((el) => el.id === over.id);

    if (activeIndex === -1 || overIndex === -1) {
      return;
    }

    const reorderedElements = arrayMove([...elements], activeIndex, overIndex);
    setElements(reorderedElements);
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <h1>ouiiii</h1>
      <ImageDivide elements={elements} />
    </DndContext>
  );
}
