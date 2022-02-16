import React from 'react'
import styled from 'styled-components'

const SelButton=styled.button`
    width:80px;
    padding: 5px;
    border-radius: 20px;
    border: none;
    background-color: ${props=>props.type===props.text?"#e2b96f" :"#9bd6aa"};
    box-shadow: 1px 3px 6px rgba(0,0,0,.4);
}
`;

export default function SelectButton(props) {
  return (
    <SelButton {...props} >{props.text}</SelButton>
  )
}
