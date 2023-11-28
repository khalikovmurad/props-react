import React from 'react'
import ReactDOM from 'react-dom/client'
import Head from './components/header/Head'
import MainBlock from './components/block/MainBlock'
import styles from './Main.module.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className={styles.market}> 
    <Head/>
    <MainBlock/>
  </div>
)
