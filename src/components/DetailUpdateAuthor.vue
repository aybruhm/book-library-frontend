<template>
    <div>
        <!-- Single Author -->
        <ul class="books">
            <li class="book card">
                <h4 class="book__name">{{ first_name }} {{ last_name }}</h4>
            </li>
        </ul>

        <form method="post">
            <h4 class="form__title">Update author</h4>

            <div class="form-group">
                <input type="text" v-model="first_name" class="form-control" placeholder="Firstname of Author">
            </div>

            <div class="form-group">
                <input type="text" v-model="last_name" class="form-control" placeholder="Lastname of Author">
            </div>

            <div class="form-group">
                <button class="btn btn-primary" type="button" @click="updateSingleAuthor()">
                    Update
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";
let baseURL = "http://127.0.0.1:8080/api/v1/";

export default {
    name: 'DetailUpdateAuthor',
    data() {
        return {
            first_name: "",
            last_name: "",
        }
    },
    methods: {
        updateBook() {
            console.log(this.$route.params.id);
        },
        async getSingleAuthor() {
            try {

                let objectID = this.$route.params.id;
                const res = await axios.get(`${baseURL}author/${objectID}/`);

                this.first_name = res.data.data.first_name;
                this.last_name = res.data.data.last_name;
            } catch (e) {
                console.log("Err: ", e);
            }
        },
        updateSingleAuthor() {

            let objectID = this.$route.params.id;

            axios({
                method: "PUT",
                url: `${baseURL}author/${objectID}/`,
                data: {
                    "first_name": this.first_name,
                    "last_name": this.last_name
                },
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then((res) => {
                    alert(res.data.message);
                })
                .catch((err) => {
                    console.log("Erorr: ", err);
                });
        }
    },
    mounted() {
        this.getSingleAuthor();
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