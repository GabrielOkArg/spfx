import * as React from "react";
import styles from "./Modal.module.scss";

interface Iprops {
  isOpen: boolean;
  message: string;
  onClose: any;
}

export const Modal: React.FunctionComponent<Iprops> = (props) => {
  if (!props.isOpen) return null;

  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles.modal}>
        <div className={styles["modal-content"]}>
          <span>{props.message}</span>
        </div>
        <div>
          <button className={styles["modal-close-btn"]} onClick={props.onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
