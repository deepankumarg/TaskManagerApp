import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onUpdateTask, onDeleteTask }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onUpdateTask={onUpdateTask}
            onDeleteTask={onDeleteTask}
          />
        ))
      ) : (
        <p><h3>No tasks. Add a task!</h3></p>
      )}
    </div>
  );
};

export default TaskList;
