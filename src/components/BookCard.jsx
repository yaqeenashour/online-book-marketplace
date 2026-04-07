// src/components/BookCard.jsx
import React from 'react';

const BookCard = ({ book, onClick }) => (
  <div className="col-6 col-md-4 col-lg-3 mb-4">
    <div 
      className="card h-100 border-0 overflow-hidden book-card-custom" 
      onClick={onClick} 
      style={{cursor: 'pointer', backgroundColor: '#FFFDF9'}}
    >
      {/* قسم الصورة مع تأثير الزووم */}
      <div className="position-relative overflow-hidden" style={{ height: '280px' }}>
        <img 
            src={book.cover} 
            className="card-img-top w-100 h-100 book-img-custom" 
            alt={book.title} 
            style={{objectFit: 'cover'}} 
        />
        
        {/* طبقة التظليل الخفيفة */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)', pointerEvents: 'none'}}></div>
        
        {/* طبقة الوصف التي تظهر عند الهوفر */}
        <div className="position-absolute bottom-0 start-0 w-100 p-3 book-overlay-custom">
            <p className="text-white small mb-0 line-clamp-2">{book.description?.substring(0, 60)}...</p>
        </div>

        {/* شارة الحالة (New/Used) */}
        <span className="position-absolute top-0 end-0 m-2 badge rounded-pill bg-white text-dark shadow-sm py-1.5 px-2" style={{fontSize: '0.7rem'}}>
            {book.condition}
        </span>
      </div>

      {/* جزء المحتوى */}
      <div className="card-body d-flex flex-column">
        <h6 className="card-title text-truncate mb-1 fw-bold" style={{color: '#2D1810'}}>{book.title}</h6>
        <p className="card-text small opacity-75 mb-2">{book.author}</p>
        
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="fw-bold fs-5" style={{color: '#A67C52'}}>${book.price}</span>
          
          {/* ✅ تم تحديث الأيقونة إلى Font Awesome */}
          <button 
            className="btn btn-light rounded-circle p-2 shadow-sm border" 
            onClick={(e) => { e.stopPropagation(); alert('Added to cart!'); }}
            title="Add to cart"
          >
               <i className="fa-solid fa-cart-plus" style={{color: '#A67C52'}}></i>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default BookCard;