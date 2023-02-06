
export function LoginFormSubmit (user, checkError, onLogin) {

    const API_URL = 'https://reqres.in/api/';

    fetch(API_URL + 'login', {   
        method: "POST",     
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                email: user.email,
                password: user.password
            }
        ) 
    })
    .then ((res) => {
        if(res.ok) {
            res.json()
            .then (res=> onLogin(res.token))}
        if (!res.ok) {
            res.json()
            .then (res => checkError(res.error))
        }
    })
}



