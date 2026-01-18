import React from 'react'
import { Link as ScrollLink } from "react-scroll"

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-lg fixed-top">
            <div className="container-md">
                <a className="navbar-brand d-flex align-items-center fw-semibold" href="#" style={{ color: '#e67e22' }}>
                    <i className="bi bi-heart-fill me-2 fs-5"></i>
                    ORPHANA
                </a>
                <button 
                    className="navbar-toggler border-0 shadow-none" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    {/* <span className="navbar-toggler-icon"></span> */}
                    <div className="toggler-icon-wrapper">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-3 mb-lg-0 d-flex flex-column flex-lg-row align-items-center text-center gap-3">
                        <li className="nav-item">
                            <ScrollLink 
                                to="home" 
                                spy={true} 
                                hashSpy={true}
                                smooth={true} 
                                offset={-70} 
                                duration={500}
                                isDynamic={true} 
                                className="nav-link custom-nav px-lg-4"
                                activeClass="active"
                                style={{ cursor: 'pointer' }}
                            >
                                Home
                            </ScrollLink>
                        </li>

                        <li className="nav-item">
                            <ScrollLink 
                                to="about" 
                                spy={true} 
                                smooth={true} 
                                offset={-50} 
                                duration={500} 
                                className="nav-link custom-nav px-lg-4"
                                activeClass="active"
                                style={{ cursor: 'pointer' }}
                            >
                                About Us
                            </ScrollLink>
                        </li>

                        <li className="nav-item">
                            <ScrollLink 
                                to="stories" 
                                spy={true} 
                                smooth={true} 
                                offset={-50} 
                                duration={500} 
                                className="nav-link custom-nav px-lg-4"
                                activeClass="active"
                                style={{ cursor: 'pointer' }}
                            >
                                Stories
                            </ScrollLink>
                        </li>

                        <li className="nav-item">
                            <ScrollLink 
                                to="challenges" 
                                spy={true} 
                                smooth={true} 
                                offset={-50} 
                                duration={500} 
                                className="nav-link custom-nav px-lg-4"
                                activeClass="active"
                                style={{ cursor: 'pointer' }}
                            >
                                Challenges
                            </ScrollLink>
                        </li>
                    </ul>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-donate p-1 px-5 fw-bold rounded-5 rounded-pill w-100 mt-3 mt-lg-0" type="submit">DONATE</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav