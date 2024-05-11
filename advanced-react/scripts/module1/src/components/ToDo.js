import { useState } from 'react';
const ToDo = () => {
    const ToDoTemplate = props => (
        <tr>
            <td>
                <label>{props.id}</label>
            </td>
            <td>
                <input />
            </td>
            <td>
                <label>{props.createdAt}</label>
            </td>
        </tr>
    )
    const [todos, setTodos] = useState([
        {
            id: 'todo1',
            createdAt: '18:00'
        }, {
            id: 'todo2',
            createdAt: '20:30'
        }
    ]);
    const reverseOrder = () => {
        // Reverse is a mutative operation,
        setTodos([...todos].reverse());
    }
    // First exmaple with keys, show browser console to see the warning
    return (
        <div>
            <button onClick={reverseOrder}>Reverse</button>
            <table>
                <tbody>
                    {todos.map((todo, index) => (
                        <ToDoTemplate key={index} id={todo.id} createdAt={todo.createdAt} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ToDo;
