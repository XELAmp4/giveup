import styles from './question-relier.module.sass'
import cover from '../../../assets/data/cover.json'
import React, { useState, useRef, useEffect } from 'react';
import Chrono from '../../chrono/chrono';

// eslint-disable-next-line no-empty-pattern
export default function QuestionRelier({setGame, Sources, setSources, save, setSave, liste,}) {
    const canvasPOINTSRef = useRef(null);
    const canvasLINESRef = useRef(null);
    let [points, setPoints] = useState([]);
    let [lines, setLines] = useState([]);
    let [drawing, setDrawing] = useState(false);
    let [relations, setRelations] = useState([]);
    let [startPoint, setStartPoint] = useState(null);
    let ctx,ctx2,canvasLINES,x,y,endX,endY;
    let datas = size();
    const dynamicStyles = {
        width: `${datas.miniGameSectionW}px`,
        height: `${datas.miniGameSectionH}px`,
      };
  
    useEffect(() => {
        const canvasPOINTS = canvasPOINTSRef.current;
        ctx2 = canvasPOINTS.getContext('2d');

        
        CreatePoints(ctx2,datas.right,datas.firstPoint,'D1','white',datas.point);
        CreatePoints(ctx2,datas.right,datas.secondPoint,'D2','white',datas.point);
        CreatePoints(ctx2,datas.right,datas.thirdPoint,'D3','white',datas.point);

        CreatePoints(ctx2,datas.left,datas.firstPoint,'G1','white',datas.point);
        CreatePoints(ctx2,datas.left,datas.secondPoint,'G2','white',datas.point);
        CreatePoints(ctx2,datas.left,datas.thirdPoint,'G3','white',datas.point);
  
        canvasLINES = canvasLINESRef.current;
        ctx = canvasLINES.getContext('2d');
  
        canvasLINES.addEventListener('pointerdown', handlePointerDown);
        canvasLINES.addEventListener('pointerup', handlePointerUp);
        canvasLINES.addEventListener('pointermove', handlePointerMove);
  
      return () => {
        canvasLINES.removeEventListener('pointerdown', handlePointerDown);
        canvasLINES.removeEventListener('pointerup', handlePointerUp);
        canvasLINES.removeEventListener('pointermove', handlePointerMove);
      };
    }, []); // Empty dependency array to run this effect only once on mount
  
    //Dessiner les lignes présentes dans la variable lines
    function drawLines() {
        ctx.clearRect(0, 0, canvasLINES.width, canvasLINES.height);

        for (const line of lines) {
            drawLine(ctx, line.startX, line.startY, line.endX, line.endY, 'white', 6);
        }
    }

    // dessine une ligne
    function drawLine(ctx, x1, y1, x2, y2, stroke = 'black', width = 3) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = stroke;
        ctx.lineWidth = width;
        ctx.stroke();
    }


    //création des points
    function CreatePoints(ctx,x,y,id, fill = 'red', width = 10) {
        ctx.fillStyle = fill;
        ctx.beginPath();
        ctx.arc(x,y,width,0,Math.PI*2);
        ctx.fill()
        points.push({x,y,width,id})
    }


    // Verifie si un point est relation avec un autre ou non
    function inRelation(element) {
        for (const relation of relations) {
            if (relation.includes(element)) {
                return true;
            }
        }
        return false;
    }

    // Verifie si un point est sur la meme ligne qu'un autre
    function sameColumn(depart, arrive) {
        return depart[0] == arrive[0]
    }

  
    // Calcul la taille des éléments des canvas
    function size() {
        let screenH = window.innerHeight;
        let screenW = window.innerWidth;

        let gameSectionH = screenH * 70/100;
        let gameSectionW = screenW * 70/100;

        let miniGameSectionH = gameSectionH  * 90/100;
        let miniGameSectionW = gameSectionW * 50/100;


        let interval = miniGameSectionH * 24.25/100;
        let point = miniGameSectionH * 3/100;


        return {
            canvasSizeH : gameSectionH * 60/100,
            canvasSizeW : gameSectionW * 40/100,

            point : gameSectionH * 3/100,
            interval : interval,

            miniGameSectionW : miniGameSectionW,
            miniGameSectionH: miniGameSectionH,

            firstPoint: interval,
            secondPoint: interval * 2 + point,
            thirdPoint: (interval * 3) + (point * 2),

            left: miniGameSectionW * 10/100,
            right: miniGameSectionW * 90/100
        };
    }
    const handlePointerDown = (e) => {
        // console.log('click start');
        x = e.offsetX;
        y = e.offsetY;
        points.forEach(point => {
            if (((x>=point.x-(point.width/2)) && (x<=point.x+(point.width/2))) && ((y>=point.y-(point.width/2)) && (y<=point.y+(point.width/2)))) {
                if (!inRelation(point.id)) {
                    startPoint = point.id;
                    drawing = true; 
                }   
            }
        });
    };
  
    const handlePointerUp = (e) => {
    //   console.log('click end');
      if (drawing) {
        endX = e.offsetX; 
        endY = e.offsetY;
        
        points.forEach(point => {
            if (((endX>=point.x-(point.width/2)) && (endX<=point.x+(point.width/2))) && ((endY>=point.y-(point.width/2)) && (endY<=point.y+(point.width/2)))) {
                if ((!inRelation(point.id))&&(!sameColumn(startPoint,point.id))) {
                    relations.push([startPoint,point.id])
                    lines.push({ startX: x, startY: y, endX, endY });
                }              
            }
        });
        setSave(relations);
        drawLines();
        drawing = false;
    }
    };


    // useEffect(() => {
    //     // 'save' has been updated, you can perform actions here
    //     console.log(save);
    // }, [save]);
    
  
    const handlePointerMove = (e) => {
    //   console.log('move ', ctx);
      if (drawing) {
        void ctx.clearRect(0, 0, 500, 500);
        drawLines();
        drawLine(ctx, x, y, e.offsetX, e.offsetY, 'white', 6);
    }
    };

    
    
