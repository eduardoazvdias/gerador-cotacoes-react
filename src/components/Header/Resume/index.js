import React from 'react'
import Form from '../Form';
import ResumeItem from '../ResumeItem';
import * as C from "./styles";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa";

const Resume = ({total}) => {
 
  return (
    <C.Container>
        
        <ResumeItem title= "Total" Icon={FaDollarSign} value={total} />
    </C.Container>
  )
}

export default Resume;

//<ResumeItem title= "" Icon={FaRegArrowAltCircleUp} value={income} />
  //      <ResumeItem title= "" Icon={FaRegArrowAltCircleDown} value={expense} />