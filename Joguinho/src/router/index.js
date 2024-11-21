import {createWebHistory, createRouter} from 'vue-router'
import Cadastro from "../views/Cadastro.vue"
import Tabuleiro from '@/views/Tabuleiro.vue';

const routes = [
    {path: '/',
        name: 'Cadastro',
        component: Cadastro,
    },
    {path: '/tabuleiro',
        name: 'Tabuleiro',
        component: Tabuleiro,
    },
];


const router = createRouter ({
    history: createWebHistory(),
    routes,
});

export default router;