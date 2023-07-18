import { ISiteGroupInfo } from "@pnp/sp/site-groups";
import { ISiteUser } from "@pnp/sp/site-users";

export interface User{
    user:ISiteUser,
    groups: ISiteGroupInfo[]

}