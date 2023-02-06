import { API_URL } from "../Const";

export function GetAPI (page, getUsers) {
    fetch (API_URL + `users?page= ${page}`)
        .then (res => res.json())
        .then (res => getUsers(res.data, res.total_pages))
}