import React, { useState, useEffect } from "react";
import TodosList from "./TodosList";
import Header from "./Header"
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import NotMatch from "../pages/NotMatch";
import Navbar from "./Navbar"


const TodoContainer = props => {
  const [todos, setTodos] = useState(getInitialTodos());

  const handleChange = id => {
    setTodos(prevState =>
      prevState.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      }),
    )
  };

  const delTodo = id => {
    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id;
      }),
    ])
  };

  const addTodoItem = title => {
    const newTodo = {  
     id: uuidv4(),
      title: title,
      completed: false 
    };
    setTodos([...todos, newTodo])
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      }),
    )
  }

  /* useEffect(() => {
    const temp = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(temp)
    
    if (loadedTodos) {
      setTodos(loadedTodos)
    }
  }, []) */

  function getInitialTodos() {
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)
    return savedTodos || []
  }

  useEffect(() => {
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos])

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/"
          element={(<div className="container">
            <div className="inner">
              <Header />
              <InputTodo addTodoProps={addTodoItem} />
              <TodosList
                todos={todos}
                handleChangeProps={handleChange}
                deleteTodoProps={delTodo}
                setUpdate={setUpdate}
              />
            </div>
          </div>
          )}
        />
        <Route path="/about" component={About} element={<About />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </>
  );
}

export default TodoContainer;