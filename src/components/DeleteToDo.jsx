import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../features/todo/todoSlice';

function DeleteToDo() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [editedMessage, setEditedMessage] = useState('');
  const [editId, setEditId] = useState(null); // State to track which todo is being edited

  const handleUpdate = () => {
    if (editedMessage.trim() !== '') {
      dispatch(updateTodo({
        id: editId,
        message: editedMessage
      }));
      setEditedMessage(''); // Reset the edited message state
      setEditId(null); // Reset the editId state
    }
  };

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editId === todo.id ? (
              // Render input field if current todo is being edited
              <input
                type="text"
                value={editedMessage}
                onChange={(e) => setEditedMessage(e.target.value)}
                className="mr-2 px-2 py-1 rounded border border-gray-400"
              />
            ) : (
              // Render todo message if not being edited
              <div className='text-white'>{todo.message}</div>
            )}
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              delete
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                {/* SVG path for delete icon */}
              </svg>
            </button>
            <br />
            {editId === todo.id ? (
              // Render update button if current todo is being edited
              <button
                onClick={handleUpdate}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                update
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  {/* SVG path for update icon */}
                </svg>
              </button>
            ) : (
              // Render update todo button if not being edited
              <button
                onClick={() => {
                  setEditedMessage(todo.message); // Populate input with current todo message
                  setEditId(todo.id); // Set editId to current todo id
                }}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                update todo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  {/* SVG path for update icon */}
                </svg>
              </button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default DeleteToDo;
