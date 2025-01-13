import { useState } from "react"

export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
          handleAddTodos(todoValue);
          setTodoValue('');
        }
      };

    return (
        <header>
            <input 
            value={todoValue} 
            onChange={(e) => {
                setTodoValue(e.target.value)
            }} 
            placeholder="Enter Todo..."
            onKeyDown={todoValue !== '' ? handleKeyPress : () => {}}
            />
            <button onClick={() => {
                if (todoValue !== ''){
                    handleAddTodos(todoValue)
                    setTodoValue('')
                }
            }}>Add</button>
        </header>
    )
}