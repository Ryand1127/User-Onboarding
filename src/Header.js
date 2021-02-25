import React from 'react'
import Styled from 'styled-components'

const StyledHeader = Styled.header`

background-color: black;
text-align: center;


    img {
        width: 500px;
    }

`

export default function Header(){

    return(
        <StyledHeader>
            <img src="https://img2.pngio.com/the-karate-kid-wiki-fandom-cobra-kai-png-937_309.png" alt="cobra kai logo"/>
        </StyledHeader>
    )
}