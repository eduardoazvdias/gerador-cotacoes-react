import React, { useState } from 'react'
import Header from './components/Header';
import Form from './components/Header/Form';
import Resume from './components/Header/Resume';
import GlobalStyle from "./styles/global";

const App = () => {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );
   
    const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);
    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));

  };  
    
  const [total, setTotal] = useState(0);


  return (
    <div>
    <Header />
      <Form 
        handleAdd={handleAdd} 
        transactionsList={transactionsList} 
        setTransactionsList={setTransactionsList}
        setTotal={setTotal}
        />
        <Resume 
        total={total}
        
        />

    <GlobalStyle />
    </div>
  );
};

export default App