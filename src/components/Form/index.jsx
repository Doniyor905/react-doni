import React from "react";
import styles from "./Form.module.scss";
import imgBtn from "../../image/imgBtn.png"

const Form = () => {
  return (
    <div className={styles.form}>
        <h2>Готов обсудить проект...</h2>
      <form>
            <input className={styles.form__name} placeholder="Имя" type="text" />
            <input className={styles.form__email} placeholder="Email" type="text" />
            <textarea className={styles.form__message} placeholder="Сообщение" type="text" />
            <button><img src={imgBtn} alt="" />Отправить</button>
      </form>
    </div>
  );
};

export default Form;
