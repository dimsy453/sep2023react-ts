import axios from "axios";

import {baseURL} from "../constants";

const apiServices = axios.create({baseURL})

export {
    apiServices
}