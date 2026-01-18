import React from 'react'
import { ScrollAppear } from '../animation/ScrollAppear'


function Challenges() {
    return(
        <ScrollAppear>
            <section className="challenges-section py-5" style={{ backgroundColor: '#e67e22'}}>
                <div className="container-fluid" style={{padding: '0px 48px', margin: '0px'}}>
                    <div className="row g-4">
                        {/* Card 1: Food Insecurity */}
                        <div className="col-md-4">
                            <div className="challenge-card shadow-lg rounded-4 overflow-hidden position-relative">
                                <img src="src/assets/challenges_img01.webp" className="w-100 h-100 object-fit-cover" alt="Food Insecurity" />
                                <div className="challenge-overlay p-4 text-center">
                                    <h4 className="fw-bold mb-2">Food Insecurity & Malnutrition</h4>
                                    <p className="mb-0">Without consistent, healthy meals, their physical growth and brain development are permanently hindered.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Access to Education */}
                        <div className="col-md-4">
                            <div className="challenge-card shadow-lg rounded-4 overflow-hidden position-relative">
                                <img src="src/assets/challenges_img02.webp" className="w-100 h-100 object-fit-cover" alt="Education Access" />
                                <div className="challenge-overlay p-4 text-center">
                                    <h4 className="fw-bold mb-2 h5">Lack of Access to Education</h4>
                                    <p className="small mb-0">Without a basic education, they are trapped in a cycle of poverty with no pathway to a professional career.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Healthcare Disparity */}
                        <div className="col-md-4">
                            <div className="challenge-card shadow-lg rounded-4 overflow-hidden position-relative">
                                <img src="src/assets/challenges_img03.webp" className="w-100 h-100 object-fit-cover" alt="Healthcare Disparity" />
                                <div className="challenge-overlay p-4 text-center">
                                    <h4 className="fw-bold mb-2 h5">Healthcare Disparity</h4>
                                    <p className="small mb-0">Small health issues escalate into life-threatening emergencies or chronic disabilities.</p>
                                </div>
                            </div>
                        </div>

                        {/* Row 2: Card 4: Emotional Trauma */}
                        <div className="col-md-4">
                            <div className="challenge-card shadow-lg rounded-4 overflow-hidden position-relative">
                                <img src="src/assets/challenges_img04.webp" className="w-100 h-100 object-fit-cover" alt="Trauma" />
                                <div className="challenge-overlay p-4 text-center">
                                    <h4 className="fw-bold mb-2 h5">Emotional Trauma & Isolation</h4>
                                    <p className="small mb-0">Without counseling and a supportive family environment, children struggle with anxiety and social withdrawal.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 5: Unsafe Environments */}
                        <div className="col-md-4">
                            <div className="challenge-card shadow-lg rounded-4 overflow-hidden position-relative">
                                <img src="src/assets/challenges_img05.webp" className="w-100 h-100 object-fit-cover" alt="Unsafe Living" />
                                <div className="challenge-overlay p-4 text-center">
                                    <h4 className="fw-bold mb-2 h5">Unsafe Living Environments</h4>
                                    <p className="small mb-0">Lack of a "safe haven" leads to physical vulnerability and a constant state of "survival mode."</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 6: Exploitation */}
                        <div className="col-md-4">
                            <div className="challenge-card shadow-lg rounded-4 overflow-hidden position-relative">
                                <img src="src/assets/challenges_img06.webp" className="w-100 h-100 object-fit-cover" alt="Vulnerability" />
                                <div className="challenge-overlay p-4 text-center">
                                    <h4 className="fw-bold mb-2 h5">Vulnerability to Exploitation</h4>
                                    <p className="small mb-0">Without a secure home, they lose their right to a safe childhood and their legal identity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollAppear>
    )
}

export default Challenges