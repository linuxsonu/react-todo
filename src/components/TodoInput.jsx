import { useState } from 'react'

export default function TodoInput(props) {
    const { onAddTodo, inputValue, setInputValue } = props;
  return (
    <header>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Add your todo here..." />
        <button onClick={() => {
          onAddTodo(inputValue);
          setInputValue('');
        }}>Add Todo</button>
    </header>
  )
}
