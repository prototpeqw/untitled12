import axios from "axios";
import {baseURL} from "../compnents/baseURL";


const axiosService =axios.create({baseURL})




export {
    axiosService
}