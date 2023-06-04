import React from "react";

import styles from "./About.module.scss";
import myImg from "../../image/myImg.png";

const About = () => {
  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.item}>
          <div className={styles.img}>
            <img src={myImg} alt="" />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>Рад вас видеть</h2>
            <h2 className={styles.myName}>Я Юсупов Дониёр</h2>
            <p className={styles.text}>
              Я разрабатываю сайты для людей и компаний. Делаю всё сам:
              составляю протоитп, дизайн-макет, пишу код
            </p>
            <p className={styles.subtitle}>Код, Дизайн</p>
            <p className={styles.subtitle__text}>
              Могу собрать страницу для вашей компании, даже если запускать её
              нужно уже завтра. Из инструментов есть: Figma, Photoshop, HTML,
              CSS, JavaScript
            </p>
          </div>
        </div>
        <div className={styles.skill}>
          <h2 className={styles.skill__title}>
            Работаю с разным языками и инструментами
          </h2>
          <div className={styles.skill__box}>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React js</p>
            <p>SASS</p>
            <p>Git</p>
            <p>UI Design</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
