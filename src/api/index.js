import ajax from './ajax'

//配置代理
const BASE_URL = '/api';
export const getHeadData = () => ajax(`${BASE_URL}/head`);
export const getHomePageData = () => ajax(`${BASE_URL}/homePage`);
export const getListPageData = (host) => ajax(`${BASE_URL}/listPage`,host);
export const register = (data,type) => ajax(`${BASE_URL}/register`,data,type);
export const login = (data,type) => ajax(`${BASE_URL}/login`,data,type);

