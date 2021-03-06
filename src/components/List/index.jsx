import React,{useState} from 'react'
import styled from 'styled-components'
import Select from './Select';
import List from './List';
import Remove from "./Remove"

const ListContainer = styled.div`
    background-color: white;
    width: 710px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    max-height: 50vh;
    overflow: auto;
    margin-top: 40px;
`;

export default function ListsBox({todoThings,onRemoveAll,onDelectItem}) {
  const [selectType,setSelectType] = useState("All")
  const handleChangeType = (item) => {
    setSelectType(item.target.value)
  }

  return (
    <ListContainer>
      <Select onChangeType={handleChangeType} />
      {todoThings.map((item)=>{
          return(
            (selectType==="All" || item.workType===selectType) && (
              <List 
                  key={item.id} 
                  text={item.text} 
                  type={item.workType} 
                  onDelectItem={onDelectItem} 
                  id={item.id}
                />
            )
            )
        
        // if(selectType==="All"){
        //   return(
        //   <List 
        //     key={item.id} 
        //     text={item.text} 
        //     type={item.workType} 
        //     onDelectItem={onDelectItem} 
        //     id={item.id}
        //   />
        // )}else if(item.workType===selectType){
        //   return(
        //     <List 
        //       key={item.id} 
        //       text={item.text} 
        //       type={item.workType} 
        //       onDelectItem={onDelectItem} 
        //       id={item.id}
        //     />
        //   )}
        }
        )}
      {/* {todoThings.filter((item)=>item.workType===selectType).map((item)=> <List key={item.id} text={item.text} type={item.workType} onDelectItem={onDelectItem} id={item.id}/>)} */}
  {/* {selectType==="private" && todoThings.map((item)=> <List key={item.id} text={item.text} type={item.workType} onDelectItem={onDelectItem} id={item.id}/>)}
  {selectType==="work" && todoThings.filter((item)=>item.workType==="work").map((item)=> <List key={item.id} text={item.text} type={item.workType} onDelectItem={onDelectItem} id={item.id}/>)}
  {selectType==="family" && todoThings.filter((item)=>item.workType==="family").map((item)=> <List key={item.id} text={item.text} type={item.workType} onDelectItem={onDelectItem} id={item.id}/>)}
  {selectType==="learning" && todoThings.filter((item)=>item.workType==="learning").map((item)=> <List key={item.id} text={item.text} type={item.workType} onDelectItem={onDelectItem} id={item.id}/>)} */}
      <Remove onRemoveAll={onRemoveAll}/>
    </ListContainer>
  )
}
