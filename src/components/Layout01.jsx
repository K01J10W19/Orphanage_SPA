import React from 'react'
import { ScrollAppear } from '../animation/ScrollAppear'

function Layout01() {
    return (
        <ScrollAppear>
            <section id='stories' className="py-3" style={{ backgroundColor: '#e67e22', color: 'white', fontFamily: "'Inter', sans-serif" }}>
                <div className="container text-center">
                    <h2 className="display-5 mb-0 d-flex align-items-center justify-content-center flex-wrap">
                        <span className="fw-light me-5" style={{ letterSpacing: '0.50em' }}>Stories of</span> 
                        <span className='display-3' style={{ fontWeight: '900'}}>Change</span>
                    </h2>
                </div>
            </section>
        </ScrollAppear>
    )
}

export default Layout01