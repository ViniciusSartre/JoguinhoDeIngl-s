import {createWebHistory, createRouter} from 'vue-router'
import Cadastro from "../views/Cadastro.vue"

const routes = [
    {path: '/',
        name: 'Cadastro',
        component: Cadastro,
    },
];

const router = createRouter ({
    history: createWebHistory(),
    routes,
});

export default router;