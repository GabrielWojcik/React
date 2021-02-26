import '../styles/global.css'
import styles from '../styles/componentes/ExperienceBar.module.css';


import { challengesContext, ChallengesProvider } from '../src/contexts/ChallengesContext';
import { useState } from 'react';


function MyApp({ Component, pageProps }) {
  

return(
      <ChallengesProvider>
      <Component {...pageProps} />
      </ChallengesProvider>
  )
}

export default MyApp
