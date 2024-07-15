import React from 'react';

import styles from './Projects.module.scss';
import img from '../../image/pizza.jpg';
import img2 from '../../image/floristman.png';
import img3 from '../../image/Moliya.png';
import img4 from '../../image/logistic.png';
import img5 from '../../image/foto-1.png';
import img6 from '../../image/foto-2.png';
import img7 from '../../image/foto-3.png';
import img8 from '../../image/foto-4.png';
import img9 from '../../image/work-3.png';
import img10 from '../../image/foto-6.png';
import img11 from '../../image/foto-7.png';
import { withNamespaces } from 'react-i18next';

const Projects = ({ t }) => {
  const data = [
    {
      imgUrl: img,
      title: t('Online store'),
      skills: ['css', 'JavaScript', 'React js', 'Redux', 'TypeScript', 'Axios', 'CSS-modules'],
      link: 'https://pizza-doniyor905.vercel.app',
    },
    {
      imgUrl: img2,
      title: t('Online store'),
      skills: ['css', 'JavaScript', 'React js', 'Redux', 'Axios', 'CSS-modules'],
      link: 'https://floristman-two.vercel.app',
    },
    {
      imgUrl: img3,
      title: t('Website for the company'),
      skills: ['css', 'JavaScript', 'React js', 'Axios', 'CSS-modules'],
      link: 'https://moliya-web.vercel.app',
    },
    {
      imgUrl: img4,
      title: t('Logistics website'),
      skills: ['css', 'JavaScript', 'React js', 'Axios', 'CSS-modules'],
      link: 'https://trilliant-logistics.vercel.app',
    },
    {
      imgUrl: img10,
      title: t('Online store'),
      skills: ['css', 'JavaScript', 'React js', 'Redux', 'Axios', 'CSS-modules'],
      link: '/',
    },
    {
      imgUrl: img9,
      title: t('Website for the Monster company'),
      skills: ['css', 'JavaScript', 'Vue js'],
      link: 'https://monster-mu.vercel.app/',
    },
    {
      imgUrl: img5,
      title: t('Website for printing'),
      skills: ['html', 'css', 'JavaScript', 'php'],
      link: 'https://aliprint-react.vercel.app/',
    },

    {
      imgUrl: img6,
      title: t('Website for Design studio'),
      skills: ['html', 'css', 'JavaScript', 'php'],
      link: 'https://surur-design.vercel.app/',
    },
    {
      imgUrl: img7,
      title: t('Catalog website'),
      skills: ['html', 'css', 'JavaScript'],
      link: 'https://sneakers-beta.vercel.app',
    },
    {
      imgUrl: img8,
      title: t('Logistics website'),
      skills: ['html', 'css', 'JavaScript', 'php'],
      link: '/',
    },

    {
      imgUrl: img11,
      title: t('Landing page'),
      skills: ['html', 'css', 'JavaScript'],
      link: 'https://pet-shop-sigma.vercel.app/',
    },
  ];
  return (
    <div className={styles.root} id="project">
      <h2>{t('Lates Project Text')}</h2>
      <div className={styles.inner}>
        {data.map((items) => (
          <div key={items.imgUrl} className={styles.item}>
            <div className={styles.img}>
              <img src={items.imgUrl} alt="" />
            </div>
            <h3 className={styles.subtitle}>{items.title}</h3>
            <div className={styles.skills}>
              {items.skills.map((skill, i) => (
                <p key={i} className={styles.skills__block}>
                  {skill}
                </p>
              ))}
            </div>
            <a target="_blank" href={items.link} className={styles.demo}>
              {t('View Web site')}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withNamespaces()(Projects);
