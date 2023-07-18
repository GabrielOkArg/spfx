import { ISiteGroupInfo, ISiteUser, sp } from '@pnp/sp/presets/all';
import { useEffect, useState } from 'react';
import { User } from '../interfaces/User';

export const getUser = () => {
  const [user, setUser] = useState<ISiteUser | null>(null);
  const [groups, setGroups] = useState<ISiteGroupInfo[]>([]);
  const [siteGroups, setSiteGroups] = useState<ISiteGroupInfo[]>([]);
  const [tools, setTools] = useState<any[]>([]);
  const [Proveedor, setProveedor] = useState('');
  const [remitos, setRemitos] = useState([]);
  const [remitosProveedor, setRemitosProveedor] = useState([])
  let aux: any[] =[]
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const _user: ISiteUser = await sp.web.currentUser();
    const _groups: ISiteGroupInfo[] = await sp.web.currentUser.groups();
    const _siteGroups: ISiteGroupInfo[] = await sp.web.siteGroups();
    const _tools = await sp.web.lists
      .getByTitle('Packers')
      .items.select('Title', 'Codigo', 'Proveedor/Title')
      .expand('Proveedor')
      .get();
      const items = await sp.web.lists.getByTitle('Recepcion').items.getAll();
    setUser(_user);
    setGroups(
      _groups.filter((x) => {
        const groupIds = _siteGroups.map((group) => group.Id);
        return groupIds.includes(x.Id);
      })
    );
    setSiteGroups(_siteGroups);
    setTools(
        ()=>{
            _groups.forEach(element => {
                _tools.forEach(tool => {
                    if (element.Title === tool.Proveedor.Title) {
                        aux.push(tool);
                        setProveedor(tool.Proveedor.Title)
                    }
                });
            });
            return aux
        }
    )
    setRemitos(
      ()=>{
        aux=[];
        _groups.forEach(element => {
          items.forEach(tool => {
              if (element.Title === tool.Proveedor) {
                  aux.push(tool);
              }
          });
      });
      return aux
      }
    )
    setRemitosProveedor(()=>{
      aux =[];
      items.forEach(element =>{
        _siteGroups.forEach(tool => {
          if (element.Proveedor === tool.Title) {
              aux.push(element);
          }
      });
      })
      return aux;
    })
   
  };

  return {user, groups, siteGroups, tools, Proveedor,remitos, remitosProveedor};
};
