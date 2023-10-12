import React from 'react'
import logo from '../assets/images/logo.png';
import hsimg from '../assets/images/hero-section-img.png';
import headimg1 from '../assets/images/header-img1.png';
import headimg2 from '../assets/images/header-img2.png';
import burgur1 from '../assets/images/burgur1.png';
import burgur2 from '../assets/images/burgur2.png';

function Header() {
    return (
        <div>
            <div className='bg-yellow position-relative'>
                <div class="container">
                    <nav class="my-15 pos-fix bg-yellow">
                        <div class="d-flex justify-content-between align-items-center">
                            <img src={logo} alt="page-logo" class="w-100 mw-200 cur-pointer" />
                            <label for="menu_box" class="d-flex z-index-2 rotate mr-15">
                                <span class="mr_3"></span>
                                <span class="mr_3"></span>
                                <span class="mr_3"></span>
                            </label>
                            <input type="checkbox" id="menu_box" hidden />
                            <div class="d-flex gap-3 align-items-center small_screen justify-content-center">
                                <ul class="d-flex gap-3 list-unstyled align-items-center justify-content-center mb-0">
                                    <li><a href="#home" class="ff-poppins fs-18 text-black  nav-link">Home</a></li>
                                    <li><a href="#about" class="ff-poppins fs-18 text-black nav-link text-nowrap">About
                                        Us</a></li>
                                    <li><a href="#toke" class="ff-poppins fs-18 text-black nav-link">Tokenomics</a></li>
                                    <li><a href="#roadmap" class="ff-poppins fs-18 text-black nav-link">Roadmap</a></li>
                                    <li><a href="#contact" class="ff-poppins fs-18 text-black nav-link">Contact</a></li>
                                </ul>
                                <div class="d-flex justify-content-center">
                                    <button class="btn-wallet bor-radius bor-none">Connect Wallet</button>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div>
                    <img src={hsimg} alt='hero-section-img' className='w-100 ' />
                </div>
                <div className='position-relative'>
                    <div className='container'>
                        <h2 class="ff-poppins fs-36 fw-700 text-center pt-5 mt-4 mb-0">WELCOME TO</h2>
                        <div className='d-flex align-items-center justify-content-center flex-column pt-4'>
                            <img src={headimg1} alt='header-img1' className='w-100 mw-806 cur-pointer' />
                            <img src={headimg2} alt='header-img2' className='w-50 translate mw-345 cur-pointer' />
                        </div>
                    </div>
                    <div class="pos-a dis-none dis-md-block">
                        <img src={burgur1} alt="burgur" />
                    </div>
                    <div class="pos-ab dis-none dis-lg-block">
                        <img src={burgur2} alt="burgur" />
                    </div>
                    <div class="pos-a1 dis-none dis-lg-block">
                        <img src={burgur1} alt="burgur" />
                    </div>
                    <div class="pos-ab1 dis-none dis-md-block">
                        <img src={burgur2} alt="burgur" />
                    </div>
                    <div class="pos-a2 dis-none dis-lg-block">
                        <img src={burgur1} alt="burgur" />
                    </div>
                    <div class="pos-ab2 dis-none dis-md-block">
                        <img src={burgur2} alt="burgur" />
                    </div>
                    <div class="pos-a3 dis-none dis-md-block">
                        <img src={burgur1} alt="burgur" />
                    </div>
                    <div class="pos-ab3 dis-none dis-lg-block">
                        <img src={burgur2} alt="burgur" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header