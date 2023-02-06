import React, { useState, useEffect } from "react";
import { GetAPI, DeleteAPI, UpdateAPI } from "./components/API";
import { Login, CardUserContainer } from "./containers";
import { ModalNewUser, ModalUpdate } from "./components";

export default function App () {

    const [token, setToken] = useState(localStorage.getItem('token'));
    const [id, setId] = useState('');
    const [users, setUsers] = useState([]);
    const [modUser, setModUser] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [flagModal, setFlagModal] = useState(false);
    const [flagUpdate, setFlagUpdate] = useState(false);
    
    const getUsers = (data, totalPage) => {
        setUsers(data); 
        setTotalPages(totalPage);
    };

    const addUser = (newUser) => setUsers([...users, newUser]);

    const removeUser = (id) => setUsers(users.filter(user => user.id !== id));

    const deleteUser = (id) => {DeleteAPI(id, removeUser)};

    const updateUser = (id) => {
        const user = users.filter(user => user.id == id)
        setModUser(...user)
        setFlagUpdate(true);
        setId(id)
    }

    const modifyUser = (user) => {UpdateAPI(id, user, changeUser)}

    const changeUser = (id, newUser) => {
        setUsers(users.map(user => {
            if(user.id == id){
                return newUser
            }
            return user
        }));
    }

    function logOut () {
        localStorage.removeItem('token');
        setToken(localStorage.getItem('token'));
        setPage(1);
        setUsers(GetAPI(page, getUsers));
    } 
    
    function nextPage () {
        if (page != totalPages) {
            setPage(page+1);
        }
    }

    function prewPage () {
        if(page==1){
            return
        }else{setPage(page-1)}
    }

    useEffect (()=> {GetAPI(page, getUsers)}, [page])
 
    return (
        <>
            <div className="wrapper">
                {!token 
                    ? <Login setToken={setToken} /> 
                    : <div>
                        <div className="header">
                            
                            <button className="logoutBtn" onClick={()=>{setFlagModal(true)}}>New User</button>
                            <button onClick={prewPage}>Prewious Page</button>
                            <button onClick={nextPage}>Next Page</button>
                            <button className="logoutBtn" onClick={logOut}>Logout</button>
                            
                        </div>

                        <CardUserContainer users={users} operations={{deleteUser, updateUser}}  />

                        {flagModal && (<ModalNewUser addUser={addUser} isOpen={setFlagModal} />)}
                        {flagUpdate && (<ModalUpdate modUser={modUser}  isOpen={setFlagUpdate} modifyUser={modifyUser} />)}
                    </div> 
                }
            </div>
        </>
    )
};

