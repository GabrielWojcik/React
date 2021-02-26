import { useContext } from 'react';
import styles from '../styles/componentes/ExperienceBar.module.css';
import { challengesContext } from './contexts/ChallengesContext';

export function ExperienceBar(){
    const{currentExperience, experienceToNextLevel} = useContext(challengesContext);

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return(
        <header className={styles.experienceBar}>
            <span>0 Xp</span>
            <div>
                        <div style={{width:`${percentToNextLevel}`}}>

                        <span className={styles.currentExpirence} style={{left: `${percentToNextLevel}`}}>
                            {currentExperience} xp
                        </span>
                         </div>
                </div>
                  
            
           
            <span>{experienceToNextLevel} Xp</span>
        </header>
    )
}