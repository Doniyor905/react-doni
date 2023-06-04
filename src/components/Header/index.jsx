import React from "react";

import styles from "./Header.module.scss";

import stickerLogo from "../../image/sticker.png";
import helloImg from "../../image/hello.png";
import tiktokImg from "../../image/tiktok.svg";
import instagram from "../../image/instagram.svg";
import telegram from "../../image/telegram.svg";
import github from "../../image/github.svg";

const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__img}>
          <img src={stickerLogo} alt="" />
        </div>
        <div className={styles.content}>
          <h1>
            Привет <img src={helloImg} alt="" />
          </h1>
          <h2>
            <span>Я фронтенд-разработчик и веб дизайнер</span> Меня зовут Юсупов
            Дониер и я делаю сайты для людей и компаний
          </h2>
          <div className={styles.socials}>
            <a href="#!">
              <img src={instagram} alt="" />
            </a>
            <a href="#!">
              <img src={telegram} alt="" />
            </a>
            <a href="#!">
              <img src={github} alt="" />
            </a>
            <a href="#!">
              <img src={tiktokImg} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
