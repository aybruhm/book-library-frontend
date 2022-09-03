<template>
    <div class="books__header">
        <h2 class="books__title">Bibliothèque</h2>
        <p class="books__msg">{{ msg }}</p>

        <div class="books__meta">
            <a href="" class="meta__link">Create Author</a>
            <a href="" class="meta__link">Create Book</a>
        </div>
    </div>

    <div class="books__library container">
        <!-- 
        <form method="post">
            <h4 class="form__title">Create book</h4>

            <div class="form-group">
                <input type="text" class="form-control" placeholder="Name of book">
            </div>

            <div class="form-group">
                <input type="text" class="form-control" placeholder="ISBN">
            </div>

            <div class="form-group">
                <input type="text" class="form-control" placeholder="Firstname of Author">
            </div>

            <div class="form-group">
                <input type="text" class="form-control" placeholder="Lastname of Author">
            </div>

            <div class="form-group">
                <button class="btn btn-primary">
                    Submit
                </button>
            </div>
        </form> -->

        <ul class="books">
            <li class="book card" v-for="book in books" :key="book.id">
                <h4 class="book__name">{{ book.name }}</h4>
                <p class="text-muted">{{ book.isbn }}</p>
                <h6 class="book__isbn">{{ book.author.first_name }} {{ book.author.last_name }}</h6>

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

export default {
    name: 'GetBooks',
    props: {
        msg: String
    },
    data() {
        return {
            books: []
        }
    },
    async created() {
        try {
            const res = await axios.get(`${baseURL}`);
            this.books = res.data.data;
        } catch (e) {
            console.log("Err: ", e);
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
a.meta__link {
    color: #080707;
    background-color: #525252;
    padding: 6px 15px;
    border-radius: 5px;
    margin-right: 15px;
}

a.book__more:last-child {
    margin-right: 0px;
}

form {
    max-width: 50%;
    margin: auto;
    margin-top: 40px;
}

h4.form__title {
    margin-bottom: 20px;
}

form input.form-control {
    margin-bottom: 20px;
    height: 40px;
    border-radius: 4px;
}

form button.btn {
    padding: 12px 40px;
    width: 100%;
    background-color: #525252;
    font-size: 13px;
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