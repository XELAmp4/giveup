import React, { useState, useEffect } from 'react';
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
import styles from './puzzle.module.sass';

export default function Puzzle() {
  const [elements, setElements] = useState([]);
  
  useEffect(() => {
    const imgWidth = 600;
    const imgHeight = 600;
    const newElements = [];
    let emp = 0;

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
       emp +=1
        const style = {
          backgroundImage: `url(https://musister.com/cdn/shop/files/garcon.png?v=1688509611&width=1946)`,
          backgroundPosition: `-${col * imgWidth}px -${row * imgHeight}px`,
          width: imgWidth,
          height: imgHeight,
        };
        newElements.push({ id: `column_${col}_row_${row}`, class: `emp_${emp}`, style });
      }
    }

    setElements(newElements);
  }, []);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    
    if (active.id !== over.id){
      
      const activeIndex = elements.findIndex((el) => el.id === active.id);
      const overIndex = elements.findIndex((el) => el.id === over.id);
      console.log(activeIndex, 'active');
      console.log(overIndex, 'over');
      

      const reorderedElements = arrayMove([...elements], activeIndex, overIndex);
      setElements(reorderedElements);

    }

    // if (activeIndex === -1 || overIndex === -1) {
    //   return;
    // }

    
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <h1>ouiiii</h1>
      <div id={styles.plateau}>
        <ImageDivide elements={elements} />
      </div>
      
    </DndContext>
  );
}
