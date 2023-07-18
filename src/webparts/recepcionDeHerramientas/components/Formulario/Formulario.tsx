import * as React from "react";
import { getUser } from "../../utils/getUser";
import { Header } from "../Header/Header";
import { useState } from "react";
import { Item } from "../Item/Item";
import { AiFillPlusCircle } from "react-icons/ai";
import { saveTools } from "../../utils/saveTools";
import styles from "./Formulario.module.scss";
import 'animate.css';
import '../styles.css'
import { ISiteUser } from "@pnp/sp/site-users";
import { ISiteGroupInfo } from "@pnp/sp/site-groups";
import {IoArrowBackOutline} from 'react-icons/io5';
import { Modal } from "../Modal/Modal";


interface Iprops{
  user:ISiteUser,
  tools : any[],
  Proveedor:string,
  remitos:any[],
  screenView:any
}

export const Formulario: React.FunctionComponent<Iprops> = (props) => {

  const [clickeado, setClickeado] = useState(0);
  const [componentList, setComponentList] = useState([]);
  const [valoresItems, setValoresItems] = useState([]);
  const [numRemito, setnumRemito] = useState("");
  const [Fecha, setFecha] = useState<Date>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mensaje, setMensaje] = useState("")
  const saveData = saveTools();

  const newTool = () => {
    setClickeado(clickeado + 1);
    const newItem = { id: clickeado, tipoHerramienta: "", cantidad: 0 };
    setComponentList([
      ...componentList,
      <Item
        key={clickeado}
        handleDelete={deleteItem}
        id={clickeado}
        handleDataChange={updateData}
        tools={props.tools}
      />,
    ]);
    setValoresItems([...valoresItems, newItem]);
  };

  const deleteItem = (id, herramienta, cantidad) => {
    setComponentList((prevState) => {
      // Tomo el estado previo para que no use el estado del item seleccionado
      const newState = prevState.filter((x) => x.props.id !== id);
      return newState;
    });
    setValoresItems((prevValores) => {
      // Actualizo el estado de valoresItems sin el item seleccionado
      const nuevosValores = prevValores.filter((item) => item.id !== id);
      return nuevosValores;
    });
  };


  const updateData = (id, herramienta, cantidad) => {
    setValoresItems((prevValores) => {
      // Actualizo el estado de valoresItems con los nuevos valores
      const nuevosValores = prevValores.map((item) => {
        if (item.id === id) {
          return { ...item, tipoHerramienta: herramienta, cantidad: cantidad };
        }
        return item;
      });
      return nuevosValores;
    });
  };

  const saveRegistro = (e) => {
    e.preventDefault();
    let Registro = {
      NumeroRemito: numRemito,
      Fecha: Fecha,
      items: valoresItems,
      Proveedor: props.Proveedor,
    };
    if (componentList.length >0) {
      setValoresItems([]);
    setComponentList([]);
    saveData(Registro).then(()=>{
      setMensaje("Se guardo correctamente el remito")
      setIsModalOpen(!isModalOpen)
    });
    }else{
      setMensaje("Tiene que tener como minimo una herramienta cargada");
      setIsModalOpen(!isModalOpen)
    }
    
    
  };

  const handleHeaderDataChange = (data) => {
    data.numeroRemito && setnumRemito(data.numeroRemito);
    data.fecha && setFecha(data.fecha);
  };


  const handleChangeView=()=>{
    props.screenView();
  }

  const handleCloseModal =()=>{
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div >
      <div className={styles.containerHeader}>
        <h3>Bienvenido {props.Proveedor}</h3>
        <div className={styles.backFormilarios} onClick={handleChangeView}>
          <IoArrowBackOutline size={24}/>
          <span>Volver a mis remitos</span>
        </div>

      </div>
      <div>
        <form onSubmit={saveRegistro}>
          <div>
            <Header onHeaderDataChange={handleHeaderDataChange} />
          </div>
          <div>
            {componentList}
            <div className={styles.addrow} onClick={newTool}>
              <AiFillPlusCircle color="#386304" size={24} />
              <span>Agregar nueva herramienta</span>
            </div>
          </div>
          <div className={styles.continerbuton}>
            <button type="submit" className={styles.butonsave}>Guardar</button>
          </div>
        </form>
      </div>
      <Modal isOpen={false} message={mensaje} onClose={handleCloseModal}/>
    </div>
  );
};
