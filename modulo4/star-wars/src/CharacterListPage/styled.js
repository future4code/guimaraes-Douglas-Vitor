import styled from "styled-components"




export const CharacterCard = styled.div`
    display: grid;
    grid-template-rows: 1.3fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    justify-items: center;
    margin-left:12px;
    padding:50px;
    backgroud-image
    
    `
    export const CharacterNameArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: right;
    
`

export const Title = styled.h2`
    color:white;
    justify-items: center;
    
`

export const LogoImage = styled.img`
    margin-top:15vh;
    margin-bottom:05vh;
    position: relative;
    left:80vh;
    width:20vw;
    max-width: 600vh;
    background-color rgba(0,0,0,0.2);
    border-radius: 10px;
    
`
