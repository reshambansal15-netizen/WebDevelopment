import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className="card">
      <h1>🧸 My Cute To-Do List 🎀</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask();
        }}
      >
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onFocus={() => console.log("Input Focused")}
          onBlur={() => console.log("Input Left")}
        />

        <button type="submit">
          Add Task
        </button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            onDoubleClick={() => toggleTask(task.id)}
          >
            <span
              className={
                task.completed ? "completed" : ""
              }
            >
              {task.text}
            </span>

            <button
              className="delete"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

        <p className="hint">
            💗 Double-click a task to mark it complete ✨
        </p>
    </div>
  );
}

export default Todo;