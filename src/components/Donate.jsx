import React from 'react'
import { ScrollAppear } from '../animation/ScrollAppear'


function Donate() {
    return (
        <ScrollAppear>
            <section className="donate-section py-5 bg-white">
                <div className="container-fluid text-center" style={{padding: '0px 48px', margin: '0px'}}>
                    
                    <div className="mb-5">
                        <span className="badge rounded-pill px-5 py-2 mb-3 fw-light" style={{ backgroundColor: 'rgb(110, 201, 148)', fontSize: '1.2rem' }}>
                            Donate
                        </span>
                        <h2 className="fw-bold display-5">Small Gift, Huge Impact</h2>
                        <p className="text-muted fs-5">Choose an amount that feels right for you. Every contribution, no matter the size, brings hope.</p>
                    </div>

                    <div className="row g-4 text-start">
                        {/* Card 1: Education */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                                <img src="src/assets/donate_img01.webp" className="card-img-top object-fit-cover" style={{ height: '180px'}} alt="Education" />
                                <div className="card-body p-3">
                                    <span className="badge bg-success-subtle text-success mb-2 px-2">Education</span>
                                    <h5 className="fw-bold mb-3">Help Azar to continue his study</h5>
                                    {/* Progress Bar */}
                                    <div className="progress mb-3" style={{ height: '8px' }}>
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '65%' }}></div>
                                    </div>
                                    {/* Stats Grid */}
                                    <div className="d-flex justify-content-between small text-muted mb-4">
                                        <div>Goal<div className="fw-bold text-dark">₹1234</div></div>
                                        <div>Collected<div className="fw-bold text-dark">₹1234</div></div>
                                        <div>Remaining<div className="fw-bold text-dark">₹1234</div></div>
                                    </div>
                                    {/* Action Row */}
                                    <div className="d-flex gap-2">
                                        <button className="btn btn-dark flex-grow-1 rounded-pill fw-bold py-2 d-flex align-items-center justify-content-center">
                                            DONATE <i className="bi bi-heart-fill ms-2 text-success"></i>
                                        </button>
                                        <button className="btn btn-outline-secondary rounded-circle px-2.5">
                                            <i className="bi bi-reply-fill"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Health */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                                <img src="src/assets/donate_img02.webp" className="card-img-top object-fit-cover" style={{ height: '180px'}} alt="Education" />
                                <div className="card-body p-3">
                                    <span className="badge bg-primary-subtle text-primary mb-2 px-2">Health</span>
                                    <h5 className="fw-bold mb-4 pb-3">Save Peter life</h5>
                                    {/* Progress Bar */}
                                    <div className="progress mb-3" style={{ height: '8px' }}>
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '90%' }}></div>
                                    </div>
                                    {/* Stats Grid */}
                                    <div className="d-flex justify-content-between small text-muted mb-4">
                                        <div>Goal<div className="fw-bold text-dark">₹1234</div></div>
                                        <div>Collected<div className="fw-bold text-dark">₹1234</div></div>
                                        <div>Remaining<div className="fw-bold text-dark">₹1234</div></div>
                                    </div>
                                    {/* Action Row */}
                                    <div className="d-flex gap-2">
                                        <button className="btn btn-dark flex-grow-1 rounded-pill fw-bold py-2 d-flex align-items-center justify-content-center">
                                            DONATE <i className="bi bi-heart-fill ms-2 text-success"></i>
                                        </button>
                                        <button className="btn btn-outline-secondary rounded-circle px-2.5">
                                            <i className="bi bi-reply-fill"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: School Construction */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                                <img src="src/assets/donate_img03.webp" className="card-img-top object-fit-cover" style={{ height: '180px'}} alt="Education" />
                                <div className="card-body p-3">
                                    <span className="badge bg-warning-subtle text-warning mb-2 px-2">Education</span>
                                    <h5 className="fw-bold mb-3">Build School for poor students</h5>
                                    {/* Progress Bar */}
                                    <div className="progress mb-3" style={{ height: '8px' }}>
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '50%' }}></div>
                                    </div>
                                    {/* Stats Grid */}
                                    <div className="d-flex justify-content-between small text-muted mb-4">
                                        <div>Goal<div className="fw-bold text-dark">₹1234</div></div>
                                        <div>Collected<div className="fw-bold text-dark">₹1234</div></div>
                                        <div>Remaining<div className="fw-bold text-dark">₹1234</div></div>
                                    </div>
                                    {/* Action Row */}
                                    <div className="d-flex gap-2">
                                        <button className="btn btn-dark flex-grow-1 rounded-pill fw-bold py-2 d-flex align-items-center justify-content-center">
                                            DONATE <i className="bi bi-heart-fill ms-2 text-success"></i>
                                        </button>
                                        <button className="btn btn-outline-secondary rounded-circle px-2.5">
                                            <i className="bi bi-reply-fill"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 4: Make them happy */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                                <img src="src/assets/donate_img04.webp" className="card-img-top object-fit-cover" style={{ height: '180px'}} alt="Education" />
                                <div className="card-body p-3">
                                    <span className="badge bg-success-subtle text-success mb-2 px-2">Education</span>
                                    <h5 className="fw-bold mb-3 pb-4">Make them happy</h5>
                                    {/* Progress Bar */}
                                    <div className="progress mb-3" style={{ height: '8px' }}>
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '80%' }}></div>
                                    </div>
                                    {/* Stats Grid */}
                                    <div className="d-flex justify-content-between small text-muted mb-4">
                                        <div>Goal<div className="fw-bold text-dark">₹1234</div></div>
                                        <div>Collected<div className="fw-bold text-dark">₹1234</div></div>
                                        <div>Remaining<div className="fw-bold text-dark">₹1234</div></div>
                                    </div>
                                    {/* Action Row */}
                                    <div className="d-flex gap-2">
                                        <button className="btn btn-dark flex-grow-1 rounded-pill fw-bold py-2 d-flex align-items-center justify-content-center">
                                            DONATE <i className="bi bi-heart-fill ms-2 text-success"></i>
                                        </button>
                                        <button className="btn btn-outline-secondary rounded-circle px-2.5">
                                            <i className="bi bi-reply-fill"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    {/* Carousel Arrows */}
                    <div className="mt-5 d-none d-sm-flex justify-content-center gap-3">
                        <button className="btn btn-outline-secondary rounded-circle border-opacity-25 p-3 d-flex align-items-center">
                            <i className="bi bi-chevron-left"></i>
                        </button>
                        <button className="btn btn-outline-secondary rounded-circle border-opacity-25 p-3 d-flex align-items-center">
                            <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>

                </div>
            </section>
        </ScrollAppear>
    )
}

export default Donate