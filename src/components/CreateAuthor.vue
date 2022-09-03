<template>
    <div>

        <form method="post">
            <h4 class="form__title">Create Author</h4>

            <div class="form-group">
                <input type="text" v-model="first_name" class="form-control" placeholder="Firstname">
            </div>

            <div class="form-group">
                <input type="text" v-model="last_name" class="form-control" placeholder="Lastname">
            </div>

            <div class="form-group">
                <button class="btn btn-primary" type="button" @click="createNewAuthor()">
                    Submit
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";
const baseURL = "https://books-library.up.railway.app/api/v1/";

export default {
    name: 'CreateAuthor',
    data() {
        return {
            first_name: "",
            last_name: ""
        }
    },
    methods: {
        createNewAuthor() {
            axios({
                method: "POST",
                url: `${baseURL}author/`,
                data: {
                    "first_name": this.first_name,
                    "last_name": this.last_name
                },
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then((res) => {
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