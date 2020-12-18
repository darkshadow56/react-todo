import React, { useReducer } from 'react';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {TodoContext} from './context/TodoContext'
import todoReducer from './context/reducer';
import TodoForm from './Components/TodoForm';
import Todos from "./Components/Todos";
import { FcTodoList } from 'react-icons/fc';

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return(
    <TodoContext.Provider value={{todos, dispatch}}>
      <Container fluid>
        <h1 className='heading-text'>
          This is a Simple To-Do App Using Context API and Reducer <nbsp/> <FcTodoList />
        </h1>
        <span>
        <Todos/>
        </span>
        <TodoForm/>
        
      </Container>
    </TodoContext.Provider>
  );
};


export default App;
