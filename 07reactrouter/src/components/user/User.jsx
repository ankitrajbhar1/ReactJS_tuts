import React from "react";
import { useParams } from "react-router-dom";


function User(){
    const {userid} = useParams()
    return(
        <div className="text-center bg-gray-700 text-3xl text-orange-700 p-4">User: {userid}</div>
    )
}

export default User