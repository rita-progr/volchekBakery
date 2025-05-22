import axios from "axios";

const baseURl = ''

export const $api = axios.create({
    baseURL: baseURl,
})