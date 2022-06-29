import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #fff;
border-radius: 5px;
padding: 5px 10px;
width: 100%;

@media (max-width: 750px){
    width: 20%;

    p {
        font-size: 12px;
    }
    span {
        font-size: 20px;
    }
    svg {
        display: none;
    }
}
`;

export const Header = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 10px auto;
    padding-left: 20px;

    svg {
        width: 25px;
        height: 25px;
    }
`;

export const HeaderTitle = styled.p`
    font-size: 18px;
    display: flex;
    align-items: center;
    margin-right: 15px;
    
`;

export const Total = styled.span`
    font-size: 19px;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-align: center;
`;