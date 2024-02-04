import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.text}
          category={task.category}
          text={task.text}
          onDelete={() => onDeleteTask(task.text)}
        />
      ))}
    </div>
  );
}

export default TaskList;
