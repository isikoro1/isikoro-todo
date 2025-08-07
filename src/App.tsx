import { useState } from 'react';
import './App.css';
import { Task } from './models/Task';


function App() {
  const [todos, setTodos] = useState<Task[]>([]);
  const [taskInput, setTaskInput] = useState<string>('');

  const addTask = () => {
      if (!taskInput.trim()) return;
      const newTask = new Task(Date.now(), taskInput);
      setTodos([...todos, newTask]);
      setTaskInput('');
    };

  const toggleTodo = (id: number) => {
  const updatedTodos = todos.map(task => {
    if (task.id === id) {
      task.toggleDone(); // ← クラス内メソッドでisDone反転
    }
    return task;
  });
  setTodos([...updatedTodos]); // ← 再描画のために新しい配列として再代入
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">ToDoアプリ</h1>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="新しいタスクを入力"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTask}>
          追加
        </button>
      </div>

      <ul className="list-group">
        {todos.map(task => (
          <li
            key={task.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              task.isDone ? 'text-decoration-line-through text-muted' : ''
            }`}
          >
            {task.title}
            <button className="btn btn-sm btn-outline-success" onClick={() => toggleTodo(task.id)}>
              {task.isDone ? '未完了に戻す' : '完了'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
