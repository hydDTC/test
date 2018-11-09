import axios from 'axios'
import * as qs from 'querystring';
import Loading from '../components/loading/Loading'

let instance = axios.create({
    baseURL: 'http://192.168.100.163:8190', // api的base_url
    timeout: 15000 // 请求超时时间
});

instance.interceptors.request.use(
    request => {
      if(window.token){
        request.headers.token = window.token
      }
      Loading.open()
      return request;
    },
    error => {
      Loading.close()
      return Promise.reject(error)
    }
);

instance.interceptors.response.use(
    response => {
      Loading.close()
      return response.data
    },
    error => {
      Loading.close()
      return Promise.reject(error)
    }
);

export function get(url, body = {}, config = {}) {
    config.params = body;
    return instance.get(url, config)
}

export function postJson(url, body = {}, config = {}) {
    return instance.post(url, body, config)
}

export function postForm(url, body = {}, config = {}) {
    return instance.post(url, qs.stringify(body), config)
}

export function postFormData(url, body = {}, config = {}) {
    let f = new FormData()
    Object.entries(body).forEach(data => {
        f.append(...data);
    })
    return instance.post(url, f, config)
}


