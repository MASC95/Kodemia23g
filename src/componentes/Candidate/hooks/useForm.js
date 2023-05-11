import React from 'react'
import { useState } from 'react'


export const UseForm = (initialForm, validateForm) => {
    const [form, setfirst] = useState(initialForm)
    const [errors, setErrrors] = useState({})
    const [Loading, setLoading] = useState(false)
    const [Response, setResponse] = useState(null)

    const handleChange =(e) =>{

    }
    const handleBlur =(e)=>{

    }
    const handleSubmit = (e)=>{

    }
 return{
    form,
    errors,
    Loading,
    Response,
    handleChange,
    handleBlur,
    handleSubmit,
 }
;}
