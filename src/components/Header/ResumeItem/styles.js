import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #fff;
border-radius: 5px;
padding: 5px 10px;
<<<<<<< HEAD
width: 100%;
=======
width: 40%;
>>>>>>> b613de63f056ba200a43e1d4693511a2b7d0da4c

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
<<<<<<< HEAD
=======
    align-items: center;
>>>>>>> b613de63f056ba200a43e1d4693511a2b7d0da4c
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
<<<<<<< HEAD
    font-size: 18px;
=======
    font-size: 20px;
>>>>>>> b613de63f056ba200a43e1d4693511a2b7d0da4c
    display: flex;
    align-items: center;
    margin-right: 15px;
    
`;

export const Total = styled.span`
<<<<<<< HEAD
    font-size: 19px;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-align: center;
=======
    font-size: 22px;
    font-weight: bold;
    display: flex;
    align-items: center;
>>>>>>> b613de63f056ba200a43e1d4693511a2b7d0da4c
`;