//HTML
  return (
    <section className={ `${styles.relier}`}>
        <h1>Question Relier</h1>
        <div className="texte">

            <div className={ `${styles.game_container}`}>
                <div className={ `${styles.game_artistes}`}>
                    <p>{liste[0].Artiste}</p>
                    <p>{liste[1].Artiste}</p>
                    <p>{liste[2].Artiste}</p>
                </div>
                <div 
                    className={ `${styles.game_canva}`}
                    width={`${datas.miniGameSectionW}`}
                    height={`${datas.miniGameSectionH}`}
                    style={dynamicStyles}
                >
                    <canvas
                        ref={canvasPOINTSRef}
                        id="canvasPOINTS"
                        width={`${datas.miniGameSectionW}`}
                        height={`${datas.miniGameSectionH}`}
                        style={{ backgroundColor: 'transparent' }}
                    ></canvas>
                    <canvas
                        ref={canvasLINESRef}
                        id="canvasLINES"
                        width={`${datas.miniGameSectionW}`} 
                        height={`${datas.miniGameSectionH}`}
                    ></canvas>
                </div>
                <div className={ `${styles.game_albums}`}>
                    <img className={`${styles.cover1} ${styles.cover} `} src={'Timeline/'+Sources[0].img} data-artiste={Sources[0].Artiste}></img>
                    <img className={`${styles.cover2} ${styles.cover} `} src={'Timeline/'+Sources[1].img} data-artiste={Sources[1].Artiste}></img>
                    <img className={`${styles.cover3} ${styles.cover} `} src={'Timeline/'+Sources[2].img} data-artiste={Sources[2].Artiste}></img>
                </div>
            </div>
            <div className={ `${styles.chrono}`}>
                <Chrono 
                    redirection = {'resultat-relier'}
                    setGame={setGame}
                    chrono={10}
                    button={'Valider'}
                />
            </div>
         </div>
    </section>
    )
}

