import styled from "styled-components";

export const Tr = styled.tr`
display:block;
`;

export const Td = styled.td`
   
    padding-top: 25px;
    padding-left: 5px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")}
    word-break: break-all;

    svg {
        width: 18px;
        height: 18px;
    }
`;

