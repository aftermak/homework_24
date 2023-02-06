import { API_URL } from "../Const";

export function UpdateAPI (id, user, changeUser) {
    fetch(API_URL + `users/${id}`, {
        
        method: 'PUT',
    
        headers: {
        'Content-Type': 'application/json'
        },

        body: JSON.stringify(user) 
    })
    .then (res => {
        if (res.status == 200) {
            res.json()
            .then (newUser => changeUser(id, newUser))
        } else {
            console.log('User not found');
        }
    }) 
}

