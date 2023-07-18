import * as React from 'react'
import {CiEdit}  from 'react-icons/ci'
import { Item } from './Item'
import styles from './MisRemitos.module.scss'
import { AiFillPlusCircle } from 'react-icons/ai'


interface Iprops{
   remitos:any[]
   changeScreen: any;
}

export const MisRemitos: React.FunctionComponentFactory<Iprops> = (props) => {

  const handleChange =()=>{
    props.changeScreen();
  }
  return (
   <div>
    <div>
    <div  className={styles.addRemito} onClick={handleChange}>
              <AiFillPlusCircle color="#386304" size={24} />
              <span>Agregar nuevo remito</span>
            </div>
    </div>
     <div className={styles['grid-container']}>
        
       
        <div className={styles['encabezado-container']}>
        <div className={styles.encabezado}>Número remito</div>
        <div className={styles.encabezado}>Fecha</div>
        <div className={styles.encabezado}>Acción</div>
      </div>

       {
        props.remitos.map(item=>{
            return <div className={styles['grid-row']}><Item remito={item}/></div>
        })
       }
    </div>
   </div>
  )
}
