import VueRouter from 'vue-router'
import Login from './components/login/Login.vue'
import ConfigPage from './components/config_page/ConfigPage.vue'
 

const routes = [
    {path:'/', component:Login},
    {path:'/config', component:ConfigPage}

]
    
 
const router = new VueRouter({
    mode:'history',
    routes
})

export default router