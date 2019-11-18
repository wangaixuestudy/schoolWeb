import ajax from './ajax'

//配置代理
const BASE_URL = '/api';
export const getHeadData = () => ajax(`${BASE_URL}/head`);
export const getAllCategoryData = () => ajax(`${BASE_URL}/homePage`);
//获取文章数据
export const getArticleData = (cate_id,article_id) => ajax(`${BASE_URL}/article`,{cate_id,article_id});
//注册
export const register = (data,type) => ajax(`${BASE_URL}/register`,data,type);
//登录
export const login = (data,type) => ajax(`${BASE_URL}/login`,data,type);
//获取标题数数据
export const getListDataByCateId = (cate_id) => ajax(`${BASE_URL}/admin/listPage/${cate_id}`);
//获取用户信息
export const getUserInfo = () => ajax(`${BASE_URL}/userInfo`);
//退出
export const logout = () => ajax(`${BASE_URL}/logout`);
//添加文章
export const addArticle = (data) => ajax(`${BASE_URL}/admin/addArticle`,data,"POST");
export const removeArticle = (cate_id,article_id) => ajax(`${BASE_URL}/admin/removeArticle`,{cate_id,article_id})