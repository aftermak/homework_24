import React, { useState } from "react";

export function ModalUpdate ({modUser, isOpen, modifyUser}) {

    const [user, setUser] = useState(modUser);
    
    const onSubmit = (e) => {
        e.preventDefault();
        isOpen(false);
        modifyUser(user);
    } 

    const onFirstNameInputChange = (e) => {
        setUser({
                ...user,
                first_name: e.target.value
        })
    }

    const onLastNameInputChange = (e) => {
        setUser({
            ...user,
            last_name: e.target.value
        })
    }

    const onEmailInputChange = (e) => {
        setUser({
            ...user,
            email: e.target.value
        })
    }

    return (
        <div className="backdrop">
            <div className="modal-body">
                    <button className="close" onClick={()=>{isOpen(false)}}>&times;</button>
                    <div className="logo"></div>
                    <div className="title">UPDATE USER</div>

                    <form onSubmit={onSubmit}>
                        <div className="inputs">
                            <label>FIRST NAME</label>
                            <input type="text" placeholder="Input First Name" onChange={onFirstNameInputChange} value={user.first_name}  />
                            <label>LAST NAME</label>
                            <input type="text" placeholder="Input Last Name" onChange={onLastNameInputChange} value={user.last_name}  />
                            <label>EMAIL</label>
                            <input type="email" placeholder="Input EMAIL" onChange={onEmailInputChange} value={user.email} />
                        </div>
                        <button>UPDATE</button>
                    </form>

                </div>
        </div>        
       )
    
}

