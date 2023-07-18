import * as React from 'react'
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import styles from './Item.module.scss';
interface Iprops {
  handleDelete: any;
  id: number;
  handleDataChange: any;
  tools:any[]
}

export const Item: React.FunctionComponent<Iprops> = (props) => {
  const { handleDelete, id, handleDataChange } = props;
  const [herramienta, setHerramienta] = useState('1');
  const [cantidad, setCantidad] = useState(0);

  const thisDelete = () => {
    handleDelete(id, herramienta, cantidad);
  };

  const handleChangeHerramienta = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setHerramienta(value);
    handleDataChange(id, value, cantidad);
  };

  const handleCantidadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setCantidad(value);
    handleDataChange(id, herramienta, value);
  };

  return (
    <div
      className={`${styles.itemrow} animate__animated animate__fadeInLeft`}
    >
      <div>
        <span className={styles.partrow}>Tipo de herramienta</span>
        <select name="" id="" value={herramienta} onChange={handleChangeHerramienta} required>
          <option selected value="">Seleccione una  Herramienta</option>
          {
            props.tools.map((item,i)=>{
                return  <option value={item.Title}>{item.Title}</option>
            })
          }
        </select>
      </div>
      <div>
        <span className={styles.partrow}>Cantidad</span>
        <input type="number" placeholder="0000" value={cantidad} onChange={handleCantidadChange} required min={1}/>
      </div>
      <div>
        <span onClick={thisDelete} style={{cursor:'pointer'}}>
          <IoClose 
            size={25}
          />
        </span>
      </div>
    </div>
  );
};