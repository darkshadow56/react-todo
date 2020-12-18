import { useState, useContext } from 'react';
import {
  FormGroup,
  Input,
  Button,
  Form,
  InputGroup,
  InputGroupAddon
} from 'reactstrap';

import { v4 } from 'uuid';
import { TodoContext } from '../context/TodoContext';
import { ADD_TODO } from '../context/action.types';
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const TodoForm = () => {
    const [todoString, setTodoString] = useState("");
    const { dispatch } = useContext(TodoContext);

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('todoString ===>', todoString);

      if (todoString === "") {
        return toast("Enter Something!", {type: "error"});
      }

      const todo = {
        todoString,
        id: v4()
      };

      dispatch({
        type: ADD_TODO,
        payload: todo
      });

      setTodoString("");

      console.log('e ==>', e);

    }

    return(
      <Form onSubmit={ handleSubmit }>
          <FormGroup>
              <InputGroup>
                <Input
                  type="text"
                  name="todo"
                  id="todo"
                  placeholder="Enter Your Task Here"
                  value={todoString}
                  onChange={e => setTodoString(e.target.value)}
                  autoComplete='off'
                />
                <InputGroupAddon addonType='prepend'>
                  <Button className='btn' color='warning' type='submit'>Add Task</Button>
                </InputGroupAddon>
              </InputGroup>
          </FormGroup>
          <ToastContainer position="bottom-center"/>
      </Form>
      
    );
};

export default TodoForm;
