import React, { useState, Fragment } from "react";
import { LoginFormSubmit } from "./LoginFormSubmit";

export function LoginForm ({onLogin}) {

    const [user, setUser] = useState({email:'',password:''});
    const [flag, setFlag] = useState(true);
    const [error, setError] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        LoginFormSubmit(user, checkError, onLogin); 
    } 

    const onLoginInputChange = (e) => {
        if (e.target.value) {
            setFlag(false)
        }else {setFlag(true)}
        setUser(
            {
            ...user,
            email: e.target.value
            }
        )
    }

    const onPasswordInputChange = (e) => {
        setUser({
            ...user,
            password: e.target.value
        }
        )
    }

    const checkError = (error) => {
       setError(error)
    }

    return (
        <Fragment>
            <div className="modal-body">
                <div className="login"></div>

                    <form onSubmit={onSubmit}>
                        <div className="inputs">
                            <label>LOGIN</label>
                            <input type="email" placeholder="Input Login" onChange={onLoginInputChange} />
                            <label>PASSWORD</label>
                            <input type="password" placeholder="Input Password" onChange={onPasswordInputChange} />
                        </div>
                        <span className="error">{error}</span>
                        <button disabled={flag}>Login</button>
                    </form>

                </div>
        </Fragment>     
    )
}

