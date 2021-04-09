import HttpClient from '../src/index'
import AuthEnum from '../src/_Auth'
import Cookie from 'js-cookie'
const FetchInstance = new HttpClient.FetchClient({token:{type:'cookie',from:'token',to:'Authorization'}})

class TestClass{
    constructor(){
        const userForm = new FormData();
        userForm.append('name','lerna');
        userForm.append('tel','1835');

        (document.querySelector('#getFetch') as HTMLButtonElement).onclick=function(){
            Cookie.set('token','Basic')
            FetchInstance.get({
                url:'http://127.0.0.1:9000/api/contactList',
                auth:AuthEnum.ADMIN
            })
        };
        (document.querySelector('#postFetchFormData') as HTMLButtonElement).onclick=function(){
            FetchInstance.post({
                url:'http://127.0.0.1:9000/api/contact/new/form',
                data:userForm
            })
        }
    }
}

new TestClass()