import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import User from './User.js';
import Styled from 'styled-components';

const StyledForm = Styled.div`

text-align: center;

    label{
        margin-right: 4%;
        font-size: 20px;
        color: white;
    }

    input{
        margin-top: 2%;
        margin-left: 0.5%;
        font-size: 20px;
    }

    form{
        background-color: black;
        padding-bottom: 2%;
        border-bottom: 5px solid red;
    }

    button{
        padding: 0.5%;
        font-size: 25px;
        color: yellow;
        border: 1px solid yellow;
    }
`

const initialUser = {
    first_name:"",
    email: "",
    password: "",
    tos: false
}

const schema = yup.object().shape({
    first_name: yup.string().required('user is required').max(20, 'username can only be 20 chars'),
    email: yup.string().required('email is required'),
    password: yup.string().required('password is required').min(8, 'password must be 8 chars.'),
    tos: yup.boolean().oneOf([true], 'Please agree to the terms of service.'),
})

export default function Form(props){

    const [userValue, setUserValue] = useState(initialUser);
    const [errors, setErrors] = useState(initialUser);
    const [disabled, setDisabled] = useState(true);
    const [startUser, setStartUser] = useState([])

    function getData() {
        axios
          .get(
            `https://reqres.in/api/users`
          )
          .then((res) => {
              setStartUser(res.data.data)
          })
          .catch((err) => {
              console.log(err)
          })
    }

    useEffect(getData, [])

    const setFormErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
        .then(() => setErrors({...errors, [name]: '' }))
        .catch(err => setErrors({...errors, [name]: err.errors[0] }))
    };

    const changeHandler = (e) => {
        const {name, value, type, checked} = e.target
        const valueToUse = type === 'checkbox' ? checked : value
        setFormErrors(name, valueToUse)
        setUserValue({...userValue, [name]: valueToUse})
    };

    const submit = event => {
        event.preventDefault()
        const newUser = { first_name: userValue.first_name.trim(), email: userValue.email.trim(), password: userValue.password.trim(), tos: userValue.tos}
        axios.post(`https://reqres.in/api/users`, newUser)
        .then(res => {
            
            setStartUser([...startUser, res.data])
            setUserValue({ first_name:'', email:'', password:'', tos:false})
            
        })
        
    }

    useEffect(() => {
    
        schema.isValid(userValue).then(valid => setDisabled(!valid))
    
    }, [userValue]);

return(
<StyledForm>
    <div style={{color : 'red'}}>
        <div>{errors.first_name}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
        <div>{errors.tos}</div>
    </div>
    <form onSubmit={submit}>
        <label>
        Name:    
            <input
             name="first_name"
             type="text"
             placeholder="Name Here"
             value={userValue.first_name}
             onChange={changeHandler}
            />
        </label>
        <label>
        Email:        
            <input
            name="email"
            type="email"
            placeholder="Email Here"
            value={userValue.email}
            onChange={changeHandler}  
            />  
        </label>
        <label>
        Password:
            <input
            name="password"
            type="password"
            placeholder="Password Here"
            value={userValue.password}
            onChange={changeHandler}  
            />
        </label>
        <label>
            Agree to Terms of Service:
            <input
            name="tos"
            type="checkbox"
            value={userValue.tos}
            checked={userValue.tos}
            onChange={changeHandler}  
            />
        </label>
     <button disabled={disabled}>Submit</button>
    </form>
    <User startUser={startUser}/>
</StyledForm>
)


}