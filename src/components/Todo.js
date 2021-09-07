import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Todo = () => {
  testApi = 'https://60eedea7eb4c0a0017bf4685.mockapi.io/api/test/todo/';

  useEffect(() => {
    async function getData() {
      await axios.get(testApi);
    }
    getData();
    // console.log(getData);
  }, [getData]);
  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
