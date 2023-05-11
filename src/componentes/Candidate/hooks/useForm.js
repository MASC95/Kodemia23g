import React from 'react'
import { useState } from 'react'


export const UseForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm)
    const [errors, setErrrors] = useState({})
    const [Loading, setLoading] = useState(false)
    const [Response, setResponse] = useState(null)

    const handleChange =(e) =>{
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleBlur =(e)=>{
        handleChange(e);
        setErrrors(validateForm(form));
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

