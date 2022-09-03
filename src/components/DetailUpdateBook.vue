<template>
    <div>
        <!-- Single Book -->
        <ul class="books">
            <li class="book card">
                <h4 class="book__name">{{ name_of_book }}</h4>
                <p class="text-muted">{{ isbn }}</p>
                <h6 class="book__isbn">
                    <router-link :to="`/author/${author_id}/`" class="book__author">
                        {{ first_name }} {{ last_name }}
                    </router-link>
                </h6>
            </li>
        </ul>

        <form method="post">
            <h4 class="form__title">Update book</h4>

            <div class="form-group">
                <input type="text" v-model="name_of_book" class="form-control" placeholder="Name of book">
            </div>

            <div class="form-group">
                <input type="text" v-model="isbn" class="form-control" placeholder="ISBN">
            </div>

            <div class="form-group">
                <input type="text" v-model="first_name" class="form-control" placeholder="Firstname of Author">
            </div>

            <div class="form-group">
                <input type="text" v-model="last_name" class="form-control" placeholder="Lastname of Author">
            </div>

            <div class="form-group">
                <button class="btn btn-primary" type="button" @click="updateSingleBook()">
                    Submit
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";
let baseURL = "http://127.0.0.1:8080/api/v1/";

export default {
    name: 'DetailUpdateBook',
    data() {
        return {
            book_id: "",
            name_of_book: "",
            isbn: "",
            first_name: "",
            last_name: "",
            author_id: "",
        }
    },
    methods: {
        updateBook() {
            console.log(this.$route.params.id);
        },
        async getSingleBook() {
            try {

                let objectID = this.$route.params.id;
                const res = await axios.get(`${baseURL}book/${objectID}/`);

                this.book_id = res.data.data.id;
                this.name_of_book = res.data.data.name;
                this.isbn = res.data.data.isbn;
                this.first_name = res.data.data.author.first_name;
                this.last_name = res.data.data.author.last_name;
                this.author_id = res.data.data.author.id;
            } catch (e) {
                console.log("Err: ", e);
            }
        },
        updateSingleBook() {

            let objectID = this.$route.params.id;

            axios({
                method: "PUT",
                url: `${baseURL}book/${objectID}/`,
                data: {
                    "name": this.name_of_book,
                    "isbn": this.isbn,
                    "author": {
                        "first_name": this.first_name,
                        "last_name": this.last_name
                    }
                },
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then((res) => {
                    this.name_of_book = "";
                    this.isbn = "";
                    this.first_name = "";
                    this.last_name = "";
                    alert(res.data.message);
                })
                .catch((err) => {
                    console.log("Erorr: ", err);
                });
        }
    },
    mounted() {
        this.getSingleBook();
    },
}
</script>

<style scoped>
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
    width: 30%;
    margin: auto;
    margin-bottom: 20px;
    background-color: #08070736;
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

@media screen and (max-width: 489px) {
    form {
        max-width: 100%;
    }

    li.book {
        width: 100%;
    }
}
</style>