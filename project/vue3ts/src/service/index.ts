import HttpClient from 'service'

const FetchInstance = new HttpClient.FetchClient({token:{type:'local',from:'token',to:'Authorization'}})

const API = {
    getContactList:()=> FetchInstance.get({
        url:'http://127.0.0.1:9000/api/contactList',
    })
}

export default API

