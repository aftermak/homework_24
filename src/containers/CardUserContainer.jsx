import React from "react";
import { CardUser } from "../containers";

export function CardUserContainer ({ users, operations }) {
   return(
   
         <div className="container">{users.map( user => (
               <CardUser user={user} key={user.id} operations={operations} />
               ))}
         </div>
   )
};
