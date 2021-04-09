import HttpClient from '../src/index'

const FetchInstance = new HttpClient.FetchClient({token:{type:'local',from:'token',to:'Authorization'}})

class TestClass{
    constructor(){
        (document.querySelector('#getFetch') as HTMLButtonElement).onclick=function(){
            localStorage.setItem('token','Basic')
            FetchInstance.get({
                url:'http://127.0.0.1:9000/api/contactList'
            })
        }
    }
}

new TestClass()