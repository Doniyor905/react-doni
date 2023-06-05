import React from "react";
import styles from "./Nav.module.scss";
import logoSvg from "../../image/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [navBurger, setNavBurger] = React.useState(false);
  return (
    <div className={styles.root}>
      <div className={styles.nav__wrapper}>
        <div className={styles.nav__inner}>
          <a href="#!" className={styles.nav__logo}>
            <img src={logoSvg} alt="" />
          </a>
          <nav className={styles.nav}>
            <ul
              className={
                navBurger
                  ? [styles.nav__list, styles.active].join(" ")
                  : [styles.nav__list]
              }
            >
              <li>
                <a href="#home">Главная</a>
              </li>
              <li>
                <a href="#project">Проекты</a>
              </li>
              <li>
                <a href="#about">Обо мне</a>
              </li>
            </ul>
            <div
              onClick={() => setNavBurger(!navBurger)}
              className={styles.burger__menu}
            >
              {/* <div className={styles.burger__span}></div> */}
              {navBurger ? (
                <FontAwesomeIcon
                  size="xl"
                  icon={faXmark}
                  className={styles["burger__close"]}
                />
              ) : (
                <FontAwesomeIcon
                  size="xl"
                  icon={faBars}
                  className={styles["burger__bars"]}
                />
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
