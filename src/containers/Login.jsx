import React from "react";
import { LoginForm }  from "../components/Login";

export function Login ({setToken}) {

    function onLogIn (token) {
        localStorage.setItem('token', token);
        setToken(token)
    } 
    
    return (
            <LoginForm onLogin={onLogIn}/>
    )
         
}