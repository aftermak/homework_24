import React from "react";

export function CardHeader ({name, last}) {
    return(
        <div className="name">{`${name } ${last}`}</div>
    ) 
}
