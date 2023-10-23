import styles from './timeline.module.sass'
import cover from '../../assets/data/cover.json'
import { useState, useEffect } from 'react';

// eslint-disable-next-line no-empty-pattern
export default function Timeline({}) {

    //fonction permettant de choisir trois images totalement aléatoirement
    function random(){
        var rand1 = Math.floor(Math.random()*21);    
        var rand2 = Math.floor(Math.random()*21);    
        while(rand1 === rand2){
            rand2 = Math.floor(Math.random()*21); 
        }
        var rand3 = Math.floor(Math.random()*21);
        while(rand2 === rand3 || rand1 === rand3){
            rand3 = Math.floor(Math.random()*21); 
        } 
        return [rand1, rand2, rand3]
    }
    
    //Ce tableau vide contiendra l'indices des deux cliques pour échanger les images
    const [tab, setTab] = useState([]);

    const source = random();
    //contient les 3 noms des fichiers des images
    const [Sources, setSources] = useState([cover[source[0]].img, cover[source[1]].img, cover[source[2]].img]);
    //Rentre les données des clique 
    const MajTab = (indice)=>{
        setTab([...tab, indice]);
    }  
    //Rafraichi le useState pour savoir tab est de longueur 2
    useEffect(() => {
        if(tab.length === 2){
            const fsource = Sources;
            let tmp = Sources[tab[1]];
            fsource[tab[1]] = fsource[tab[0]];
            fsource[tab[0]] = tmp;
            setSources(fsource);
            setTab([]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tab])

    //HTML
  return (
    <section className={styles.timeline}>
        <h1>Question Timeline</h1>
        <img className={`${styles.cover1} ${ tab.includes(0) ? styles.selected : ''}`} onClick={()=>MajTab(0)} src={'Timeline/'+Sources[0]} alt=''></img>
        <img className={`${styles.cover2} ${ tab.includes(1) ? styles.selected : ''}`} onClick={()=>MajTab(1)} src={'Timeline/'+Sources[1]} alt=''></img>
        <img className={`${styles.cover3} ${ tab.includes(2) ? styles.selected : ''}`} onClick={()=>MajTab(2)} src={'Timeline/'+Sources[2]} alt=''></img>
        <div className={styles.fleche}>
            <div className={styles.trait}></div>
            <div className={styles.triangle}></div>
        </div>
        <div className={styles.texte}>
            <p>Ancien</p>
            <p>Récent</p>
        </div>
    </section>
    )
}

