import styled from "styled-components";

export const Container = styled.div`
max-width: 1120px;
margin: 10px auto;
width: 80%;
background-color: #fff;
box-shadow: 0px 0px 5px #ccc;
border-radius: 5px;
display: flex;
justify-content: space-around;
padding: 10px 0px;
gap: 10px;


@media(max-width: 750px){
    display: grid;
}
`;

