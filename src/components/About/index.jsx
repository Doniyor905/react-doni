import React from 'react';
import { withNamespaces } from 'react-i18next';

import styles from './About.module.scss';
import myImg from '../../image/myImg.png';

const About = ({ t }) => {
  return (
    <div className={styles.root} id="about">
      <div className={styles.inner}>
        <div className={styles.item}>
          <div className={styles.img}>
            <img src={myImg} alt="" />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>{t('Glad to see you')}</h2>
            <h2 className={styles.myName}>{t('I am Yusupov Doniyor')}</h2>
            <p className={styles.text}>{t('I develop websites')}</p>
            <p className={styles.subtitle}>{t('Code, Design')}</p>
            <p className={styles.subtitle__text}>{t('I can')}</p>
          </div>
        </div>
        <div className={styles.skill}>
          <h2 className={styles.skill__title}>{t('My tools')}</h2>
          <div className={styles.skill__box}>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React js</p>
            <p>Redux</p>
            <p>TypeScript</p>
            <p>Axios</p>
            <p>SASS</p>
            <p>CSS-modules</p>
            <p>Git</p>
            <p>UI Design</p>
            <p>SOLID</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(About);
