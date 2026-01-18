import React from 'react'


function Footer() {
    return (
        <footer className="footer-section py-3 text-white" style={{ backgroundColor: '#1c7c44'}}>
            <div className="container-fluid" style={{padding: '0px 48px', margin: '0px'}}>

                <div className="text-center mb-5">
                    <h2 style={{ fontFamily: "'Dancing Script', cursive", fontSize: '2.5rem' }}>
                        Together, we can end the cycle of neglect
                    </h2>
                </div>

                <div className="row g-5"> 
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="d-flex align-items-center mb-3" style={{ color: '#e67e22', letterSpacing: '2px' }}>
                            <i class="bi bi-heart-fill me-2 fs-5"></i>
                            <h3 className="fw-bold mb-0 text-uppercase">ORPHANA</h3>
                        </div>
                        <p className="small opacity-75 lh-lg" style={{ maxWidth: '300px' }}>
                            Lorem ipsum dolor sit amet consectetur. Congue id pellentesque turpis elit amet condimentum elementum et urna. Massa tellus vitae mauris viverra.
                        </p>
                        <div className="d-flex gap-3 mt-4 fs-5">
                            <a href="#" className="text-white opacity-75"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="text-white opacity-75"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="text-white opacity-75"><i className="bi bi-youtube"></i></a>
                            <a href="#" className="text-white opacity-75"><i className="bi bi-instagram"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 text-lg-center col-md-6 col-12">
                        <h5 className="fw-medium mb-4">Navigation</h5>
                        <ul className="list-unstyled opacity-75">
                            <li className="mb-3"><a href="#" className="text-white text-decoration-none">Home</a></li>
                            <li className="mb-3"><a href="#" className="text-white text-decoration-none">About Us</a></li>
                            <li className="mb-3"><a href="#" className="text-white text-decoration-none">Stories</a></li>
                            <li className="mb-3"><a href="#" className="text-white text-decoration-none">Challenges</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-12">
                        <p className="mb-4 opacity-75">Have questions or want to get involved? We would love to hear from you.</p>
                        <div className="mb-4">
                            <div className="small fw-bold opacity-50">Contact Info:</div>
                            <div>+1 (555) 000-1234 | info@orphananame.org</div>
                        </div>
                        <div>
                            <div className="small fw-bold opacity-50">Location:</div>
                            <div>123 Hope Lane, Compassion City, Country.</div>
                        </div>
                    </div>
                </div>

                <div className="border-top border-white border-opacity-50 mt-3 pt-3 d-flex justify-content-between align-items-center small opacity-50">
                    <p className="mb-0">© 2026 Shadient.co. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer