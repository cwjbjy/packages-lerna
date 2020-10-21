import view from './cwjMenu/index.vue'

let cwjMenu = {}

cwjMenu.install = function(Vue){
    Vue.component(view.name,view)
}

export default cwjMenu