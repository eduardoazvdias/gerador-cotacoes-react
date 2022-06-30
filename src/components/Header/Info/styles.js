import styled from "styled-components";

export const Table1 = styled.table`
width: 98%;
background-color:#fff;
padding: 40px;
box-shadow: 0px 0px 5px #ccc;
border-radius: 5px;
max-width: 1120px;
margin: 5px auto;
`;

export const Thead1 = styled.thead``;
export const Tbody1 = styled.tbody``;
export const Tr1 = styled.tr``;
export const Tfoot1 = styled.tfoot``;
export const Td1 = styled.td``;

export const Th1 = styled.th`
border-bottom: inset;
padding-bottom: 5px;
text-align: start;
width: ${(props) => (props.width ? props.width + "%" : "auto")};
`;