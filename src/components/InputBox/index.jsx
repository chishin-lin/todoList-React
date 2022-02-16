import {useState } from 'react';
import SelectButton from '../InputBox/SelectButton';
import styled from 'styled-components';

// const Top = styled.div`
// display:flex;
// flex-direction: column;
// align-items: center;
// `;
const ButtonContainer =styled.div`
    width:360px;
    display:flex;
    justify-content:space-between;
    margin:5px;
`;
const InputContainer = styled.div`
    margin:5px;
    display:flex;
    align-items: center;
`;
const AddBtn=styled.button`
    background-color: rgba(0,0,0,.8);
    color: rgb(32 163 152);
    font-size: 25px;
    font-weight: 900;
    border:none;
    border-radius: 4px;
    width: 30px;
    height: 30px;
`;
const InputTodo = styled.input`
    background-color: transparent;
    border: none;
    font-size:16px;
    border-bottom: 2px solid rgba(0,0,0,0.8);
    margin: 10px 8px;
    width: 400px;
    padding: 8px;
::placeholder,
  ::-webkit-input-placeholder {
    color:#c8dddd;
    font-weight: 700;
  }
  :-ms-input-placeholder {
     color: red;
  }
`;
export default function Index({onCreateTodo}) {
    let id =1;
    const [todo,setTodo]=useState({
        workType:"private",
        text:'',
        id: id,
    });
    const handleSubmit=(e)=>{
        onCreateTodo(todo);
        setTodo({
            workType:"private",
            text:'',
            id: todo.id+1,
        });
    };
    const handleChooseType=(text)=>{
        setTodo({...todo, workType:text})
    }

  return (
    <>
        <ButtonContainer>
            <SelectButton text="private" type={todo.workType} onClick={()=>handleChooseType("private")}/>
            <SelectButton text="work" type={todo.workType} onClick={()=>handleChooseType("work")}/>
            <SelectButton text="family" type={todo.workType} onClick={()=>setTodo({...todo,workType:"family"})}/>
            <SelectButton text="learning" type={todo.workType} onClick={()=>setTodo({...todo,workType:"learning"})}/>
        </ButtonContainer>

        <InputContainer>
            <InputTodo placeholder='add the task ...' value={todo.text} onChange={(e)=>setTodo({...todo,text:e.target.value})}/>
            <AddBtn onClick={handleSubmit}>+</AddBtn>
        </InputContainer>
    </> )
}
