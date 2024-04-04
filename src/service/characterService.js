import {axiosService} from "./axiosService";
import {urls} from "../compnents/baseURL";

const CharacterService = {
    getByIDs:(ids)=>axiosService.get(urls.character.byID(ids))
}


export {
    CharacterService
}