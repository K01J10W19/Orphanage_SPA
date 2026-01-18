import React from 'react'
import { ScrollAppear } from '../animation/ScrollAppear'

function Impact() {
    return (
        <ScrollAppear>
            <section className="impact-section py-5 text-white" style={{ backgroundColor: '#1c7c44' }}>
                <div className="container-fluid text-center" style={{padding: '0px 48px', margin: '0px'}}>

                    <h2 className="display-5 fw-normal mb-5">
                        OUR IMPACT <span className="fw-black" style={{ fontWeight: '900', fontSize: '80px' }}>SINCE 2001</span>
                    </h2>

                    <div className="row g-4 mb-5">

                        <div className="col-md-4">
                            <i className="bi bi-mortarboard-fill display-1 mb-3"></i>
                            <h3 className="display-4 fw-bold mb-3 mt-3">120+</h3>
                            <p className="fw-bold fs-4 mb-3">Success Stories</p>
                            <p className="small px-lg-5 text-white-50">
                                Lorem ipsum dolor sit amet consectetur. 
                                Maecenas ac augue at erat hendrerit dictum.
                            </p>
                        </div>

                        <div className="col-md-4 border-start border-end border-white border-opacity-25">
                            <i className="bi bi-egg-fried display-1 mb-3"></i>
                            <h3 className="display-4 fw-bold mb-3 mt-3">45,000</h3>
                            <p className="fw-bold fs-4 mb-3">Nutritious Meals</p>
                            <p className="small px-lg-5 text-white-50">
                                Lorem ipsum dolor sit amet consectetur. 
                                Maecenas ac augue at erat hendrerit dictum.
                            </p>
                        </div>

                        <div className="col-md-4">
                            <i className="bi bi-book-half display-1 mb-3"></i>
                            <h3 className="display-4 fw-bold mb-3 mt-3">100%</h3>
                            <p className="fw-bold fs-4 mb-3">School Enrollment rate</p>
                            <p className="small px-lg-5 text-white-50">
                                Lorem ipsum dolor sit amet consectetur. 
                                Maecenas ac augue at erat hendrerit dictum.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Message */}
                    <div className="mt-5 pt-4">
                        <h4 className="fw-bold opacity-75 mb-2">Every number represents a life changed</h4>
                        <p className="fs-5 opacity-50">Thank you for being part of their journey</p>
                    </div>
                    
                </div>
            </section>
        </ScrollAppear>
    )
}

export default Impact