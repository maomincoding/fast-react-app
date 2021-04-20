// 接口地址
import { get } from './http';
// get格式
export const homeData = (g) => get('/api/user', g);
export const getList = (g) => get('/api/user/list', g);
