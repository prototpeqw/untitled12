import {apiService} from "./apiService";
import {urls} from "../components/baseURL";

const episodeService = {
    getALl:(pages = '1')=>apiService.get(urls.episodes, {params:{pages}})
}




export {
    episodeService
}