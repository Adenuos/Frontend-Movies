import React from 'react';

function DeleteConfirmation({ movieTitle, onDelete, onCancel }) {
  return (
    <div>
      <h2>Confirm Deletion</h2>
      <p>Are you sure you want to delete the movie "{movieTitle}"?</p>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default DeleteConfirmation;
