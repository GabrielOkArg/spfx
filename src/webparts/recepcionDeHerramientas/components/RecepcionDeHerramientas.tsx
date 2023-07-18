import * as React from 'react';

import { IRecepcionDeHerramientasProps } from './IRecepcionDeHerramientasProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Formulario } from './Formulario/Formulario';
import { Inicio } from './Inicio/Inicio';

export default class RecepcionDeHerramientas extends React.Component<IRecepcionDeHerramientasProps, {}> {
  public render(): React.ReactElement<IRecepcionDeHerramientasProps> {
    return (
      <div >
        <Inicio/>
      </div>
    );
  }
}
