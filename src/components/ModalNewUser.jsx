import React, { useEffect, useState } from "react";
import { initialUser } from './initialUser.js'

export function ModalNewUser ({ addUser, isOpen }) {

    const [newUser, setNewUser] = useState(initialUser);
    const [flag, setFlag] = useState(true)
    
    const onSubmit = (e) => {
        e.preventDefault();
        addUser(newUser);
        setFlag(true)
        isOpen(false)
        setNewUser(initialUser)
    } 

    const onFirstNameInputChange = (e) => {
        setNewUser({
            ...newUser,
            first_name: e.target.value
        })
    }

    const onLastNameInputChange = (e) => {
        setNewUser({
            ...newUser,
            last_name: e.target.value
        })
    }

    const onEmailInputChange = (e) => {
        setNewUser({
            ...newUser,
            email: e.target.value
        })
    }

    useEffect(()=>{
        if(newUser.first_name.trim() && newUser.last_name.trim() && newUser.email.trim()){
            setFlag(false)} else{
            setFlag(true)
        }
    },[newUser])

    return (
       <div className="backdrop">
            <div className="modal-body">
                <button className="close" onClick={()=>{isOpen(false)}}>&times;</button>
                <div className="logo"></div>
                <div className="title">New User</div>

                <form onSubmit={onSubmit}>
                    <div className="inputs">
                        <label>FIRST NAME</label>
                        <input type="text" placeholder="Input First Name" onChange={onFirstNameInputChange} />
                        <label>LAST NAME</label>
                        <input type="text" placeholder="Input Last Name" onChange={onLastNameInputChange} />
                        <label>EMAIL</label>
                        <input type="email" placeholder="Input EMAIL" onChange={onEmailInputChange}/>
                    </div>
                    <button disabled={flag}>CREATE</button>
                </form>

            </div>
       </div>

            
  
     
    
        
        
       )
    
}

