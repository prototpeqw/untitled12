import {axiosService} from "./axiosService";
import {urls} from "../compnents/baseURL";

const episodeService = {
    getAll: (pages) => axiosService.get(urls.episode.base,{params:{pages}})

}
export {
    episodeService
}