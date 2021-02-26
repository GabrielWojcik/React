import { useContext } from 'react';
import styles from '../styles/componentes/ChallengeBox.module.css';
import { challengesContext } from './contexts/ChallengesContext';
import { CountdownContext } from './contexts/CountdownContext';

export function ChallengeBox(){
    const {activeChallenge, resetChallenge, completChallenge} = useContext(challengesContext);
    const {resetCountdown} = useContext(CountdownContext);
    
    function handleChallengeSucceeded(){
        completChallenge();
        resetCountdown();
    }
    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();
    }

    return(
        <div className={styles.ChallengeBoxContainer}>
           { activeChallenge ? (
               <div className={styles.ChallengeActive}> 
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/$activeChallenge.type}.svg`}/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button type="button" className={styles.ChallengeFailedActive}
                        onClick={handleChallengeFailed}
                        >Falhei</button>
                        <button type="button" className={styles.ChallengeSucceededButton}
                        onClick={handleChallengeSucceeded}
                        
                        >Completei</button>
                    </footer>

                    </div>
           ): (
                <div className={styles.ChallengeBoxNotActive}>
                <strong>
                    Finalize um ciclo para receber um desafio
                </strong>
                <p>
                    <img src="icons/level-up.svg" alt=""/>
                    Avance de level completando desafios
                </p>
        </div>
           ) }
        </div>
    )
}