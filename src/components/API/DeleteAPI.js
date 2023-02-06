import { API_URL } from "../Const";

export function DeleteAPI (id, removeUser) {
    fetch(API_URL + `users/${id}`, {
        method: 'DELETE',
    })
    .then (res => {
        if (res.status == 204) {
            removeUser(id);
        } else {
            console.log('User not found');
        }
    }) 
}