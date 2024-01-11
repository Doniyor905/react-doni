import React from 'react';
import { withNamespaces } from 'react-i18next';
import styles from './Header.module.scss';
import stickerLogo from '../../image/sticker.png';
import helloImg from '../../image/hello.png';
import tiktokImg from '../../image/tiktok.svg';
import instagram from '../../image/instagram.svg';
import telegram from '../../image/telegram.svg';
import github from '../../image/github.svg';

const Header = ({ t }) => {
  return (
    <div className={styles.root} id="home">
      <div className={styles.header__wrapper}>
        <div className={styles.header__img}>
          <img src={stickerLogo} alt="" />
        </div>
        <div className={styles.content}>
          <h1>
            {t('Header Text Hello')} <img src={helloImg} alt="" />
          </h1>
          <h2>
            <span>{t('I am a front-end')}</span> {t('Header Text About')}
          </h2>
          <div className={styles.socials}>
            <a href="https://www.instagram.com/doniyor_web/">
              <img src={instagram} alt="" />
            </a>
            <a href="https://t.me/doniyor_web">
              <img src={telegram} alt="" />
            </a>
            <a href="https://github.com/Doniyor905">
              <img src={github} alt="" />
            </a>
            <a href="https://www.tiktok.com/@doniyor_web?is_from_webapp=1&sender_device=pc">
              <img src={tiktokImg} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(Header);
