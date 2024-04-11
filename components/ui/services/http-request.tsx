import apiClinet from "./api-clinet";

interface Entity {
    id:number
}
class HttpService{
    
    endpoint:string
    
    constructor(endpoint:string){
        this.endpoint = endpoint
    }
    getAll<T>(){
        const controller = new AbortController();
       const request = apiClinet.get<T[]>(this.endpoint, {
            signal: controller.signal,
          });
          return {request, cancel:()=>controller.abort()}
    }

    delete<T>(entity: T){
        return apiClinet.delete( this.endpoint + "/" + entity)
    }
    create<T>(entity:T){
        return apiClinet.post(this.endpoint, entity)
    }
    update<T extends Entity>(entity: T){
        apiClinet.patch(this.endpoint + "/" + entity.id, entity)
    }
}

const Create = (endpoint:string)=> new HttpService(endpoint)

export default Create