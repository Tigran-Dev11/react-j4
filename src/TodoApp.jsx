import React, { useState, useEffect } from 'react';
import * as S from './styled';

function TodoApp() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    setTodos([...todos, { title, description, completed: false }]);
    setTitle('');
    setDescription('');
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleToggle = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'uncompleted') return !todo.completed;
    return true;
  });

  return (
    <S.Container>
      <S.Input 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Заголовок" 
      />
      <S.Input 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Описание" 
      />
      <S.Button onClick={handleAdd}>Добавить</S.Button>
      <S.Select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">Все</option>
        <option value="completed">Выполненные</option>
        <option value="uncompleted">Невыполненные</option>
      </S.Select>
      {filteredTodos.map((todo, index) => (
        <div key={index}>
        <S.Title style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
  {todo.title}
</S.Title>
          <S.Description>{todo.description}</S.Description>
          <S.Button onClick={() => handleToggle(index)}>
            {todo.completed ? 'Отметить как невыполненное' : 'Отметить как выполненное'}
          </S.Button>
          <S.Button onClick={() => handleDelete(index)}>Удалить</S.Button>
        </div>
      ))}
    </S.Container>
  );
}

export default TodoApp;
