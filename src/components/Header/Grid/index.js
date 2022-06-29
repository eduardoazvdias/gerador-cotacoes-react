import React, { useState, useEffect } from 'react';
import GridItem from "../GridItem"
import * as C from "./styles";


const Grid = ({itens, setItens, setTotal, total }) => {
    
    let totalTransactionValue = 0;
    itens.map((transaction) => {
    totalTransactionValue += transaction.total;
    setTotal(totalTransactionValue);
    })
    


    const onDelete = (ID) => {
        const newArray = itens.filter((transaction) => transaction.id !== ID);
        setItens(newArray);
        localStorage.setItem("transactions", JSON.stringify(newArray));
    };

  return (
    <>
    


    <C.Table>
        <C.Thead>
            <C.Tr>
                <C.Th width={50}> Descrição do item </C.Th>
                <C.Th width={20}> Valor </C.Th>
                <C.Th width={20}> Quantidade </C.Th>
                <C.Th width={20}> Total </C.Th>
                <C.Th width={10}> </C.Th>
            </C.Tr>
        </C.Thead>
        <C.Tbody>
            {itens?.map((item, index, total, qty, totalTransactionValue) =>(
                <GridItem key={index} item={item} onDelete={onDelete} total={total} qty={qty} totalTransactionValue={totalTransactionValue}/>
                
            ))}
        </C.Tbody>
    </C.Table>
    </>
  )
}

export default Grid