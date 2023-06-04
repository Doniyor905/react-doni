import React from "react";
import styles from "./Nav.module.scss";
import logoSvg from "../../image/logo.svg";

const Nav = () => {
  return (
    <div className={styles.root}>
      <a href="#!">
        <img src={logoSvg} alt="" />
      </a>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li>
            <a href="#!">Главная</a>
          </li>
          <li>
            <a href="#!">Проекты</a>
          </li>
          <li>
            <a href="#!">Обо мне</a>
          </li>
          <li>
            <a href="#!">Связаться</a>
          </li>
        </ul>
        <div className={styles.burger__menu}>
          <div className={styles.burger__span}></div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
