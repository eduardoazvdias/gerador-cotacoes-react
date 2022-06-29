import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import Form from './components/Header/Form';
import Resume from './components/Header/Resume';
import GlobalStyle from "./styles/global";

const App = () => {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );
  
  //const [income, setIncome] = useState(0);
  //const [expense, setExpense] = useState(0);
  
    
  useEffect(() => {
      //const amountExpense = transactionsList
      //.filter((item) => item.expense)
      //.map((transaction) => Number(transaction.amount));

      //const qtyItens = transactionsList
      //.map((transaction) => Number(transaction.qty));

      //const amountIncome = transactionsList
      //.filter((item) => !item.expense)
      //.map((transaction) => Number(transaction.amount));    
      
      //const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
      //const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);


      //setIncome(`R$ ${income}`);
      //setExpense(`R$ ${expense}`);
      //setTotal(`${total}`);
      //const ttV = transactionsList
      //.map((transaction) => Number(transaction.amount));

  }, [transactionsList]);

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);
    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));

  };  
    
  const [total, setTotal] = useState(0);


  return (
    <div>
    <Header />
      <Resume 
        total={total}
        
        />
      <Form 
        handleAdd={handleAdd} 
        transactionsList={transactionsList} 
        setTransactionsList={setTransactionsList}
        setTotal={setTotal}
        />

    <GlobalStyle />
    </div>
  );
};

export default App