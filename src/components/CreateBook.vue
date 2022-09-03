<template>
    <div>
        <form method="post">
            <h4 class="form__title">Create book</h4>

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
                <button class="btn btn-primary" type="button" @click="createNewBook()">
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
    name: 'CreateBook',
    data() {
        return {
            name_of_book: "",
            isbn: "",
            first_name: "",
            last_name: "",
        }
    },
    methods: {
        createNewBook() {
            axios({
                method: "POST",
                url: `${baseURL}book/`,
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
}
</script>

<style scoped>
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
}
</style>