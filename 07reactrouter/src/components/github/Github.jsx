import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){

    const data = useLoaderData()


    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/ankitrajbhar1')
    //     .then((res) => res.json())
    //     .then(res => {
    //         console.log(data)
    //         setData(res)})
    // }, [])


    return(
        <div className="text-center m-4  bg-gray-700 text-3xl text-orange-700 p-4">Github followers: {data.followers}
        <img src={data.avatar_url} alt="GitPicture" width={300}/>
        </div>
    )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/ankitrajbhar1')
    return response.json()  
}