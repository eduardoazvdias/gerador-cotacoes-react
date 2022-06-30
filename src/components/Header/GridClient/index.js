import React from 'react';
import GridItemClient from "../GridItemClient"
import * as C from "./styles";


const Grid = ({itens, setItens}) => {
    

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
                <C.Th width={50}> Cliente </C.Th>
                <C.Th width={20}> Endereço </C.Th>
                <C.Th width={10}> </C.Th>
            </C.Tr>
        </C.Thead>
        <C.Tbody>
            {itens?.map((item, index) =>(
                <GridItemClient key={index} item={item} onDelete={onDelete} />
                
            ))}
        </C.Tbody>
    </C.Table>
    </>
  )
}

export default Grid