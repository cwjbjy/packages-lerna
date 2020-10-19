import view from './cwjTable/index.vue'

let cwjTable = {};

cwjTable.install = function(Vue){
    Vue.component(view.name,view)
}

export default cwjTable
