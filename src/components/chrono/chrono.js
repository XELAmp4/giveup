import { useState, useEffect } from 'react';
import styles from './chrono.module.sass'



export default function Chrono({chrono, setGame, redirection, button}) {
  const [count, setCount] = useState(chrono); 


  useEffect(() => { 

      //Implementing the setInterval method 
      const interval = setInterval(() => { 
          setCount(count - 1); 
          if(count === 0)
            setGame(redirection);
      }, 1000); 

      //Clearing the interval 
     
      return () => clearInterval(interval);
  }, [count]); 

  return( 
    <section className={styles.Chrono}>
        <p className={styles.passe} onClick={() => setGame(redirection)}>{button}</p>
      <p className={styles.compteur}>{count}</p>
    </section>
  )
}