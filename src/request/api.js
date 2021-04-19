// 接口地址
import { get, post } from './http.js';
// get格式
export const homeData = g => get('/api/user', g); //获取home列表数据
// post格式
export const postData = g => post('', g); 