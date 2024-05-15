import styled from "styled-components";

export const Form = styled.form`
   
   display: flex;
   gap: 20px;
   justify-content: center;
`
export const Inp = styled.input`
   width: 190px;
   height: 40px;
   line-height: 28px;
   padding: 0 1rem;
   padding-left: 2.5rem;
   border: 2px solid transparent;
   border-radius: 8px;
   outline: none;
   background-color: #f3f3f4;
   color: #0d0c22;
   transition: .3s ease;
`

export const Btn = styled.button`
    font-size: 16px;
    border: none;
    background: #fff;
    transition: all 0.1s linear;
    box-shadow: 0 0.4em 1em rgba(0, 0, 0, 0.1);
    border-radius: 12px;
   cursor: pointer;
`