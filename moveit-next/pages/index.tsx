import Head from 'next/head'
import { ChallengeBox } from '../src/ChallengeBox';
import { CompletedChallanges } from '../src/CompletedChallanges';
import { CountdownContext, CountdownProvider } from '../src/contexts/CountdownContext';
import { CountDown } from '../src/Countdown';
import { ExperienceBar } from "../src/ExperienceBar";
import { Profile } from '../src/Profile';

import styles from '../styles/pages/Home.module.css';



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Moveit</title>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Inter&family=Rajdhani:wght@600&display=swap" rel="stylesheet"/>
      </Head>
      <ExperienceBar />

      <CountdownProvider>
      <section>
        <div>
            <Profile />
            <CompletedChallanges />
            <CountDown />
        </div>
        <div>
           <ChallengeBox />
           </div>
      </section>
      </CountdownProvider>
    </div>
  )
}
