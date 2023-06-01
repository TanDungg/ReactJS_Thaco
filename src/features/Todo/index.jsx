import React, { useState } from 'react';
import TodoList from './components/TodoList';

TodoFeatures.propTypes = {

};

function TodoFeatures(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'New'
        },
        {
            id: 2,
            title: 'Slpeep',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Code',
            status: 'new'
        }
    ];
    const [todoList, setTodoList] = useState(initTodoList);
    const handleTodoClick = (todo, idx) => {
        const newTodoList = [...todoList];
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new'
        };
        setTodoList(newTodoList);
    }
    return (
        <div>
            <h3>TodoList</h3>
            <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
        </div>
    );
}

export default TodoFeatures;