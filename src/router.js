import { createWebHistory, createRouter } from "vue-router";
const routes = [
    {
        path: "/",
        alias: "/books",
        name: "books",
        component: () => import("./components/GetBooks")
    },
    {
        path: "/authors/",
        name: "authors",
        component: () => import("./components/GetBooks")
    },
    {
        path: "/book/:id/",
        name: "book-details",
        component: () => import("./components/")
    },
    {
        path: "/author/:id/",
        name: "author-details",
        component: () => import("./components/")
    },
    {
        path: "/author/",
        name: "author",
        component: () => import("./components/CreateBook.vue")
    },
    {
        path: "/book/",
        name: "book",
        component: () => import("./components/CreateBook.vue")
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;