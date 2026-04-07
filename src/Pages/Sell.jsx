// src/pages/Sell.jsx
import React, { useState } from 'react';

const Sell = ({ showToast }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    genre: 'Fiction',
    condition: 'New',
    price: '',
    listingType: 'sale',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إضافة منطق إرسال البيانات للسيرفر
    if (showToast) {
      showToast("Book Listed Successfully!");
    }
  };

  return (
    <div className="container py-5 mt-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold" style={{ color: '#2D1810' }}>Sell Your Book</h1>
        <p className="text-muted">List your book for sale or exchange with our community</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card card-custom p-4 p-md-5 shadow-lg border-0" style={{ borderRadius: '1.5rem' }}>
            <form onSubmit={handleSubmit}>
              
              {/* Row 1: Title & Author */}
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label className="form-label fw-medium">Book Title</label>
                  <input 
                    type="text" 
                    className="form-control p-3" 
                    style={{ borderRadius: '0.75rem', backgroundColor: '#F5EFE6', borderColor: '#C9A87C' }}
                    placeholder="Enter book title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-medium">Author</label>
                  <input 
                    type="text" 
                    className="form-control p-3" 
                    style={{ borderRadius: '0.75rem', backgroundColor: '#F5EFE6', borderColor: '#C9A87C' }}
                    placeholder="Enter author name"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>

              {/* Row 2: ISBN & Genre */}
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label className="form-label fw-medium">ISBN (Optional)</label>
                  <input 
                    type="text" 
                    className="form-control p-3" 
                    style={{ borderRadius: '0.75rem', backgroundColor: '#F5EFE6', borderColor: '#C9A87C' }}
                    placeholder="978-0-00-000000-0"
                    name="isbn"
                    value={formData.isbn}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-medium">Genre</label>
                  <select 
                    className="form-select p-3" 
                    style={{ borderRadius: '0.75rem', backgroundColor: '#F5EFE6', borderColor: '#C9A87C' }}
                    name="genre"
                    value={formData.genre}
                    onChange={handleChange}
                  >
                    <option>Fiction</option>
                    <option>Non-Fiction</option>
                    <option>Science</option>
                    <option>Mystery</option>
                    <option>Romance</option>
                    <option>Self-Development</option>
                    <option>Biography</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Condition & Price */}
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <label className="form-label fw-medium">Condition</label>
                  <select 
                    className="form-select p-3" 
                    style={{ borderRadius: '0.75rem', backgroundColor: '#F5EFE6', borderColor: '#C9A87C' }}
                    name="condition"
                    value={formData.condition}
                    onChange={handleChange}
                  >
                    <option>New</option>
                    <option>Like New</option>
                    <option>Good</option>
                    <option>Fair</option>
                    <option>Worn</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-medium">Price ($)</label>
                  <input 
                    type="number" 
                    className="form-control p-3" 
                    style={{ borderRadius: '0.75rem', backgroundColor: '#F5EFE6', borderColor: '#C9A87C' }}
                    placeholder="0.00"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Listing Type (Radio Buttons) */}
              <div className="mb-4">
                <label className="form-label fw-medium d-block mb-2">Listing Type</label>
                <div className="d-flex flex-wrap gap-2">
                  {['sale', 'exchange', 'both'].map((type) => (
                    <label 
                      key={type}
                      className={`d-flex align-items-center gap-2 px-4 py-2 rounded-pill border ${formData.listingType === type ? 'border-accent bg-light' : ''}`} 
                      style={{ cursor: 'pointer', borderColor: formData.listingType === type ? '#A67C52' : '#C9A87C' }}
                    >
                      <input 
                        type="radio" 
                        name="listingType" 
                        value={type} 
                        checked={formData.listingType === type}
                        onChange={handleChange}
                        className="form-check-input"
                        style={{ accentColor: '#A67C52' }}
                      />
                      <span className="text-capitalize">{type === 'sale' ? 'For Sale' : type === 'exchange' ? 'For Exchange' : 'Both'}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-4">
                <label className="form-label fw-medium">Description</label>
                <textarea 
                  className="form-control p-3" 
                  rows="4" 
                  style={{ borderRadius: '0.75rem', backgroundColor: '#F5EFE6', borderColor: '#C9A87C', resize: 'none' }}
                  placeholder="Describe your book's condition, any notable features..."
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Image Upload */}
              <div className="mb-4">
                <label className="form-label fw-medium">Book Cover Image</label>
                <div 
                  className="border border-dashed rounded-4 d-flex flex-column align-items-center justify-content-center p-5 text-center" 
                  style={{ borderColor: '#C9A87C', cursor: 'pointer', minHeight: '200px' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-image mb-3" style={{ color: '#7A6455' }} viewBox="0 0 16 16">
                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                  </svg>
                  <p className="mb-1" style={{ color: '#7A6455' }}>Click to upload or drag and drop</p>
                  <small style={{ color: '#A67C52' }}>PNG, JPG up to 10MB</small>
                </div>
              </div>

              {/* Buttons */}
              <div className="d-flex gap-3">
                <button type="button" className="btn btn-custom-secondary flex-grow-1 py-3 rounded-pill fw-semibold">
                  Save Draft
                </button>
                <button type="submit" className="btn btn-custom-primary flex-grow-1 py-3 rounded-pill fw-semibold">
                  Publish Listing
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;