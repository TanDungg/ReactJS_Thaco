import React, { useState } from 'react';
import TodoList from './components/TodoList';

TodoFeatures.propTypes = {

};

function TodoFeatures(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
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
    const [filteredStatus, setFilteredStatus] = useState('all')

    const handleTodoClick = (todo, idx) => {
        const newTodoList = [...todoList];
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new'
        };
        setTodoList(newTodoList);
    }
    const handleShowAll = () => {
        setFilteredStatus('all');
    }
    const handleShowComplete = () => {
        setFilteredStatus('completed');
    }
    const handleShowNew = () => {
        setFilteredStatus('new');
    }
    const renderedTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);
    console.log(renderedTodoList);
    return (
        <div>
            <h3>TodoList</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
            <button onClick={handleShowAll}>Show All</button>
            <button onClick={handleShowComplete}>Show Completed</button>
            <button onClick={handleShowNew}>Show New</button>
        </div>
    );
}

export default TodoFeatures;