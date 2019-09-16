import React from 'react';
import Todo from './Todo';
import style from './TodoList.style.css';

const createList = (items, remove) => items.map(item => (
    <Todo item={item} key={item.id} removeTodo={id => remove(id)} />));

const TodoList = props =>
    <div className={style.TodoListContainer}>
        <ul>
            {createList(props.todoItems, props.removeTodo)}
        </ul>
    </div>;

export default TodoList