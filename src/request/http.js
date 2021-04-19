// axios配置
import axios from 'axios';
// 环境的切换
if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = '/' // 开发环境
} else if (process.env.NODE_ENV === 'debug') {
    axios.defaults.baseURL = '' // 调试环境
} else if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = '/' // 生产环境
}
axios.defaults.timeout = 3000;

// 请求拦截器
axios.interceptors.request.use(
    config => {
        if (config.isUpload) {
            config.headers = {
                'Content-Type': 'multipart/form-data'
            } // 根据参数是否启用form-data方式
            return config;
        } else {
            config.headers = {
                'Content-Type': 'application/json'
            }
            return config;
        }
    },
    error => {
        return Promise.error(error)
    })

// 响应拦截器
axios.interceptors.response.use(
    // 服务码是200的情况
    response => {
        if (response.status === 200) {
            switch (response.code) {
                // 未登录
                case 3:
                    alert('未登录');
                    // 清除登录状态，返回首页
                    break;
                // token过期
                case 5:
                    alert('登录过期，请重新登录');
                    // 清除登录状态，返回首页
                    break;
                default:
                    break;
            }
            return Promise.resolve(response);
        } else {
            return Promise.reject(response)
        }
    },
    // 服务器状态码不是200的情况
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                // 404请求不存在
                case 404:
                    alert('网络请求不存在');
                    break;
                // 其他错误，直接抛出错误提示
                default:
                    alert('error.response.data.message');
            }
            return Promise.reject(error.response)
        }
    }
)

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params, config = {
    add: ''
}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }, config).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params, config = {
    isUpload: false
}) {
    return new Promise((resolve, reject) => {
        axios.post(url, params, config)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.data)
            })
    })
}