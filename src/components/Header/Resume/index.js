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

 import { 
  CgProfile
 } from "react-icons/cg";
 


const Resume = ({total}) => {
 
  return (
    <C.Container>
        <ResumeItem title= "Cliente" Icon={CgProfile} value={'Dunkin Donuts'} />
        <ResumeItem title= "Forma de Pagamento" Icon={MdPayment} value={<C.Span>50% de Entrada + 3x sem Juros <br /> Ou <br /> à Vista no cartão ou PIX. </C.Span>} />
        <ResumeItem title= "Prazo de Entrega" Icon={AiOutlineFieldTime} value={`15 Dias`} />
        <ResumeItem title= "Total" Icon={FaDollarSign} value={`R$ ${parseFloat(total).toFixed(2)}`} />
    </C.Container>
  )
}

export default Resume;
