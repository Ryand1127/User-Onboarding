import React from 'react'
import styled from 'styled-components'

const StyledDiv1 = styled.div`

display:flex;
flex-wrap: wrap;

`


const StyledDiv2 = styled.div`

border: 2px red solid;
width: 22%;
margin: 5%;
text-align: center;
background: rgba(0,0,0,0.8);
color: white;
box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.8)

`

export default function User(props) {

    return(
        <StyledDiv1>
            {props.startUser.map(users => (
                <StyledDiv2>
                <h2>{users.first_name}</h2>
                <p>{users.email}</p>
                </StyledDiv2>
            ))}
        </StyledDiv1>
    )
}