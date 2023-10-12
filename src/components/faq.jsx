import React from 'react';
import footerlogo from '../assets/images/footer-logo.png';
import discord from '../assets/images/discord-icon.png';
import twiter from '../assets/images/twitter-icon.png';

function faq() {
    return (
        <div>
            <footer class="bg-yellow">
                <div class="container">
                    <h2 class="ff-poppins fw-700 fs-48 text-align-center pt-58 pb-26">FAQ</h2>
                </div>
                <div class="container">
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed bg-col-sec ff-poppins font-size-18 fw-600"
                                    type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                    aria-expanded="false" aria-controls="flush-collapseOne">
                                    Amet vel eget nisi, sed ut massa turpis sodales nunc.
                                </button>
                            </h2>
                            <div id="flush-collapseOne"
                                class="accordion-collapse collapse bg-col-sec ff-poppins font-size-18 fw-400"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body mw-866">Enim scelerisque quisque egestas velit, eget tempus, arcu
                                    pulvinar in. Quis sed at sodales aliquam. Amet fermentum,
                                    lectus nulla tincidunt egestas.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed bg-col-sec ff-poppins font-size-18 fw-600"
                                    type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                    aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Amet vel eget nisi, sed ut massa turpis sodales nunc.
                                </button>
                            </h2>
                            <div id="flush-collapseTwo"
                                class="accordion-collapse collapse bg-col-sec ff-poppins font-size-18 fw-400"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body mw-866">Enim scelerisque quisque egestas velit, eget tempus, arcu
                                    pulvinar in. Quis sed at sodales aliquam. Amet fermentum,
                                    lectus nulla tincidunt egestas.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed bg-col-sec ff-poppins font-size-18 fw-600"
                                    type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                    aria-expanded="false" aria-controls="flush-collapseThree">
                                    Amet vel eget nisi, sed ut massa turpis sodales nunc.
                                </button>
                            </h2>
                            <div id="flush-collapseThree"
                                class="accordion-collapse collapse bg-col-sec ff-poppins font-size-18 fw-400"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body mw-866">Enim scelerisque quisque egestas velit, eget tempus, arcu
                                    pulvinar in. Quis sed at sodales aliquam. Amet fermentum,
                                    lectus nulla tincidunt egestas.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed bg-col-sec ff-poppins font-size-18 fw-600"
                                    type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                                    aria-expanded="false" aria-controls="flush-collapseFour">
                                    Amet vel eget nisi, sed ut massa turpis sodales nunc.
                                </button>
                            </h2>
                            <div id="flush-collapseFour"
                                class="accordion-collapse collapse bg-col-sec ff-poppins font-size-18 fw-400"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body mw-866">Enim scelerisque quisque egestas velit, eget tempus, arcu
                                    pulvinar in. Quis sed at sodales aliquam. Amet fermentum,
                                    lectus nulla tincidunt egestas.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed bg-col-sec ff-poppins font-size-18 fw-600"
                                    type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                                    aria-expanded="false" aria-controls="flush-collapseFive">
                                    Amet vel eget nisi, sed ut massa turpis sodales nunc.
                                </button>
                            </h2>
                            <div id="flush-collapseFive"
                                class="accordion-collapse collapse bg-col-sec ff-poppins font-size-18 fw-400s"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body mw-866">Enim scelerisque quisque egestas velit, eget tempus, arcu
                                    pulvinar in. Quis sed at sodales aliquam. Amet fermentum,
                                    lectus nulla tincidunt egestas.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="d-flex justify-content-center pt-88">
                        <img src={footerlogo} alt="footer-logo" class="w-100 mw-524 cur-pointer" />
                    </div>
                    <div class="d-flex justify-content-center align-items-center pt-26">
                        <span class="mr-46">
                            <a href="https://discord.com/">
                                <img src={discord} alt='discord' className='' />
                            </a>
                        </span>
                        <span>
                            <a href="https://twitter.com/login">
                                <img src={twiter} alt='discord' />
                            </a>
                        </span>
                    </div>
                    <p class="ff-poppins font-size-18 fw-400 text-align-center mt-5 mb-0 pb-48">@Copyright 2021</p>
                </div>
            </footer>
        </div>
    )
}

export default faq