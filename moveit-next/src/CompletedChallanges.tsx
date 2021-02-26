import { useContext } from 'react';
import styles from '../styles/componentes/CompletedChallanges.module.css';
import { challengesContext } from './contexts/ChallengesContext';

export function CompletedChallanges(){
    const {challengesCompleted} = useContext(challengesContext);

    return(
        <div className={styles.CompletedChallanges}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}