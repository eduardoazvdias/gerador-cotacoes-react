import React, { useState } from 'react'
import GridItemClient from '../GridItemClient';
import * as C from "./styles";

const Form = ({handleAdd}) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");

  const generateID = () => Math.round(Math.random() * 1000);


    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
    };

    handleAdd(transaction);
    setDesc("");
    setAmount("");

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Cliente</C.Label>
          <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Endereço</C.Label>
          <C.Input value={amount} onChange={(e) => setDesc(e.target.value)} />
        </C.InputContent>
        <C.Button>ADICIONAR</C.Button>
      </C.Container>
      <GridItemClient 
      cliente={desc}
      endereco={amount}  />
    </>
  );
}
export default Form