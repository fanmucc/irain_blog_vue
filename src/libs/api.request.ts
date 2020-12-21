import HttpRequest from './axios'
import config from '../config'

const baseURL = process.env.NODE_ENV === 'production' ? config.baseURL.pro : config.baseURL.dev;
const axios = new HttpRequest(baseURL);

export default axios