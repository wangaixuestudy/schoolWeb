
import axios from 'axios'

export default function ajax(url,data={},type='GET') {
    return new Promise((resolve,reject)=>{
        let promise;
        if(type === 'GET'){
            //提取json中的键
            let dataStr = '';
            // dataStr = querystring.stringify(data);
            // url = url + data;
            Object.keys(data).forEach(key=>{
                dataStr += key + '=' + data[key] + '&';
            })
            if(dataStr != ''){
                url = url + '?' + dataStr.substring(0,dataStr.lastIndexOf('&'))
            }
            promise = axios.get(url);
        }else {
            promise = axios.post(url,data)
        }
        promise.then(res=>{
            resolve(res.data)
        }).catch(err=>{
            reject(err)
        })
    })
}