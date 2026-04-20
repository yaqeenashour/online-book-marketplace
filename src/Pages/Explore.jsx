// src/pages/Explore.jsx
import React, { useState } from 'react';
import BookCard from '../components/BookCard';
import { books, genres } from '../data/data';
const Explore = ({ showDetails, showToast }) => { // استقبال الدالة هنا
    const [filters, setFilters] = useState({ genre: [], condition: [], minPrice: '', maxPrice: '' });
    const [filteredBooks, setFilteredBooks] = useState(books);
    const toggleFilter = (type, value) => {
        const current = filters[type];
        const newFilters = current.includes(value)
            ? current.filter(v => v !== value)
            : [...current, value];

        setFilters({...filters, [type]: newFilters});
    };
    const applyFilters = () => {
        let results = books;
        if (filters.genre.length > 0) results = results.filter(b => filters.genre.includes(b.genre));
        if (filters.condition.length > 0) results = results.filter(b => filters.condition.includes(b.condition));

        setFilteredBooks(results);
        showToast(`Found ${results.length} books`); // استخدام الدالة هنا
    };
    return (
        <div className="container py-5 mt-5">
            <div className="row">
                <div className="col-lg-3 mb-4">
                    <div className="card card-custom p-3 sticky-top" style={{top: '80px'}}>
                        <h5 className="mb-3">Filters</h5>

                        <div className="mb-3">
                            <label className="form-label fw-bold small">Genre</label>
                            <div className="d-flex flex-wrap gap-2">
                                {genres.map(g => (
                                    <button key={g}
                                            className={`filter-chip ${filters.genre.includes(g) ? 'active' : ''}`}
                                            onClick={() => toggleFilter('genre', g)}>
                                        {g}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold small">Condition</label>
                            <div className="d-flex flex-wrap gap-2">
                                {['New', 'Used', 'Like New'].map(c => (
                                    <button key={c}
                                            className={`filter-chip ${filters.condition.includes(c) ? 'active' : ''}`}
                                            onClick={() => toggleFilter('condition', c)}>
                                        {c}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <button className="btn btn-custom-primary w-100" onClick={applyFilters}>Apply Filters</button>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="row">
                        {filteredBooks.map(book => <BookCard key={book.id} book={book} onClick={() => showDetails(book)} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Explore;