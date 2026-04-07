// src/components/CategoryCard.jsx
import React from 'react';

const CategoryCard = ({ category, onClick }) => {
  return (
    <div className="col-6 col-md-4 col-lg-2 mb-3">
      <div 
        className="card text-center p-3 h-100 border-0 category-card-beige" // أضفنا كلاس مخصص
        onClick={onClick}
        style={{ cursor: 'pointer' }}
      >
        <div className="display-4 mb-2">{category.icon}</div>
        <h6 className="fw-bold mb-1">{category.name}</h6>
        <small style={{color: '#7A6455'}}>{category.count} books</small>
      </div>
    </div>
  );
};

export default CategoryCard;