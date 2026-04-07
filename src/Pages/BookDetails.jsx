// src/pages/BookDetails.jsx
import React from 'react';

const BookDetails = ({ book, goBack, showToast }) => {
  if (!book) return <div className="container mt-5">Book not found</div>;

  const handleBuy = () => {
    showToast('Added "${book.title}" to cart!');
  };

  const handleExchange = () => {
    showToast("Exchange request sent!");
  };

  return (
    <div className="container py-5 mt-5">
      <button onClick={goBack} className="btn btn-link text-muted mb-4 ps-0">&larr; Back to browsing</button>
      
      <div className="row g-5">
        {/* عمود الصورة */}
        <div className="col-md-4">
          <div className="position-sticky" style={{top: '100px'}}>
            <div className="position-relative rounded-4 overflow-hidden shadow-lg">
              <img 
                  src={book.cover} 
                  className="img-fluid w-100" 
                  alt={book.title} 
                  style={{ maxHeight: '500px', objectFit: 'cover' }}
              />
              {/* شارة الحالة على الصورة */}
              <div className="position-absolute top-0 end-0 m-3">
                  <span className="badge rounded-pill bg-white text-dark shadow-sm px-3 py-2 text-uppercase fw-normal">
                      {book.condition}
                  </span>
              </div>
            </div>
          </div>
        </div>

        {/* عمود التفاصيل */}
        <div className="col-md-8">
            <div className="d-flex flex-column h-100">
                {/* القسم العلوي */}
                <div>
                    <div className="mb-2">
                        <span className="badge rounded-pill px-3 py-2" style={{backgroundColor: 'rgba(166, 124, 82, 0.15)', color: '#A67C52'}}>{book.genre}</span>
                    </div>
                    
                    <h1 style={{fontFamily: "'Playfair Display', serif", color: '#2D1810', fontWeight: 'bold'}} className="mb-2">
                        {book.title}
                    </h1>
                    <p className="lead text-muted mb-3">by {book.author}</p>
                </div>

                {/* التقييم */}
                <div className="d-flex align-items-center gap-2 mb-4">
                    <div className="text-warning">
                        {[...Array(5)].map((_, i) => (
                            <i key={i} className={`bi ${i < Math.floor(book.rating) ? 'bi-star-fill' : 'bi-star'}`}></i>
                        ))}
                    </div>
                    <span className="fw-bold">{book.rating}</span>
                    <span className="text-muted small">(125 reviews)</span>
                </div>

                {/* السعر - تم إصلاحه لإزالة المربع الفارغ */}
                <div className="mb-4">
                    <h2 style={{color: '#A67C52', fontFamily: "'Playfair Display', serif", fontSize: '2.5rem'}}>
                        ${book.price}
                    </h2>
                    <p className="text-muted small mb-0">Inclusive of all taxes</p>
                </div>

                {/* الوصف */}
                <div className="mb-4">
                    <h5 className="fw-bold mb-2" style={{color: '#2D1810'}}>Description</h5>
                    <p className="text-muted" style={{lineHeight: '1.8'}}>
                        {book.description || "No description available."}
                    </p>
                </div>

                {/* تفاصيل إضافية (لملء الفراغ) */}
                <div className="row g-3 mb-4 py-3 border-top border-bottom">
                    <div className="col-6 col-sm-3 text-center">
                        <small className="text-muted d-block">Pages</small>
                        <span className="fw-bold">{book.pages || "320"}</span>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <small className="text-muted d-block">Language</small>
                        <span className="fw-bold">{book.language || "English"}</span>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <small className="text-muted d-block">Publisher</small>
                        <span className="fw-bold">Penguin Books</span>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <small className="text-muted d-block">Year</small>
                        <span className="fw-bold">2023</span>
                    </div>
                </div>

                {/* عن المؤلف (لملء المساحة المتبقية) */}
                <div className="mb-4">
                    <h5 className="fw-bold mb-2" style={{color: '#2D1810'}}>About the Author</h5>
                    <p className="text-muted small">
                        {book.author} is a bestselling author known for captivating storytelling. With a unique voice and compelling narratives, they have garnered a dedicated following of readers worldwide.
                    </p>
                </div>

                {/* أزرار الشراء والتبادل */}
                <div className="mt-auto pt-3">
                    <div className="row g-3">
                        <div className={book.exchange ? "col-8" : "col-12"}>
                            <button onClick={handleBuy} className="btn btn-custom-primary btn-lg w-100">
                                <i className="bi bi-cart-plus me-2"></i> Add to Cart
                            </button>
                        </div>
                        {book.exchange && (
                            <div className="col-4">
                                <button onClick={handleExchange} className="btn btn-custom-secondary btn-lg w-100">
                                    Exchange
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
