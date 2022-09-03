<template>
    <div class="books__header">
        <h2 class="books__title">
            <router-link to="" class="text-white">Bibliothèque</router-link>
        </h2>
        <p class="books__msg">a book library application</p>

        <div class="books__meta">
            <button class="meta__link">
                <router-link to="/author/" class="link-text">Create Author</router-link>
            </button>
            <button class="meta__link">
                <router-link to="/book/" class="link-text">Create Book</router-link>
            </button>
        </div>

        <div class="books__meta">
            <button class="meta__link">
                <router-link to="/authors/" class="link-text">Get Authors</router-link>
            </button>

            <button class="meta__link">
                <router-link to="/books/" class="link-text">Get Books</router-link>
            </button>
        </div>
    </div>

    <div class="books__library container">

        <!-- Component Views -->
        <router-view />

    </div>
</template>


<script>
export default {
    name: 'BookHome',
}
</script>

<style scoped>
div.books__header {
    padding-top: 5rem;
}

h2.books__title {
    font-size: 42px;
    font-weight: 600;
}

p.books__msg {
    font-size: 22px;
    font-style: italic;
}

div.book__meta,
div.books__meta {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

a.book__more,
button.meta__link {
    color: #080707;
    background-color: #525252;
    padding: 6px 15px;
    border-radius: 5px;
    margin-right: 15px;
}

button.meta__link {
    border-color: transparent;
}

a.link-text {
    color: #080707;
}
</style>