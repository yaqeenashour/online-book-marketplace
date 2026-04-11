// src/pages/Home.jsx
import React from 'react';
import BookCard from '../components/BookCard';
import CategoryCard from '../components/CategoryCard';
import { books, categories } from '../data/data';
const Home = ({ navigateTo, showDetails }) => {
    // فلترة الكتب المتاحة للتبادل
    const exchangeBooks = books.filter(b => b.exchange);
    return (
        <div>
            {/* Hero Section */}
            <div className="py-5 position-relative overflow-hidden" style={{backgroundColor: '#E8DFD1'}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <span className="badge rounded-pill mb-3" style={{backgroundColor: 'rgba(201, 168, 124, 0.2)', color: '#8B6544'}}>Welcome to BookLoop</span>
                            <h1 className="display-4 fw-bold mb-3" style={{color: '#2D1810'}}>Where Stories Find New Chapters</h1>
                            <p className="lead mb-4" style={{color: '#4A3528'}}>
                                "A book is a dream that you hold in your hand." — Neil Gaiman. Discover, exchange, and share the joy of reading with fellow book lovers.
                            </p>
                            <button onClick={() => navigateTo('explore')} className="btn btn-custom-primary btn-lg rounded-pill me-2">Explore Books</button>
                            <button onClick={() => navigateTo('exchange')} className="btn btn-custom-secondary btn-lg rounded-pill">Start Exchange</button>
                        </div>

                        {/* Hero Images Grid - Matches Screenshot Layout */}
                        <div className="col-lg-6 d-none d-lg-block">
                            <div className="position-relative">
                                <div className="row g-3">
                                    {/* Column 1 */}
                                    <div className="col-4">
                                        <div className="mb-3 rounded-4 overflow-hidden shadow-lg" style={{transform: 'rotate(-6deg)', transition: 'transform 0.3s'}}>
                                            <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=300&fit=crop" className="img-fluid" alt="Book" />
                                        </div>
                                        <div className="rounded-4 overflow-hidden shadow-lg" style={{transform: 'rotate(3deg)', transition: 'transform 0.3s'}}>
                                            <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&h=250&fit=crop" className="img-fluid" alt="Book" />
                                        </div>
                                    </div>
                                    {/* Column 2 */}
                                    <div className="col-4 mt-5">
                                        <div className="mb-3 rounded-4 overflow-hidden shadow-lg" style={{transform: 'rotate(2deg)', transition: 'transform 0.3s'}}>
                                            <img src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=200&h=280&fit=crop" className="img-fluid" alt="Book" />
                                        </div>
                                        <div className="rounded-4 overflow-hidden shadow-lg" style={{transform: 'rotate(-3deg)', transition: 'transform 0.3s'}}>
                                            <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?w=200&h=220&fit=crop" className="img-fluid" alt="Book" />
                                        </div>
                                    </div>
                                    {/* Column 3 */}
                                    <div className="col-4 mt-3">
                                        <div className="mb-3 rounded-4 overflow-hidden shadow-lg" style={{transform: 'rotate(6deg)', transition: 'transform 0.3s'}}>
                                            <img src="https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=200&h=260&fit=crop" className="img-fluid" alt="Book" />
                                        </div>
                                        <div className="rounded-4 overflow-hidden shadow-lg" style={{transform: 'rotate(-2deg)', transition: 'transform 0.3s'}}>
                                            <img src="https://images.unsplash.com/photo-1589998059171-988d887df646?w=200&h=280&fit=crop" className="img-fluid" alt="Book" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Search Section */}
            <div className="py-4" style={{backgroundColor: '#E8DFD1'}}>
                <div className="container">
                    <div className="input-group input-group-lg shadow-sm rounded-pill overflow-hidden" style={{maxWidth: '800px', margin: '0 auto'}}>
                <span className="input-group-text bg-white border-0 ps-4">
                    <i className="bi bi-search" style={{color: '#7A6455'}}></i>
                </span>
                        <input type="text" className="form-control border-0 bg-white" placeholder="Search for books, authors, or ISBN..." />
                        <button className="btn btn-custom-primary rounded-0 px-4" type="button">Search</button>
                    </div>
                </div>
            </div>
            {/* Categories */}
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bold" style={{color: '#2D1810'}}>Browse by Category</h2>
                    <p className="text-muted">Find your next favorite read in our curated collections</p>
                </div>
                <div className="row g-4 justify-content-center">
                    {categories.map((cat, i) => (
                        <CategoryCard key={i} category={cat} onClick={() => navigateTo('explore')} />
                    ))}
                </div>
            </div>
            {/* Recommended */}
            <div className="py-5" style={{backgroundColor: '#E8DFD1'}}>
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <h3 className="fw-bold mb-0">Recommended for You</h3>
                            <small className="text-muted">Handpicked based on trending titles</small>
                        </div>
                        <button onClick={() => navigateTo('explore')} className="btn btn-sm btn-link text-decoration-none d-flex align-items-center" style={{color: '#A67C52'}}>
                            View All <i className="bi bi-arrow-right ms-1"></i>
                        </button>
                    </div>
                    <div className="row">
                        {books.slice(0, 5).map(book => <BookCard key={book.id} book={book} onClick={() => showDetails(book)} />)}
                    </div>
                </div>
            </div>
            {/* Exchange Section */}
            <div className="container py-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h3 className="fw-bold mb-0">Books for Exchange</h3>
                        <small className="text-muted">Give your books a new home</small>
                    </div>
                    <button onClick={() => navigateTo('exchange')} className="btn btn-sm btn-link text-decoration-none d-flex align-items-center" style={{color: '#A67C52'}}>
                        See All <i className="bi bi-arrow-right ms-1"></i>
                    </button>
                </div>
                <div className="row">
                    {exchangeBooks.slice(0, 4).map(book => <BookCard key={book.id} book={book} onClick={() => showDetails(book)} />)}
                </div>
            </div>
            {/* Featured Section - Dark Theme */}
            <div className="py-5 text-white" style={{backgroundColor: '#2D1810'}}>
                <div className="container">
                    <div className="text-center mb-4">
                        <h3 className="fw-bold">Featured This Week</h3>
                        <small style={{color: '#C9A87C'}}>Staff picks and bestsellers</small>
                    </div>
                    <div className="d-flex gap-3 overflow-auto pb-3 hide-scrollbar">
                        {books.map(book => (
                            <div key={book.id} className="flex-shrink-0" style={{width: '180px', cursor: 'pointer'}} onClick={() => showDetails(book)}>
                                <div className="position-relative rounded-3 overflow-hidden mb-2" style={{aspectRatio: '2/3'}}>
                                    <img src={book.cover} className="w-100 h-100 object-fit-cover opacity-75" alt={book.title} />
                                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{background: 'linear-gradient(to top, #2D1810, transparent)'}}></div>
                                </div>
                                <h6 className="mb-0 text-truncate small">{book.title}</h6>
                                <small style={{color: '#C9A87C'}}>{book.author}</small>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;