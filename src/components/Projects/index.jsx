import React from "react";

import styles from "./Projects.module.scss";
import img from "../../image/foto-1.png";
import img2 from "../../image/foto-2.png";
import img3 from "../../image/foto-3.png";
import img4 from "../../image/foto-4.png";
import img5 from "../../image/foto-5.png";
import img6 from "../../image/foto-6.png";
import img7 from "../../image/foto-7.png";

const Projects = () => {
  return (
    <div className={styles.root} id="project">
      <h2>Последние проекты</h2>
      <div className={styles.inner}>
        <div className={styles.item}>
          <div className={styles.img}>
            <img src={img} alt="" />
          </div>
          <h3 className={styles.subtitle}>Корпоративный сайт</h3>
          <div className={styles.skills}>
            <p className={styles.skills__block}>HTML</p>
            <p className={styles.skills__block}>CSS</p>
            <p className={styles.skills__block}>JS</p>
            <p className={styles.skills__block}>PHP</p>
          </div>
          <a href="https://aliprint.vercel.app/" className={styles.demo}>Демо</a>
        </div>

        <div className={styles.item}>
          <div className={styles.img}>
            <img src={img2} alt="" />
          </div>
          <h3 className={styles.subtitle}>Корпоративный сайт</h3>
          <div className={styles.skills}>
            <p className={styles.skills__block}>HTML</p>
            <p className={styles.skills__block}>CSS</p>
            <p className={styles.skills__block}>JS</p>
            <p className={styles.skills__block}>PHP</p>
          </div>
          <a href="https://surur-design.vercel.app/" className={styles.demo}>Демо</a>
        </div>

        <div className={styles.item}>
          <div className={styles.img}>
            <img src={img3} alt="" />
          </div>
          <h3 className={styles.subtitle}>Корпоративный сайт</h3>
          <div className={styles.skills}>
            <p className={styles.skills__block}>HTML</p>
            <p className={styles.skills__block}>CSS</p>
            <p className={styles.skills__block}>JS</p>
          </div>
          <a href="https://sneakers-beta.vercel.app/" className={styles.demo}>Демо</a>
        </div>

        <div className={styles.item}>
          <div className={styles.img}>
            <img src={img4} alt="" />
          </div>
          <h3 className={styles.subtitle}>Корпоративный сайт</h3>
          <div className={styles.skills}>
            <p className={styles.skills__block}>HTML</p>
            <p className={styles.skills__block}>CSS</p>
            <p className={styles.skills__block}>JS</p>
            <p className={styles.skills__block}>PHP</p>
          </div>
          <a href="https://bfts.uz/" className={styles.demo}>Демо</a>
        </div>

        <div className={styles.item}>
          <div className={styles.img}>
            <img src={img5} alt="" />
          </div>
          <h3 className={styles.subtitle}>Интернет магазин</h3>
          <div className={styles.skills}>
            <p className={styles.skills__block}>HTML</p>
            <p className={styles.skills__block}>CSS</p>
            <p className={styles.skills__block}>React js</p>
            <p className={styles.skills__block}>Redux</p>
            <p className={styles.skills__block}>TypeScript</p>
            <p className={styles.skills__block}>Axios</p>
          </div>
          <a href="#!" className={styles.demo}>Демо</a>
        </div>

        <div className={styles.item}>
          <div className={styles.img}>
            <img src={img6} alt="" />
          </div>
          <h3 className={styles.subtitle}>Интернет магазин</h3>
          <div className={styles.skills}>
            <p className={styles.skills__block}>HTML</p>
            <p className={styles.skills__block}>CSS</p>
            <p className={styles.skills__block}>React js</p>
            <p className={styles.skills__block}>Redux</p>
          </div>
          <a href="#!" className={styles.demo}>Демо</a>
        </div>

        <div className={styles.item}>
          <div className={styles.img}>
            <img src={img7} alt="" />
          </div>
          <h3 className={styles.subtitle}>Интернет магазин</h3>
          <div className={styles.skills}>
            <p className={styles.skills__block}>HTML</p>
            <p className={styles.skills__block}>CSS</p>
            <p className={styles.skills__block}>JS</p>
          </div>
          <a href="https://pet-shop-sigma.vercel.app/" className={styles.demo}>Демо</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
