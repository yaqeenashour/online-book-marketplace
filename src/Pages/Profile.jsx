import React, { useState } from 'react';
import BookCard from '../components/BookCard';
import { books } from '../data/data';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('myBooks');

  const exchangeRequests = [
    { id: 1, title: "The Great Gatsby", requester: "@bookworm42", type: "incoming", img: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=60&h=90&fit=crop" },
    { id: 2, title: "Project Hail Mary", requester: "@sciencenerd", type: "outgoing", img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=60&h=90&fit=crop" }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'myBooks':
        return (
          <div className="row">
            {books.slice(0, 4).map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        );
      case 'wishlist':
        return (
          <div className="row">
            {books.slice(4, 8).map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        );
      case 'requests':
        return (
          <div className="row g-3">
            {exchangeRequests.map(req => (
              <div className="col-12" key={req.id}>
                <div className="card card-custom p-3 flex-row align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src={req.img} alt="Book" className="rounded" style={{width: '50px', height: '70px', objectFit: 'cover'}} />
                    <div>
                      <h6 className="mb-0">{req.title}</h6>
                      <small className="text-muted">{req.type === 'incoming' ? `Incoming from ${req.requester}` : `Outgoing to ${req.requester}`}</small>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    {req.type === 'incoming' ? (
                      <>
                        <button className="btn btn-sm btn-custom-primary px-3">Accept</button>
                        <button className="btn btn-sm btn-custom-secondary px-3">Decline</button>
                      </>
                    ) : (
                      <span className="badge bg-warning text-dark">Pending</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'recommendations':
        return (
          <div className="row">
            {books.slice(2, 6).map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container py-5 mt-5">
    
      <div className="card card-custom border-0 shadow-lg rounded-4 overflow-hidden mb-4">
        <div className="card-body p-4 p-md-5">
          <div className="row align-items-center">
        
            <div className="col-auto mb-3 mb-md-0">
              <div className="position-relative">
                <div 
                  className="rounded-circle d-flex justify-content-center align-items-center shadow-sm" 
                  style={{
                    width: '120px', 
                    height: '120px', 
                    background: 'linear-gradient(135deg, #A67C52 0%, #C9A87C 100%)',
                    padding: '4px'
                  }}
                >
                  <div className="w-100 h-100 rounded-circle d-flex justify-content-center align-items-center" style={{backgroundColor: '#F5EFE6', width: '100%', height: '100%'}}>
                    <span className="display-4 fw-bold" style={{color: '#A67C52'}}>YA</span>
                  </div>
                </div>
              
                <button className="btn btn-sm btn-custom-primary rounded-circle position-absolute" style={{bottom: '0', right: '0', width: '36px', height: '36px'}}>
                  <i className="bi bi-pencil"></i>
                </button>
              </div>
            </div>

            <div className="col">
              <h2 className="mb-1" style={{fontFamily: "'Playfair Display', serif"}}>Yaqeen Ashour</h2>
              <p className="text-muted mb-3">Book enthusiast | Fiction lover | 47 exchanges</p>
              
              <div className="d-flex flex-wrap gap-4">
                <div className="text-center pe-3 border-end">
                  <h4 className="mb-0 fw-bold">23</h4>
                  <small className="text-muted d-block">Books Listed</small>
                </div>
                <div className="text-center pe-3 border-end">
                  <h4 className="mb-0 fw-bold">47</h4>
                  <small className="text-muted d-block">Exchanges</small>
                </div>
                <div className="text-center">
                  <h4 className="mb-0 fw-bold">4.9</h4>
                  <small className="text-muted d-block">Rating</small>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-auto mt-3 mt-md-0 text-md-end">
              <button className="btn btn-custom-primary px-4">
                <i className="bi bi-pencil-square me-2"></i> Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      <ul className="nav nav-pills mb-4 p-2 rounded-3 justify-content-center shadow-sm" style={{backgroundColor: 'white'}}>
        {['myBooks', 'wishlist', 'requests', 'recommendations'].map((tab) => (
          <li className="nav-item" key={tab}>
            <button
              className={`nav-link rounded-pill px-4 ${activeTab === tab ? 'active text-white' : 'text-muted'}`}
              style={activeTab === tab ? {backgroundColor: '#A67C52'} : {}}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'myBooks' && 'My Books'}
              {tab === 'wishlist' && 'Wishlist'}
              {tab === 'requests' && 'Exchange Requests'}
              {tab === 'recommendations' && 'Recommendations'}
            </button>
          </li>
        ))}
      </ul>

      <div className="fade-in">
        {renderContent()}
      </div>
    </div>
  );
};

export default Profile;