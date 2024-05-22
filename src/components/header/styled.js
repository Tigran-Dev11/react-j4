import styled from "styled-components";


export const MenuHeader = styled.div`
    background-color: white;
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const Logo = styled.img`
    width: 350px;
    height: 120px;
    margin-left: 40px;
`

export const Ul = styled.ul`
    display:flex;
    gap: 100px;

`
export const Li = styled.li`
    list-style:none;
    font-size: 17px;
    font-weight: 500;
    font-family: "montserrat";
`
export const A = styled.a`
    color:black;
    text-decoration:none;
`
export const Inp = styled.input`
    border: 1px solid black;
    width: 230px;
    height: 40px;
`