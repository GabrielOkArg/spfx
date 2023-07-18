

import{sp} from '@pnp/sp/presets/all';





export const saveTools = () => {

    const saveData =async(elemento)=>{
        elemento.items.forEach(async element => {
           let registro = {
            NumeroRemito: elemento.NumeroRemito,
            TipodeHerramienta:element.tipoHerramienta,
            Cantidad:element.cantidad,
            Proveedor: elemento.Proveedor,
            Fecha:elemento.Fecha,
           }
            const sendItem = await sp.web.lists.getByTitle("Recepcion").items.add(registro)
        });
    }


    return saveData

}
