import React from 'react'
import * as C from "./styles";
import { FaStore } from "react-icons/fa";

const Info = ({Icon}) => {
  return (
    <C.Table>
        <C.Thead>
            <C.Tr>
                <C.Th width={20}> Orçamento Nº </C.Th>
                <C.Th width={40}> <FaStore /> Empresa </C.Th>
                <C.Th width={25}> Contato </C.Th>
                <C.Th width={10}> </C.Th>
            </C.Tr>
        </C.Thead>
        <C.Tbody>
        <C.Td>{`00${Math.round(Math.random() * 10000)}`}</C.Td>
        <C.Td>ACASO <br /> Endereço: ADE Conjunto 17 Lote 20 <br /> CNPJ: 13.360.379/0001-92 </C.Td>
        <C.Td>Tel: (61) 3036-1449 / 98249-2147 <br /> email: acasodf@gmail.com  <br />  website: http://acasodf.com.br </C.Td>
        <C.Td></C.Td>
        <C.Td></C.Td>
        </C.Tbody>
    </C.Table>
  )
}

export default Info;
