import React from 'react'
import * as C from "./styles";
import { FaStore } from "react-icons/fa";

const Info = ({Icon}) => {
  return (
    <C.Table1>
        <C.Thead1>
            <C.Tr1>
                <C.Th1 width={20}> Orçamento Nº </C.Th1>
                <C.Th1 width={40}> <FaStore /> Empresa </C.Th1>
                <C.Th1 width={25}> Contato </C.Th1>
                <C.Th1 width={10}> </C.Th1>
            </C.Tr1>
        </C.Thead1>
        <C.Tbody1>
      <C.Tr1>
        <C.Td1>{`00${Math.round(Math.random() * 10000)}`}</C.Td1>
        <C.Td1>ACASO <br /> Endereço: ADE Conjunto 17 Lote 20 <br /> CNPJ: 13.360.379/0001-92 </C.Td1>
        <C.Td1>Tel: (61) 3036-1449 / 98249-2147 <br /> email: acasodf@gmail.com  <br />  website: http://acasodf.com.br </C.Td1>
        </C.Tr1>
        </C.Tbody1>
    </C.Table1>
  )
}

export default Info;
