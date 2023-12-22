import { useState, useEffect } from 'react';
import styles from './chrono.module.sass'
import { useParty } from '../../providers/party-provider';


export default function Chrono({chrono, setGame, redirection, button, redirectionGameBoolean, redirectionGame}) {
  const [count, setCount] = useState(chrono); 
  const { party, setParty } = useParty();
  const { currentGameIndex, setCurrentGameIndex } = useParty();

  useEffect(() => { 

      //Implementing the setInterval method 
      const interval = setInterval(() => { 
          setCount(count - 1); 
          if(count === 0)
            
            
          if (redirectionGameBoolean === true) {
            setParty((prevParty) => ({
              ...prevParty,
              pageActive: redirectionGame,
            })) 
            console.log(party,'derouChrono');
            console.log(party.pageActive,'ActiveChrono');
            
              setGame('explication-'+redirection)
            }else {
              setGame(redirection)
            }
          ;
      }, 1000); 

      //Clearing the interval 
      return () => clearInterval(interval);
      
      
  }, [count]); 
  if (redirectionGameBoolean === true) {
    return( 
      <section className={styles.Chrono}>
          <p className={styles.passe} onClick={() => setGame(redirection)}>{button}</p>
        <p className={styles.compteur}>{count}</p>
      </section>
    )
    
  }else {
    return( 
      <section className={styles.Chrono}>
          <p className={styles.passe} onClick={() => setGame(redirection)}>{button}</p>
        <p className={styles.compteur}>{count}</p>
      </section>
    )
  }
 
}