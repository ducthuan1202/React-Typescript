import React from 'react';
import { TodoModel } from 'models/TodoModel';

interface TodoItemProps {
    todo: TodoModel;
    onSelectTodo: (todo: TodoModel) => void;
}

export const TodoItem:React.FC<TodoItemProps> = React.memo(({todo, onSelectTodo}) => {
    return (
        <div className="alert alert-primary">
            
            {todo.name}

            <button type="button" className="btn btn-link" onClick={() => onSelectTodo(todo)}>Edit</button>

            <span className="badge badge-light float-right">{todo.status}</span>

        </div>
    )
});