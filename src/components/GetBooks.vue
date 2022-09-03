<template>
    <div class="books__header">
        <h2 class="books__title">Bibliothèque</h2>
        <p class="books__msg">{{ msg }}</p>

        <div class="books__meta">
            <button class="meta__link" @click="(toggleCreateAuthor)">Create Author</button>
            <button class="meta__link" @click="(toggleCreateBook)">Create Book</button>
        </div>
    </div>

    <div class="books__library container">

        <!-- Create Book -->
        <CreateBook form-class="d-none" />

        <!-- List of Books -->
        <ul class="books">
            <li class="book card" v-for="book in fetchedBooks" :key="book.id">
                <h4 class="book__name">{{ book.name }}</h4>
                <p class="text-muted">{{ book.isbn }}</p>
                <h6 class="book__isbn">
                    <a href="" class="book__author">{{ book.author.first_name }} {{ book.author.last_name }}</a>
                </h6>

                <div class="book__meta">
                    <a href="" class="book__more">View</a>
                    <a href="" class="book__more">Update</a>
                </div>
            </li>
        </ul>
    </div>
</template>


<script>
import axios from "axios";
let baseURL = "http://127.0.0.1:8080/api/v1/books/";


import CreateBook from "./CreateBook.vue";

export default {
    name: 'GetBooks',
    components: {
        CreateBook,
    },
    props: {
        msg: String,
    },
    data() {
        return {
            fetchedBooks: []
        }
    },
    async created() {
        try {
            const res = await axios.get(baseURL);
            console.log("Res: ", res.data);
            this.books = res.data.data;
        } catch (e) {
            console.log("Err: ", e);
        }
    },
    methods: {
        toggleCreateBook(e) {
            console.log("Book Event: ", e);
        },
        toggleCreateAuthor(e) {
            console.log("Author Event: ", e);
        }
    }
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

li.book {
    padding: 20px;
    justify-content: center;
    flex-wrap: wrap;
    width: 30%;
    margin: auto;
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