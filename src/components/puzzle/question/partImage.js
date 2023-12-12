// PartImage.js
import React from 'react';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import styles from './puzzle.module.sass'

export default function PartImage(props) { 
  // console.log(props.ref);
  // console.log(props);
  
  
  return 
 
      <div
        className={"item"}
        ref={props.ref}
        {...props.attributes}
        {...props.listeners}
        style={props.style}
      >
        {props.index}
      </div>
  
}
