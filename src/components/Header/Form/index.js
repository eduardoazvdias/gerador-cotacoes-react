import React, { useState } from 'react'
import Grid from '../Grid';
import * as C from "./styles";
import Info from '../Info'


const Form = ({handleAdd, transactionsList ,setTransactionsList, total, setTotal}) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);
  const [qty, setQty] = useState(1);

  const generateID = () => Math.round(Math.random() * 1000);


  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      qty: qty,
      amount: amount,
      total: qty * amount,
      expense: isExpense,
    };

    handleAdd(transaction);
    setDesc("");
    setAmount("");
    setQty("");

  };

  return (
    <>
    <C.Container1>Gerador de Orçamentos</C.Container1>
      <C.Container>
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input
          value={amount}
          type="number"
          onChange={(e) => setAmount(e.target.value)}
          />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Quantidade</C.Label>
          <C.Input
          value={qty}
          type="number"
          onChange={(e) => setQty(e.target.value)}
          />
        </C.InputContent>
        <C.Button onClick={handleSave}>ADICIONAR</C.Button>
      </C.Container>  
      <Info />
      <Grid 
      itens={transactionsList}
      setItens={setTransactionsList} 
      qty={qty}
      total={total}
      setTotal={setTotal}
      />
    </>
  );
};

export default Form