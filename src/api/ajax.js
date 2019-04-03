import axios from  'axios'

export default function ajax(url,data='',method='GET') {
  return new Promise((resolve,reject)=>{
    let Promise;
    if(method==='GET'){
      console.log(url);
      Promise=axios.get(url,data)
    }else if (method==='POST'){
      Promise=axios.post(url,data)
    }
    Promise
      .then(response=>{
        resolve(response.data)
        console.log('数据成功')
      })
      .catch(error=>{
        reject('---网络不稳定：'+ error.message)
      })
  })
}
