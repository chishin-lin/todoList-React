import {useState} from "react"
import './App.css';
import List from './components/List/ListsBox';
import InputBox from './components/InputBox';
import styled from 'styled-components';

const HeaderTitle=styled.div`
    font-size: 35px;
    font-weight:400;
    background-color: #ede4d3;
    padding: 10px;
    margin: 55px;
    box-shadow: 0px 5px 15px rgba(0,0,0,0.3);
    width: 700px;
    border-radius: 12px;
    text-shadow: 0px 4px 5px rgba(0,0,0,0.3);
`;
function App() {
  const [ todoThings,setTodoThing ]=useState([])
  const handleCreateTodo =(todo)=>{
    setTodoThing([...todoThings,todo])
  };
  const handleRemoveAll =()=>{
    setTodoThing([]);
  };
  const handleDelectItem=(id)=>{
    console.log(id)
    setTodoThing(
      todoThings.filter((item)=>item.id!==id)
    )
  }
  return (
    <div className="App">
      <HeaderTitle >
        My TodoList
      </HeaderTitle>
      <InputBox onCreateTodo={handleCreateTodo} />
      <List todoThings={todoThings} onRemoveAll={handleRemoveAll} onDelectItem={handleDelectItem}/>
    </div>)
    }

export default App;
