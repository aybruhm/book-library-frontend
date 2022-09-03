import axios from "axios";

export default (url = "http://127.0.0.1:8080/api/v1/") => {
    return axios.create(
        {
            baseURL: url,
        }
    )
}