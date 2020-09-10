import React from 'react';
import { TodoModel } from 'models/TodoModel';
import { TodoItem } from './TodoItem';

interface TodoListProps{
    todos: Array<TodoModel>;
    onSelectTodo: (todo: TodoModel) => void;
}

export const TodoList:React.FC<TodoListProps> = React.memo(({todos, onSelectTodo}) => {
    return (
        <div className="card">
            <div className="card-header">
                TodoList
            </div>
            <div className="card-body">
                {
                    todos.map((item, index) => <TodoItem key={index} todo={item} onSelectTodo={onSelectTodo}/>)
                }
            </div>
        </div>
    )
});