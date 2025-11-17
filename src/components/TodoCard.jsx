import React from 'react'

export default function TodoCard(props) {
  const {children, onEdit, onDelete, todoIndex } = props;
  return (
    <li className="todoItem">
        {children}
        <div className='actionsContainer'>
            <button className='completeBtn' onClick={() => onEdit(todoIndex)}>
                <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button className='deleteBtn' onClick={() => onDelete(todoIndex)}>     
                <i className="fa-regular fa-trash-can"></i>
            </button>
        </div>
       
    </li>
  )
}
