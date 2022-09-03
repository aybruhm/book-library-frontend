<template>
    <div class="books__header">
        <h2 class="books__title">Books</h2>
    </div>

    <div class="books__library container">

        <!-- List of Books -->
        <ul class="books">
            <li class="book card" v-for="book in books" :key="book.id">
                <h4 class="book__name">{{ book.name }}</h4>
                <p class="text-muted">{{ book.isbn }}</p>
                <h6 class="book__isbn">
                    <router-link :to="`/author/${book.author.id}/`" class="book__author">
                        {{ book.author.first_name }} {{ book.author.last_name }}
                    </router-link>
                </h6>

                <div class="book__meta">
                    <router-link :to="`/book/${book.id}/`" class="book__more">View / Update</router-link>
                </div>
            </li>
        </ul>
    </div>
</template>


<script>

import axios from "axios";

const baseURL = "https://books-library.up.railway.app/api/v1/";

export default {
    name: 'GetBooks',
    data() {
        return {
            books: []
        }
    },
    methods: {
        async fetchBooks() {
            try {
                const res = await axios.get(`${baseURL}books/`);
                this.books = res.data.data || [];
            } catch (e) {
                console.log("Err: ", e);
            }
        }
    },
    mounted() {
        this.fetchBooks();
    },
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

div.books__library {
    text-align: center;
}

ul.books {
    list-style: none;
    display: flex;
    margin-top: 60px;
    max-width: 100%;
    flex-wrap: wrap;
    margin-left: 0px;
    padding-left: 0%;
}

a.book__author {
    color: #575252;
    text-decoration: underline;
}

a.link-text {
    color: #080707;
}

li.book {
    padding: 20px;
    justify-content: center;
    flex-wrap: wrap;
    width: 30%;
    margin: auto;
    margin-bottom: 30px;
    background-color: #08070736;
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


a.book__more:last-child {
    margin-right: 0px;
}

@media screen and (max-width: 789px) {
    ul.books {
        justify-content: center;
    }

    li.book {
        width: 100%;
        margin-bottom: 30px;
        margin-right: 0px;
    }
}
</style>