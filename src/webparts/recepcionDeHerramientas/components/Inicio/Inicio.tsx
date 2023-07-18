import * as React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Formulario } from '../Formulario/Formulario';
import { getUser } from '../../utils/getUser';
import { MisRemitos } from '../MisRemitos/MisRemitos';
import { useState } from 'react';


export const Inicio = () => {
    const { user, groups, siteGroups, tools, Proveedor,remitos,remitosProveedor } = getUser();
    const [newRemito, setNewRemito] = useState(false)


    const viewScreen =()=>{
        setNewRemito(!newRemito)
    }
  return (
    <Tabs>
    <TabList>
      <Tab>Reparaciones</Tab>
      <Tab>Remitos</Tab>
    </TabList>

    <TabPanel>
      <h2>Reparaciones</h2>
    </TabPanel>
    <TabPanel>
        {
            newRemito? <Formulario user={user} tools={tools} Proveedor={Proveedor} remitos={remitos} screenView={viewScreen}/>: <MisRemitos remitos={remitosProveedor} changeScreen={viewScreen}/>
        }
    </TabPanel>
  </Tabs>
  )
}
