import HttpClient from '../src/index'
import AuthEnum from '../src/_Auth'
import Cookie from 'js-cookie'
const FetchInstance = new HttpClient.FetchClient({token:{type:'cookie',from:'token',to:'Authorization'}})
const AxiosInstance = new HttpClient.AxiosClient({token:{type:'cookie',from:'token',to:'Authorization'}})
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
        };
        (document.querySelector('#postFetchjson') as HTMLButtonElement).onclick=function(){
            FetchInstance.post({
                url:'http://127.0.0.1:9000/api/contact/new/json',
                data:{
                    name:'post',
                    tel:'123'
                }
            })
        };
        (document.querySelector('#deleteFetch') as HTMLButtonElement).onclick=function(){
            FetchInstance.delete({
                url:'http://127.0.0.1:9000/api/contact',
                data:{
                    id:2
                }
            })
        };
        (document.querySelector('#putFetch') as HTMLButtonElement).onclick=function(){
            FetchInstance.put({
                url:'http://127.0.0.1:9000/api/contact/edit',
                data:{
                    id:1,
                    name:'put',
                    tel:'12344555'
                }
            })
        };
        (document.querySelector('#getAxios') as HTMLButtonElement).onclick=function(){
            AxiosInstance.get({
                url:'http://127.0.0.1:9000/api/contactList',
                auth:AuthEnum.ADMIN
            })
        };
        (document.querySelector('#postAxiosFormData') as HTMLButtonElement).onclick=function(){
            AxiosInstance.post({
                url:'http://127.0.0.1:9000/api/contact/new/form',
                data:userForm
            })
        };
        (document.querySelector('#deleteAxios') as HTMLButtonElement).onclick=function(){
            AxiosInstance.delete({
                url:'http://127.0.0.1:9000/api/contact',
                data:{
                    id:1
                }
            })
        };
        (document.querySelector('#postAxiosjson') as HTMLButtonElement).onclick=function(){
            AxiosInstance.post({
                url:'http://127.0.0.1:9000/api/contact/new/json',
                data:{
                    name:'post',
                    tel:'123'
                }
            })
        };
    }
}

new TestClass()