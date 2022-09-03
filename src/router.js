import { createWebHistory, createRouter } from "vue-router";
const routes = [
    {
        path: "/",
        alias: "/",
        name: "home",
        component: () => import("./components/BookHome")
    },
    {
        path: "/books/",
        alias: "/books/",
        name: "books",
        component: () => import("./components/GetBooks")
    },
    {
        path: "/authors/",
        alias: "/authors/",
        name: "authors",
        component: () => import("./components/GetAuthors")
    },
    {
        path: "/book/:id/",
        alias: "/book/:id/",
        name: "book-details",
        component: () => import("./components/DetailUpdateBook")
    },
    {
        path: "/author/:id/",
        alias: "/author/:id/",
        name: "author-details",
        component: () => import("./components/DetailUpdateAuthor")
    },
    {
        path: "/author/",
        alias: "/author/",
        name: "author",
        component: () => import("./components/CreateAuthor")
    },
    {
        path: "/book/",
        name: "book",
        component: () => import("./components/CreateBook")
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;