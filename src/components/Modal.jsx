// src/components/Modal.jsx
import React from 'react';

const Modals = () => {
  return (
    <>
      {/* Login Modal */}
      <div className="modal fade" id="loginModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '1.5rem', backgroundColor: '#FFFDF9' }}>
            <div className="modal-header border-0 pb-0 text-center d-block pt-4">
              <h5 className="modal-title fw-bold" style={{ fontFamily: "'Playfair Display', serif", color: '#2D1810', fontSize: '1.75rem' }}>Welcome Back</h5>
              <p className="text-muted small mt-1">Login to continue to BookLoop</p>
              <button type="button" className="btn-close position-absolute top-0 end-0 m-3" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4 pt-2">
              <form>
                <div className="mb-3">
                  <label className="form-label small fw-medium text-muted">Email Address</label>
                  <div className="input-group">
                    <span className="input-group-text bg-transparent border-end-0 rounded-start-pill">
                      <i className="bi bi-envelope" style={{color: '#A67C52'}}></i>
                    </span>
                    <input type="email" className="form-control border-start-0 rounded-end-pill ps-0" placeholder="your@email.com" style={{borderColor: '#C9A87C'}} />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label small fw-medium text-muted">Password</label>
                  <div className="input-group">
                    <span className="input-group-text bg-transparent border-end-0 rounded-start-pill">
                       <i className="bi bi-lock" style={{color: '#A67C52'}}></i>
                    </span>
                    <input type="password" className="form-control border-start-0 rounded-end-pill ps-0" placeholder="••••••••" style={{borderColor: '#C9A87C'}} />
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="rememberMe" style={{backgroundColor: '#A67C52', borderColor: '#A67C52'}} />
                    <label className="form-check-label small text-muted" htmlFor="rememberMe">Remember me</label>
                  </div>
                  <a href="#" className="small text-decoration-none" style={{color: '#A67C52'}}>Forgot Password?</a>
                </div>
                <button type="button" className="btn btn-custom-primary w-100 rounded-pill py-2 mb-3" data-bs-dismiss="modal">Login</button>
                <div className="text-center">
                  <p className="mb-0 small text-muted">Don't have an account? 
                    <a href="#" className="fw-bold" style={{color: '#A67C52'}} data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#registerModal"> Sign Up</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Register Modal */}
      <div className="modal fade" id="registerModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-md"> {/* Larger modal for register */}
          <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '1.5rem', backgroundColor: '#FFFDF9' }}>
            <div className="modal-header border-0 pb-0 text-center d-block pt-4">
              <h5 className="modal-title fw-bold" style={{ fontFamily: "'Playfair Display', serif", color: '#2D1810', fontSize: '1.75rem' }}>Create Account</h5>
              <p className="text-muted small mt-1">Join our community of book lovers</p>
              <button type="button" className="btn-close position-absolute top-0 end-0 m-3" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4 pt-2">
              <form>
                <div className="mb-3">
                  <label className="form-label small fw-medium text-muted">Full Name</label>
                  <div className="input-group">
                    <span className="input-group-text bg-transparent border-end-0 rounded-start-pill">
                      <i className="bi bi-person" style={{color: '#A67C52'}}></i>
                    </span>
                    <input type="text" className="form-control border-start-0 rounded-end-pill ps-0" placeholder="John Doe" style={{borderColor: '#C9A87C'}} />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label small fw-medium text-muted">Email Address</label>
                  <div className="input-group">
                    <span className="input-group-text bg-transparent border-end-0 rounded-start-pill">
                      <i className="bi bi-envelope" style={{color: '#A67C52'}}></i>
                    </span>
                    <input type="email" className="form-control border-start-0 rounded-end-pill ps-0" placeholder="your@email.com" style={{borderColor: '#C9A87C'}} />
                  </div>
                </div>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label small fw-medium text-muted">Password</label>
                    <div className="input-group">
                      <span className="input-group-text bg-transparent border-end-0 rounded-start-pill">
                        <i className="bi bi-lock" style={{color: '#A67C52'}}></i>
                      </span>
                      <input type="password" className="form-control border-start-0 rounded-end-pill ps-0" placeholder="••••••••" style={{borderColor: '#C9A87C'}} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-medium text-muted">Confirm Password</label>
                    <div className="input-group">
                      <span className="input-group-text bg-transparent border-end-0 rounded-start-pill">
                         <i className="bi bi-shield-check" style={{color: '#A67C52'}}></i>
                      </span>
                      <input type="password" className="form-control border-start-0 rounded-end-pill ps-0" placeholder="••••••••" style={{borderColor: '#C9A87C'}} />
                    </div>
                  </div>
                </div>
                
                <div className="form-check mb-4">
                  <input className="form-check-input" type="checkbox" id="terms" style={{backgroundColor: '#A67C52', borderColor: '#A67C52'}} />
                  <label className="form-check-label small text-muted" htmlFor="terms">
                    I agree to the <a href="#" style={{color: '#A67C52'}}>Terms & Conditions</a>
                  </label>
                </div>

                <button type="button" className="btn btn-custom-primary w-100 rounded-pill py-2 mb-3" data-bs-dismiss="modal">Create Account</button>
                
                <div className="text-center">
                  <p className="mb-0 small text-muted">Already have an account? 
                    <a href="#" className="fw-bold" style={{color: '#A67C52'}} data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#loginModal"> Login</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modals;