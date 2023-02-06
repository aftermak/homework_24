import React from "react";

export function CardFooter ({email}) {
    return (
        <a className="email" href={email}>{email}</a>
    ) 
}
