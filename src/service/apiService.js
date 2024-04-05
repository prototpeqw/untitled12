import axios from "axios";
import {baseURL} from "../components/baseURL";

const apiService = axios.create({baseURL})



export {
    apiService
}