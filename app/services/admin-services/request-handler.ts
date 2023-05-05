
const api = process.env.API || 'http://localhost:3000/api/'

export default class RequestHandler {
    url: string
    api: string | undefined
    
    constructor(url: string){
        console.log('url', url)
        this.url = url
        this.api = api 
    }
  
    get(){
        return new Promise((resolve, reject) => {
             fetch(`${this.api}${this.url}`, {
                method: 'GET'
             })
             .then(async res => {
                if(res.ok) {
                    const data = await res.json()
                    resolve(data)
                }
                reject(res)
                })
                .catch(error => {
                    reject(error)
                });
        })
    }
}