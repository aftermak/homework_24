import React from "react";

export function CardButtons ({id, operations}) {
        return (
        <>
            <button className="delete" onClick={() => operations.deleteUser(id)}>&times;</button>
            <button className="update" onClick={() => operations.updateUser(id)}>Update</button>
        </>
            
    )      
}
