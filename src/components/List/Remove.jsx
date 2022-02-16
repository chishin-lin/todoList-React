import React from 'react'
import styled from 'styled-components'

const RemoveBtn = styled.div`
    background-color: #4e4e4e;
    color: white;
    width: 100px;
    border-radius: 20px;
    margin: auto;
    padding: 5px;
    box-shadow: 0px 3px 8px rgb(0 0 0 / 30%);

`;


export default function Remove({onRemoveAll}) {
  return (
    
    <RemoveBtn 
      onClick={() => onRemoveAll()}
    >
      Remove All
    </RemoveBtn>
  )
}
