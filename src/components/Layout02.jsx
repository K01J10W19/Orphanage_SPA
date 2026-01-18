import React from 'react'
import { ScrollAppear } from '../animation/ScrollAppear'


function Layout02() {
    return (
        <ScrollAppear>
            <section id='challenges' className="py-3" style={{ backgroundColor: '#1c7c44', color: 'white', fontFamily: "'Inter', sans-serif" }}>
                <div className="container text-center">
                    <h2 className="display-5 mb-0 d-flex align-items-center justify-content-center flex-wrap text-center">
                        <span className="fw-light" style={{ letterSpacing: '0.50em' }}>FOR CHILDREN</span>
                        <span  className='display-3' style={{ fontWeight: '900'}}>Challenges</span>
                    </h2>
                </div>
            </section>
        </ScrollAppear>
    )
}

export default Layout02