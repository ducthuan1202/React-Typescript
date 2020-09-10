import React from 'react';
import {TodoList} from 'features/todo/TodoList';
import {TodoForm} from 'features/todo/TodoForm';
import { TodoModel } from 'models/TodoModel';

const totoEmpty:TodoModel = {
    id: '',
    name: '',
    status: '',
}

export const Chapter1:React.FC = React.memo(() => {

    const todos:Array<TodoModel> = [
        {id: '1', name: 'todo 01', status: 'doing'},
        {id: '2', name: 'todo 02', status: 'done'},
        {id: '3', name: 'todo 03', status: 'waiting'},
    ];

    const [todo, setTodo] = React.useState<TodoModel>();

    const handleOnSelectTodo = (todo:TodoModel) => {
        setTodo(todo);
    }

    return (
        <div className="my-3">
            <div className="row">
            
                <div className={todo ? "col-md-6" : "col-md-12"}>
                    <TodoList todos={todos} onSelectTodo={handleOnSelectTodo}/>
                </div>

                { todo && <div className="col-md-6"><TodoForm todo={todo}/></div> }
                
            </div>            
        </div>
    )
});