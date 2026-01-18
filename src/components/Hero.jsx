import React from 'react'
import { ScrollAppear } from '../animation/ScrollAppear';

function Hero() {
    return (
        <ScrollAppear>
            <section id='home' className="hero-section mt-5" style={{ backgroundColor: '#1c7c44', minHeight: '100vh', overflow: 'hidden',display: 'flex', alignItems: 'center' }}>
                <div className="hero-container" style={{ margin: '0px', padding: '0px'}}>
                    <div className="row" style={{ margin: '0px'}}>
                        <div className="col-lg-6 d-flex flex-column" style={{ padding: '0px', minHeight: '100vh'}}>
                            <div className="p-4 p-md-5 shadow-lg h-100" style={{ backgroundColor: '#e67e22', color: 'white' }}>
                                <h1 className="block fw-bold mb-4" style={{ fontSize: 'calc(2rem + 1.5vw)', maxWidth: '300px', lineHeight: '1.2'}}>
                                    Every Child Deserves a Place to Call Home
                                </h1>
                                <p className="mb-4" style={{ fontSize: '1.25rem'}}>
                                    Join us in providing nutrition, education, and a loving family environment for 50+ children at ORPHANA. Your small act creates their big future.
                                </p>
                                <button className="btn btn-donate py-3 px-4 fw-bold rounded-pill">
                                    Change a Life Today
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-6 position-relative" style={{ padding: '0px'}}>
                            <div className="container"  style={{ paddingTop: '15px'}}>
                                <div className="mb-4 shadow-strong overflow-hidden" style={{ width: '85%', transform: 'translateX(-20px)', position: 'relative', zIndex: '10'}}>
                                    <img src="/assets/hero_img02.webp" className="w-100" alt="Happy child" style={{ height: '300px', objectFit: 'cover' }}/>
                                </div>
                                <div className="shadow-strong overflow-hidden" style={{ marginTop: '-80px', transform: 'translateX(20px)', position: 'relative', zIndex: '1'}}>
                                    <img src="/assets/hero_img01.webp" className="w-100" alt="Children group" style={{ height: '300px', objectFit: 'cover' }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollAppear>
    )
}

export default Hero