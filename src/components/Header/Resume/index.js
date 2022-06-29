import React from 'react'
import ResumeItem from '../ResumeItem';
import * as C from "./styles";
import {
    FaDollarSign,
} from "react-icons/fa";
import { 
  MdPayment
 } from "react-icons/md";

 import { 
  AiOutlineFieldTime
 } from "react-icons/ai";


const Resume = ({total}) => {
 
  return (
    <C.Container>
        <ResumeItem title= "Forma de Pagamento" Icon={MdPayment} value={'teste'} />
        <ResumeItem title= "Prazo de Entrega" Icon={AiOutlineFieldTime} value={`teste`} />
        <ResumeItem title= "Total" Icon={FaDollarSign} value={`R$ ${parseFloat(total).toFixed(2)}`} />
    </C.Container>
  )
}

export default Resume;
