import {ISiteGroupInfo, sp} from '@pnp/sp/presets/all'
import { useEffect, useState } from 'react';





export const getTools = (props) => {

    const [tools, settools] = useState([])

    useEffect(() => {
       if (props.length >0) {
        getData()
       }
    }, props.length)
    


    const getData=async()=>{
        let myTools :any[];
        const _tools = await sp.web.lists.getByTitle('Packers').items.select(
            'Title','Codigo','Proveedor/Title'
        ).expand('Proveedor').get();
        const filteredTools = _tools.filter((tool) =>
      props.some((element) => element.Title === tool.Proveedor.Title)
    );
    settools(filteredTools);
    }

  return tools
}
