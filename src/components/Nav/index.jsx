import React from 'react';
import styles from './Nav.module.scss';
import logoSvg from '../../image/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import i18n from '../../i18n';
import { withNamespaces } from 'react-i18next';

const Nav = ({ t }) => {
  const [languagePopup, setLanguagePopup] = React.useState(false);
  const [selected, setSelected] = React.useState(0);

  const language = ['eng', 'rus', 'turk'];

  const changeLanguage = (lng, i) => {
    i18n.changeLanguage(lng);
    setSelected(i);
    setLanguagePopup(false);
  };

  return (
    <div className={styles.root}>
      <div className={styles.nav__wrapper}>
        <div className={styles.nav__inner}>
          <a href="#!" className={styles.nav__logo}>
            <img src={logoSvg} alt="" />
          </a>
          <div className={styles.nav__block}>
            <nav className={styles.nav}>
              <ul className={styles.nav__list}>
                <li>
                  <a href="#home">{t('Nav Text Home')}</a>
                </li>
                <li>
                  <a href="#project">{t('Nav Text Projects')}</a>
                </li>
                <li>
                  <a href="#about">{t('Nav Text About')}</a>
                </li>
              </ul>
              <div className={styles.burger__menu}>
                {/* <div className={styles.burger__span}></div> */}

                {/* <FontAwesomeIcon size="xl" icon={faXmark} className={styles['burger__close']} /> */}
                <FontAwesomeIcon size="xl" icon={faBars} className={styles['burger__bars']} />
              </div>
            </nav>
            <div className={styles.language}>
              <div
                onClick={() => setLanguagePopup(!languagePopup)}
                className={styles.language__title}>
                {language[selected]}
                <FontAwesomeIcon icon={faCaretDown} className={styles['language__arrow']} />
              </div>
              <div
                className={
                  languagePopup
                    ? classNames(styles['language__dropdown'], styles['active'])
                    : styles['language__dropdown']
                }>
                <ul>
                  {language.map((lang, i) => (
                    <li
                      className={
                        selected === i
                          ? classNames(styles['lang__li'], styles['active'])
                          : styles['lang__li']
                      }
                      key={i}
                      onClick={() => changeLanguage(lang, i)}>
                      {lang}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(Nav);
