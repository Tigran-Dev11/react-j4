import styled from "styled-components";
import { IMAGES } from "../../assets";
import { BREAKPOINTS } from "../../assets/breakpoints";


export const AllContentContainer = styled.div`
width: 100%;
min-height:100vh;
display: flex;
flex-direction: column;
align-items: center;
`

export const HomeCont = styled.div`
width: calc(100% - 120px);
min-height: 660px;
padding-block: 60px;
margin-top:158px;
background-image: url(${IMAGES.mainRectangle});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
display: flex;
justify-content: space-between;
align-items: center;
padding-inline: 60px;

`
export const bigStar = styled.img`
width: 104px;
height: 104px;
margin-top: 180px;
@media ${BREAKPOINTS.lg}{
    display: none;
}

`
export const smallStar = styled.img`
width: 56px;
height: 56px;
margin-top: 380px;

@media ${BREAKPOINTS.lg}{
    display: none;
}
`
export const starsContainer = styled.div`
width: 50%;
height: 100vh;
display: flex;
justify-content: space-between;

@media ${BREAKPOINTS.lg}{
    display: none;
}
`

export const descriptionsCont = styled.div`
display: flex;
flex-direction: column;
align-items: start;
padding-inline: 60px;
justify-content: space-between;
width: calc(50% - 120px);
min-height:600px;
flex-wrap: wrap;


@media ${BREAKPOINTS.lg}{

}
`

export const sloganShoes = styled.h1`
width: 577px;
min-height: 173px;
top: 237px;
left: 100px;
gap: 0px;
color: black;
font-size: 64px;
font-weight: 700;
line-height: 64px;
text-align: left;

@media ${BREAKPOINTS.md}{
    font-size: 50px;
    font-weight: 700;
    line-height: 50px;

}
`

export const explanationShoes = styled.p`
width: 545px;
min-height: 33px;
opacity: 0px;
font-size: 16px;
font-weight: 400;
line-height: 22px;
text-align: left;

@media ${BREAKPOINTS.md}{
    width: 300px;
}
`

export const quantityCont = styled.ul`
width:100%;
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
gap:20px ;
`

export const listQuantity = styled.li`
list-style: none;
position: relative;
right:10px;

`

export const Branches = styled.p``
export const Quantity = styled.h1`
margin-left:10px;

`