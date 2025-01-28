import React from 'react';

const ConfirmationModal = ({ onConfirm }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      onConfirm();
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default ConfirmationModal;
