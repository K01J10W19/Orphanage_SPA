import React from 'react'
import { ScrollAppear } from '../animation/ScrollAppear'

function About() {
    return (
        <ScrollAppear>
            <section id='about' className="about-section container-fluid py-5" style={{padding: '0px 48px'}}>
                    <div className="mb-5">
                        <h2 className="fw-bold display-5 mb-3" style={{color: '#1c7c44'}}>Why We Exist</h2>
                        <p className="fs-5 text-muted w-lg-75">
                            Founded in 2001, ORPHANA is a sanctuary for orphaned and abandoned children. 
                            We don't just provide a roof; we provide a childhood.
                        </p>
                    </div>

                    <div className="text-end mb-5">
                        <h2 className="fw-bold display-5 mb-3" style={{color: '#1c7c44'}}>Who We Serve</h2>
                        <p className="fs-5 text-muted ms-auto">
                            We care for children aged 0–18 who have lost parental support due to poverty, illness, or tragedy.
                        </p>
                    </div>

                    <div className="mt-5">
                        <h2 className="fw-bold display-5 mb-5" style={{color: '#1c7c44'}}>What We Do</h2>
                        <div className="row g-4 text-center"> 

                            <div className="col-md-4">
                                <div className="circular-img-container mx-auto mb-4">
                                    <img src="src/assets/What_We_Do_img01.webp" alt="Loving environment" className="img-fluid" />
                                </div>
                                <p className="fw-light fs-5 px-3">A loving and secure living environment</p>
                            </div>

                            <div className="col-md-4">
                                <div className="circular-img-container mx-auto mb-4">
                                    <img src="src/assets/What_We_Do_img02.webp" alt="Education" className="img-fluid" />
                                </div>
                                <p className="fw-light fs-5 px-3">Access to education and emotional support</p>
                            </div>

                            <div className="col-md-4">
                                <div className="circular-img-container mx-auto mb-4">
                                    <img src="src/assets/What_We_Do_img03.webp" alt="Necessities, Healthcare & Guidance" className="img-fluid" />
                                </div>
                                <p className="fw-light fs-5 px-3">Daily necessities, healthcare, and guidance</p>
                            </div>
                        </div>
                    </div>
            </section>
        </ScrollAppear>
    )
}

export default About