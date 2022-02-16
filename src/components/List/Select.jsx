import React from 'react'
import styled from 'styled-components'

const SelectContainer = styled.div`
margin-bottom:10px
`;
const SelectTitle = styled.select`
    border-radius: 20px;
    background-color: #e9e5cf;
    border: none;
    padding: 8px 15px;
    float: left;
`;
const Option = styled.option``
export default function Select({onChangeType}) {
  // const A =()=>{onChangeType("private")}
  return (
    <SelectContainer>
      <SelectTitle name="pets" id="pet-select" onChange={onChangeType}>
          <Option value="private" >private</Option>
          <Option value="work">work</Option>
          <Option value="family">family</Option>
          <Option value="learning">learning</Option>
</SelectTitle>
    </SelectContainer>
  )
}
