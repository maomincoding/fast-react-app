// axios配置
import axios from 'axios';
// 环境的切换
if (process.env.NODE_ENV === 'development') {
	axios.defaults.baseURL = 'http://127.0.0.1:7788/'; // 开发环境
} else if (process.env.NODE_ENV === 'debug') {
	axios.defaults.baseURL = ''; // 调试环境
} else if (process.env.NODE_ENV === 'production') {
	axios.defaults.baseURL = '/'; // 生产环境
}
axios.defaults.timeout = 3000;

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(
	url,
	params,
	config = {
		add: '',
	}
) {
	return new Promise((resolve, reject) => {
		axios
			.get(
				url,
				{
					params,
				},
				config
			)
			.then((res) => {
				resolve(res.data);
			})
			.catch((err) => {
				reject(err.data);
			});
	});
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(
	url,
	params,
	config = {
		isUpload: false,
	}
) {
	return new Promise((resolve, reject) => {
		axios
			.post(url, params, config)
			.then((res) => {
				resolve(res.data);
			})
			.catch((err) => {
				reject(err.data);
			});
	});
}
