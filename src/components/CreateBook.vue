<template>
    <div>

        <form method="post" class="d-none">
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
        </form>
    </div>
</template>

<script>
// import axios from "axios";
// let baseURL = "http://127.0.0.1:8080/api/v1/books/";

export default {
    name: 'CreateBook',
    props: {},
    data() {
        return {}
    }
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
</style>