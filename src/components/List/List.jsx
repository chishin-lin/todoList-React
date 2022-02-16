import React, { useState } from 'react'
import styled from 'styled-components'

const ListContainer=styled.div`
background-color: #ffd18b;
margin: 10px;
padding: 10px 40px;
font-size: 24px;
display: flex;
justify-content: space-between;
`;
const TypeBtn = styled.div`
    background-color: #e96d3c;
    padding: 5px 20px;
    font-size: 16px;
    border-radius: 30px;
    box-shadow: 0px 3px 6px rgb(0 0 0 / 50%);
    margin-right: 25px; 
`;
const ContainerRight = styled.div`
    display: flex;
    align-items: center;
    color: #505050;
}
`;
const BtnContainer = styled.div`
    display: flex;
`;
const Btn = styled.div`
    color: #ffd18b;
    background-color: ${props=>props.color===true?" #4e4e4e":"white"}; 
    padding: 5px 10px;
    border-radius: 20px;
    font-weight: 600;
    box-shadow: 0px 3px 8px rgb(0 0 0 / 30%);
    margin-left: 10px;
`;
const ListText = styled.div`
    text-decoration: ${props=>props.color===true?"line-through":""}; 
    ;   
`;

// color: #ffd18b;
// color: #e9e9e9;
export default function List({text,type,onDelectItem,id}) {
    const [finish, setFinish] = useState(false);
    return (
    <ListContainer>
        <ContainerRight>
            <TypeBtn>{type}</TypeBtn>
            <ListText color={finish}>{text}</ListText>
        </ContainerRight>
        <BtnContainer>
            <Btn onClick={()=>{setFinish(!finish)}} color={finish} >V</Btn>
            <Btn onClick={()=>{onDelectItem(id)}}>X</Btn>
        </BtnContainer>
    </ListContainer> 
     )
}
