import React from 'react'
import { ScrollAppear } from '../animation/ScrollAppear'


function Stories() {
    return (
        <ScrollAppear>
            <section className="py-5 stories-section">
                <div className="container-fluid" style={{padding: '0px 48px', margin: '0px'}}>
                    <div className="mb-4">
                        <span className="badge rounded-pill px-5 py-2 fw-light" style={{ backgroundColor: '#6ec994', fontSize: '1.2rem' }}>
                            Stories of Hope
                        </span>
                        <h2 className="fw-bold display-5 mt-4">By you It's happened</h2>
                        <p className="text-muted fs-5">Meet the children whose lives have been transformed through your kindness.</p>
                    </div>

                    <div className="mt-5">
                        <div className="row align-items-center mb-5 pb-4">
                            <div className="col-auto">
                                <div className="rounded-circle overflow-hidden shadow-sm" style={{ width: '180px', height: '180px' }}>
                                    <img src="/assets/Stories_img01.webp" alt="Aina" className="w-100 h-100 object-fit-cover" />
                                </div>
                            </div>
                            <div className="col ms-md-5 mt-4 mt-md-0">
                                <h3 className="fw-bold h2 mb-3">Aina, 8 years old</h3>
                                <p className="fs-5 lh-base ms-md-5" style={{ color: '#27ae60', maxWidth: '600px' }}>
                                    Once struggling with hunger and uncertainty, Aina now attends school regularly and dreams of becoming a teacher.
                                </p>
                            </div>
                        </div>
                        
                        <div className="row align-items-center mb-5 pb-4">
                            <div className="col-auto">
                                <div className="rounded-circle overflow-hidden shadow-sm" style={{ width: '180px', height: '180px' }}>
                                    <img src="/assets/Stories_img02.webp" alt="Daniel" className="w-100 h-100 object-fit-cover" />
                                </div>
                            </div>
                            <div className="col ms-md-5 mt-4 mt-md-0">
                                <h3 className="fw-bold h2 mb-3">Daniel, 12 years old</h3>
                                <p className="fs-5 lh-base ms-md-5" style={{ color: '#27ae60', maxWidth: '600px' }}>
                                    With access to education and care, Daniel has regained confidence and is learning to believe in his future again.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollAppear>
    )
}

export default Stories