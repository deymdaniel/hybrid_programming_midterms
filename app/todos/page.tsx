"use client";

import { useState, useEffect } from "react";

interface Todo {
    id: number;
    todo: string;
    completed: boolean;
    }

export default function TodosPage() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/todos')
            .then(res => res.json())
            .then(data => {
                setTodos(data.todos);
                setLoading(false);
            });
    }, []);
    const filteredTodos = todos.filter((t) => {
    if (filter === 'completed') return t.completed;
    if (filter === 'pending') return !t.completed;
    return true;
  });

    if (loading) {
        return <h2>Loading Todos...</h2>;
    }

    return (
    <div>
      
      <div style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
        <button onClick={() => setFilter('all')} disabled={filter === 'all'}>Show All</button>
        <button onClick={() => setFilter('completed')} disabled={filter === 'completed'}>Completed Only</button>
        <button onClick={() => setFilter('pending')} disabled={filter === 'pending'}>Pending Only</button>
      </div>

      <ul style={{ listStyleType: 'square' }}>
        {filteredTodos.map((t) => (
          <li key={t.id} className="mb-2">
            {t.todo} <strong>{t.completed ? '[Done]' : '[Pending]'}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}