import React from 'react';
import popularsectionimg from '../assets/images/popular-section-img.png'

function about() {
    return (
        <div className='bg-yellow03'>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-12 d-flex align-items-center justify-content-center">
                        <div class="pb-48 pb-lg-0 pt-29 pt-lg-0">
                            <div class="d-flex justify-content-center justify-content-lg-start">
                                <h2 class="ff-poppins fs-48 fw-700 pb-24">It was popularised</h2>
                            </div>
                            <p class="ff-poppins font-size-18 fw-400 pb-48 mw-591">Have you heard? We’re hiring! We have 3,333
                                working
                                positions
                                to fill
                                on the Solana blockchain. Once
                                all positions are
                                filled it’s crucial to stay on your toes because the corporate penguins are coming! Any
                                penguins
                                caught chilling on the
                                floor when corporate arrives will be immediately fired and swept away! This makes SFFB a
                                deflationary collection until
                                we reach a maximum staff of 1,666 mcnoots in total.</p>
                            <div class="d-flex justify-content-center justify-content-lg-start">
                                <button class="btn-discover ff-poppins fs-20 fw-500">DISCOVER MORE</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-12">
                        <img src={popularsectionimg} alt="cartoon" class="w-100" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about