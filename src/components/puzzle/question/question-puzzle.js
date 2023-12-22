import React, { useState, useEffect } from 'react';
import cover from '../../../assets/data/cover.json'
import {
  DndContext,
  closestCenter,
  TouchSensor,
  useSensors,
  useSensor,
  MouseSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  arraySwap,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import ImageDivide from './imageDivide';
import Chrono from '../../chrono/chrono';
import styles from './puzzle.module.sass';
import { shuffle } from 'gsap';

export default function Puzzle({setGame, orderCase, setOrderCase, elements, setElements, sourceCover, pochette, setPochette} ) {
  
  const sensors = useSensors(
    useSensor(TouchSensor),
    useSensor(MouseSensor),
  );
  function random(){
    var rand1 = Math.floor(Math.random()*21);    
    return rand1;}

  useEffect(() => {
    const imgWidth = 300;
    const imgHeight = 300;
    const newElements = [];
    let emp = -1;
  
    function random(x) {
      return Math.floor(Math.random() * x);
    }
  
    pochette = random(20);
    setPochette(pochette);
    const sourceCove = cover[pochette].img;
    
    let order = [];
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        emp +=1;
        const style = {
          backgroundImage: `url(./cover/${sourceCove})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '900px',
          backgroundPosition: `-${col * imgWidth}px -${row * imgHeight}px`,
          width: imgWidth,
          height: imgHeight,
        };
        order.push(emp);
        newElements.push({ id: col + row * 3, class: `emp_${emp}`, order: emp, style });
      }
    }  
  
    // Utilisation de la fonction de mélange de Fisher-Yates pour mélanger les éléments et l'ordre initial
    for (let i = order.length - 1; i > 1; i--) {

      let j=0;
      while (j === 0){
        j = Math.floor(Math.random() * (i + 1));}

      [order[i], order[j]] = [order[j], order[i]];
      [newElements[i], newElements[j]] = [newElements[j], newElements[i]];
    }
  
    setOrderCase(order);
    setElements(newElements);
  
  }, []);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    
    if (active && over && active.id !== over.id) {
      let activeIndex = elements.findIndex((el) => el.id === active.id);
      let overIndex = elements.findIndex((el) => el.id === over.id);
      orderCase[overIndex]= active.id;
      orderCase[activeIndex]= over.id;
      if (activeIndex !== -1 && overIndex !== -1) {
        const reorderedElements = arraySwap([...elements], activeIndex, overIndex);
        setElements(reorderedElements);
      }
    }
  }
 
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
    <Chrono 
        redirection = {'resultat-puzzle'}
        setGame={setGame}
        button={'Valider'}
        chrono={12}
    />
      <div id={styles.plateau} class="">
        <ImageDivide elements={elements} />
      </div>
    </DndContext>
  );
}
