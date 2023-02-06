import React from "react";
import { CardBody, CardFooter, CardHeader, CardButtons } from "../components/Cards";

export function CardUser ({user, operations}) {
    return (
      <div className="cardUser">
        <CardHeader name={user.first_name} last={user.last_name} />
        <CardBody avatar={user.avatar} />
        <CardFooter email={user.email} />
        <CardButtons id={user.id} operations={operations} />
      </div>
    )
};




