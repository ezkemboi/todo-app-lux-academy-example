import React, { useEffect, useState } from 'react';
import './App.css';
import data from './data';

function App() {
  // useEffect -> when the an app first loads 
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]); 

  const handleFetchData = async () => {
    // set to state
    setTodos(data);
    setLoading(false);
  }

  // componentDidmount
  useEffect(() => {
    setTimeout(() => handleFetchData(), 1000) // call function that fetches data 
  }, [])

  // if one item changes, you make some changes -> when someone complete a todo, you make a request
  // useEffect(() => {

  // }, [status])

  // console.log({ todos })

  const handleCompleteTodo = (id) => {
    console.log({ id })
    let currentTodos = todos;
    currentTodos.map(todo => {
      if(todo.id === id) {
        todo.status = 'complete'
      }
    })

    setTodos(() => [...currentTodos]); // replace the state
  }

  return (
    <div
      className="App"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '60px'
      }}
    >
      {
        loading ?
        <p>Loading.......</p>
        :
        <div>
          {
            todos.map((todo) => {
              return (
                <div key={todo.id} style={{ padding: '20px' }}>
                  <h4 style={{ fontColor: 'red'}}>{todo.name}</h4>
                  <p>{todo.assignee}</p>
                  <p>{todo.dueDate}</p>
                  <p>{todo.status}</p>
                  {
                    todo.status === 'incomplete' &&
                    <button style={{ cursor: "pointer" }} onClick={() => handleCompleteTodo(todo.id)}>
                      Complete Todo
                    </button>
                  }
                </div>
              )
            })
          }
        </div>
      }
    </div>
  );
}

export default App;
