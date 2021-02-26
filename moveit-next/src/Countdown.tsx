import { useContext } from 'react';
import styles from '../styles/componentes/CountDown.module.css';
import {CountdownContext} from '../src/contexts/CountdownContext';


let countdownTimeout: NodeJS.Timeout;


export function CountDown(){
    const {minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        startCountdown, 
        resetCountdown} 
        = useContext(CountdownContext)
   
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
    
   


    return(
        <div> 
        <div className={styles.CountDownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
        </div>
        {  hasFinished ? (
            <p>Terminou...</p>
        ): (
            <>
                 {isActive ? (
            <button type="button" 
            disabled
            className={styles.startCountdownButton}
            
        >
                Ciclo encerrado
            
        </button>
        ) : (

            <button type="button" className={styles.startCountdownButton}
            onClick={startCountdown}
            >
                Iniciar um ciclo
                
            </button>
        )}
                </>
        )}
        
       
    </div>
    )
}