<template>
    <div class="books__header">
        <h2 class="books__title">Authors</h2>
    </div>

    <div class="books__library container">

        <!-- List of Authors -->
        <ul class="books">
            <li class="book card" v-for="author in authors" :key="author.id">
                <h4 class="book__name">{{ author.first_name }} {{ author.last_name }}</h4>

                <div class="book__meta">
                    <router-link :to="`/author/${author.id}/`" class="book__more">View / Update</router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";

const baseURL = "https://books-library.up.railway.app/api/v1/";

export default {
    name: 'GetAuthors',
    data() {
        return {
            authors: []
        }
    },
    methods: {
        async fetchAuthors() {
            try {
                const res = await axios.get(`${baseURL}authors/`);
                this.authors = res.data.data || [];
            } catch (e) {
                console.log("Err: ", e);
            }
        },
    },
    mounted() {
        this.fetchAuthors();
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
    margin-bottom: 20px;
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