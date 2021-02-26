import { Children, useContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import {createContext} from "react";
import { CountDown } from "../Countdown";
import { challengesContext } from './ChallengesContext';


interface CountdownContextData{
           minutes:number;
           seconds:number;
           hasFinished:boolean;
           isActive:boolean;
           startCountdown: ()=> void;
           resetCountdown: ()=> void;
}

interface CountdownProviderProps{
    children:ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData)
let countdownTimeout: NodeJS.Timeout;
export function CountdownProvider({children}){
    
    const {startNewChallenge } = useContext(challengesContext);
   
    const [time, setTime] = useState(25 * 60)
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinhised] = useState(false);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    function startCountdown(){
        setIsActive(true);

    }
    function resetCountdown(){
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setHasFinhised(false);
        setTime(25 * 60);
       
    } 


    useEffect(() =>{
        if(isActive && time > 0){
           countdownTimeout = setTimeout(() => {
                setTime(time -1);
            },1000)
        }else if(isActive && time === 0){
            setHasFinhised(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])


    return(
        <CountdownContext.Provider value={{
           minutes,
           seconds,
           hasFinished,
           isActive,
           startCountdown,
           resetCountdown,
        }}>
            {Children}
        </CountdownContext.Provider>
    )
}