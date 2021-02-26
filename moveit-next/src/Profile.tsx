import { useContext } from 'react';
import styles from '../styles/componentes/Profile.module.css';
import { challengesContext } from './contexts/ChallengesContext';


export function Profile(){
    const {level} = useContext(challengesContext);
    return(
        <div className={styles.profileContainer}>
            <img src="https://www.flaticon.com/free-icon/avatar_147144"></img>
            <div>
                <strong> Gabriel Wojcik  </strong>
                <p>
                <img src="icons/level.svg" alt="Level"/>
                {level}</p>
            </div>
        </div>    
    )
}