import React, { useState } from 'react';
import ConfirmationModal from './Confirmationmodal';

const Task = ({ task, onUpdateTask, onDeleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);
//   console.log(task)
  const handleEdit = () => setIsEditing(true);

  const handleSave = () => {
    onUpdateTask(editedTask);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  return (
    <div className="task">
      {isEditing ? (
        <>
          <input
            name="title"
            value={editedTask.title}
            onChange={handleChange}
          />
          <textarea
            name="description"
            value={editedTask.description}
            onChange={handleChange}
          ></textarea>
          <input
            name="dueDate"
            type="date"
            value={editedTask.dueDate}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due: {task.dueDate}</p>
          <button onClick={handleEdit}>Edit</button>
          <ConfirmationModal onConfirm={() => onDeleteTask(task.id)} />
        </>
      )}
    </div>
  );
};

export default Task;
