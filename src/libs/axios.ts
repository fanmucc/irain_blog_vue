import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'
import config from '../config'
const baseURL = config.baseURL.dev

interface Iqueue {
    [prop: string]: boolean
}


class HttpRequest {
    public baseUrl: string;
    public queue: Iqueue;
    constructor (baseURL: string) {
        this.baseUrl = baseURL;
        this.queue = {}
    }

    getInsideConfig () {
        const config = {
            baseURL: this.baseUrl,
            headers: {}
        }
        return config
    }

    destroy (url: string): void {
        delete this.queue[url];
        if (!Object.keys(this.queue).length) {
            // 当请求池为空时
        }
    }

    interceptors(instance: AxiosInstance, options: AxiosRequestConfig) {
        const url  = options.url || ''
        instance.interceptors.request.use(config => {
            if (!Object.keys(this.queue).length) {
                // Spin.show() // 不建议开启，因为界面不友好
            }
            this.queue[url] = true
            return config
        }, error => {
            return Promise.reject(error);
        })
        instance.interceptors.response.use(res => {
            this.destroy(url)
            return res
        }, error => {
            this.destroy(url)
            return Promise.reject(error);
        })
    }

    request( options: AxiosRequestConfig ) {
        console.log(options.url)
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance, options)
        return instance(options)
    }
}

export default HttpRequest;