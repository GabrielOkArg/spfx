import * as React from "react";
import { CiEdit } from "react-icons/ci";
import styles from "./MisRemitos.module.scss";

interface Iprops {
  remito: any;
}

export const Item: React.FunctionComponent<Iprops> = (props) => {
  const formatFecha = (fechaOriginal) => {
    const fecha = new Date(fechaOriginal);

    const dia = fecha.getDate().toString().padStart(2, "0");
    const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
    const anio = fecha.getFullYear().toString();
    return `${dia}/${mes}/${anio}`;
  };
  return (
    <>
        
      <div className={styles.item}>
        <span>{props.remito.NumeroRemito}</span>
      </div>
      <div className={styles.item}>
        <span>{formatFecha(props.remito.Fecha)}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.editbutton}>
          <CiEdit 
            size={24}
          />
        </span>
      </div>
    </>
  );
};
