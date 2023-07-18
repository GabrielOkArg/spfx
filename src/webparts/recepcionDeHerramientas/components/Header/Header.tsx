import * as React from "react";
import styles from './Header.module.scss'

export const Header = ({ onHeaderDataChange }) => {


    const handleNumeroRemitoChange = (event) => {
      const numeroRemito = event.target.value;
      onHeaderDataChange({ numeroRemito });
    };
  
    const handleFechaChange = (event) => {
      const fecha = event.target.value;
      onHeaderDataChange({ fecha });
    };



    return (
      <div className={styles.header}>
        <div>
          <span>Número de Remito</span>
          <input type="text" placeholder="Número de remito" onChange={handleNumeroRemitoChange} required />
        </div>
        <div>
          <span>Fecha</span>
          <input type="date" onChange={handleFechaChange} required />
        </div>
      </div>
    );
  };