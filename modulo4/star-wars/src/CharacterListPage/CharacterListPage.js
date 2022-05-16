import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/url";
import  {useEffect,useState} from "react"
import axios from "axios";

const CharacterListpage = () => {
    
    const [data, setData] =useState([])
    useEffect(() => {
        getPeople()
    },[])
    const getPeople = () => {
        axios.get(`${BASE_URL}/people`)
        .then((res)=> {setData(res.data.results)})
        .catch((err)=>{console.log(err)})
    }
    return(
        <li>{getpeople}</li>
    )
}