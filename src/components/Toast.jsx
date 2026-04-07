// src/components/Toast.jsx
import React from 'react';

const Toast = ({ message }) => {
  if (!message) return null;
  
  return (
    <div className="toast-custom bg-success text-white px-4 py-2 rounded-3 shadow d-flex align-items-center gap-2">
      <i className="bi bi-check-circle-fill"></i> {message}
    </div>
  );
};

export default Toast;