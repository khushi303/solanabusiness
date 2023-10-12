import React from 'react';
import burgur1 from '../assets/images/burgur1.png';
import burgur2 from '../assets/images/burgur2.png';

function roadmap() {
    return (
        <div>
            <section class="bg-yellow position-relative">
                <div class="container">
                    <h2 class="ff-poppins fs-48 fw-700 text-align-center pt-73 pb-92">ROADMAP 1.0</h2>
                    <div class="timeline pb-106">
                        <div class="cont left">
                            <div class="content mb-0">
                                <h2 class="ff-poppins fs-24 fw-700 mb-16">Q4 2021</h2>
                                <ol class="pl-23 mb-0 list_decimal">
                                    <li className='list_decimal ff-poppins fs-24 fw-400'>Launch SFFB</li>
                                    <li className='list_decimal ff-poppins fs-24 fw-400'>SELL OUT</li>
                                    <li className='list_decimal ff-poppins fs-24 fw-400'>Apply for secondary marketplace listings</li>
                                </ol>
                            </div>
                        </div>
                        <div class="cont right">
                            <div class="content mb-0">
                                <h2 class="ff-poppins fs-24 fw-700 mb-16">Q1 2022</h2>
                                <ol class="pl-23 mb-0">
                                    <li className='list_decimal ff-poppins fs-24 fw-400'>Charity Giveaway</li>
                                    <li className='list_decimal ff-poppins fs-24 fw-400'>Launch Adopt-A-Penguin Program</li>
                                    <li className='list_decimal ff-poppins fs-24 fw-400'>Secure Partnerships</li>
                                </ol>
                            </div>
                        </div>
                        <div class="cont left">
                            <div class="content mb-0">
                                <h2 class="ff-poppins fs-24 fw-700 mb-16">Q2 2022</h2>
                                <ol class="pl-23 mb-0">
                                    <li className='list_decimal ff-poppins fs-24 fw-400'>SFFB Merch Release</li>
                                    <li className='list_decimal ff-poppins fs-24 fw-400'>Stay tune for Roadmap 2.0</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pos-abs1 dis-none dis-lg-block">
                    <img src={burgur1} alt="burgur" />
                </div>
                <div class="pos-abs2 dis-none dis-lg-block">
                    <img src={burgur1} alt="burgur" />
                </div>
                <div class="pos-abs3 dis-none dis-lg-block">
                    <img src={burgur1} alt="burgur" />
                </div>
                <div class="pos-abs4 dis-none dis-lg-block">
                    <img src={burgur1} alt="burgur" />
                </div>
                <div class="pos-as1 dis-none dis-lg-block">
                    <img src={burgur2} alt="burgur" />
                </div>
                <div class="pos-as2 dis-none dis-lg-block">
                    <img src={burgur2} alt="burgur" />
                </div>
                <div class="pos-as3 dis-none dis-lg-block">
                    <img src={burgur2} alt="burgur" />
                </div>
                <div class="pos-as4 dis-none dis-lg-block">
                    <img src={burgur2} alt="burgur" />
                </div>
            </section>
        </div>
    )
}

export default roadmap