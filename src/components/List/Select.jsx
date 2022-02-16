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

export default function Select({onChangeType}) {
  // const A =()=>{onChangeType("private")}
    const typeOptions=[
      "All",
      "private",
      "work",
      "family",
      "learning",
    ]
  return (
    <SelectContainer>
      <SelectTitle name="pets" id="pet-select" onChange={onChangeType}>
        { 
          typeOptions.map(
            (item,index) =>
              <option 
                key={index} 
                value={item}
                >
                  {item}
              </option>
          )
        }
</SelectTitle>
    </SelectContainer>
  )
}
