import styled from "styled-components";
import { COLORS } from "../../assets/colors";


export const Container = styled.div`
min-height: calc(100vh - 162px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: ${COLORS.black};
`

export const Text = styled.h1`
color:${COLORS.white}
`
