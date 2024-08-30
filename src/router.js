import { createRouter as createVRouter, createWebHistory } from 'vue-router';

import Home from './components/Home.vue';

export const pages = {
    '/': [ Home, "Home" ],
};

export function createRouter() {
    const routes = [];
    for (const i in pages) routes.push({ path: i, component: pages[i][0] });
    
    return createVRouter({
        history: createWebHistory(),
        routes,
    });
}