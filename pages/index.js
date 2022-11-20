import Head from 'next/head';
import styles from '../styles/Home.module.css';
import * as React from 'react';

import { RecoilRoot } from 'recoil';

import {
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
  CardInput,
  CardSubmit,
} from '../cards';

import Fieldset from '../fieldset';

export default function Home() {
  return (
    <RecoilRoot>
      <div className={styles.container}>
        <Head>
          <title>J6W Coding Exam</title>
        </Head>

        <main className={styles.main}>
          <form className={styles.grid}>
            <Card1></Card1>

            <Card2></Card2> 

            <Card3></Card3>

            <Card4></Card4>

            <CardInput></CardInput>

            <Fieldset></Fieldset>

            <CardSubmit></CardSubmit>
          </form>
        </main>

        <footer className={styles.footer}>
          <a href="https://next.new" target="_blank" rel="noopener noreferrer">
            Created with&nbsp;<b>next.new</b>&nbsp;⚡️
          </a>
        </footer>
      </div>
    </RecoilRoot>
  );
}
