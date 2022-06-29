import React from 'react'
import * as C from "./styles";
import {
    FaTrash
} from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {


  return (
    <C.Tr>
        <C.Td>{item.desc}</C.Td>
        <C.Td>{item.amount}</C.Td>
        <C.Td>{item.qty}</C.Td>
        <C.Td>{item.total}</C.Td>
        <C.Td>
            <FaTrash onClick={() => onDelete(item.id)} />
        </C.Td>
    </C.Tr>
  );
};

export default GridItem