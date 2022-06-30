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

<<<<<<< HEAD
 import { 
  CgProfile
 } from "react-icons/cg";
 

=======
>>>>>>> b613de63f056ba200a43e1d4693511a2b7d0da4c

const Resume = ({total}) => {
 
  return (
    <C.Container>
<<<<<<< HEAD
        <ResumeItem title= "Cliente" Icon={CgProfile} value={'Dunkin Donuts'} />
        <ResumeItem title= "Forma de Pagamento" Icon={MdPayment} value={<C.Span>50% de Entrada + 3x sem Juros <br /> Ou <br /> à Vista no cartão ou PIX. </C.Span>} />
        <ResumeItem title= "Prazo de Entrega" Icon={AiOutlineFieldTime} value={`15 Dias`} />
=======
        <ResumeItem title= "Forma de Pagamento" Icon={MdPayment} value={'teste'} />
        <ResumeItem title= "Prazo de Entrega" Icon={AiOutlineFieldTime} value={`teste`} />
>>>>>>> b613de63f056ba200a43e1d4693511a2b7d0da4c
        <ResumeItem title= "Total" Icon={FaDollarSign} value={`R$ ${parseFloat(total).toFixed(2)}`} />
    </C.Container>
  )
}

export default Resume;
