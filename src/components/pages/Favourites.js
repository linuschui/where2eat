import React from 'react';
import './Favourites.css';
import TodoList from '../TodoList';

function Favourites() {
  return (
    <div className='favourites-container'>
      <TodoList />
    </div>
  );
}

export default Favourites;