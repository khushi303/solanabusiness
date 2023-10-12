import React from 'react';
import team1 from '../assets/images/team-img1.png';
import team2 from '../assets/images/team-img2.png';
import team3 from '../assets/images/team-img3.png';
import team4 from '../assets/images/team-img4.png';

function team() {
    return (
        <div>
            <section class="bg-yellow03">
                <div class="container">
                    <h2 class="ff-poppins fs-48 fw-700 text-align-center pt-42">TEAM</h2>
                    <div class="row pt-38 pb-62">
                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 pb-24">
                            <img src={team1} alt="sec-c" class="w-100" />
                            <p class="ff-poppins fs-24 fw-700 text-align-center pt-26 mb-0">Jhone Doe</p>
                            <p class="ff-poppins font-size-18 fw-400 text-align-center">Manager</p>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 pb-24">
                            <img src={team2} alt="sec-c" class="w-100" />
                            <p class="ff-poppins fs-24 fw-700 text-align-center pt-26 mb-0">Jhone Doe</p>
                            <p class="ff-poppins font-size-18 fw-400 text-align-center">Manager</p>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 pb-24">
                            <img src={team3} alt="sec-c" class="w-100" />
                            <p class="ff-poppins fs-24 fw-700 text-align-center pt-26 mb-0">Jhone Doe</p>
                            <p class="ff-poppins font-size-18 fw-400 text-align-center">Manager</p>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 pb-24">
                            <img src={team4} alt="sec-c" class="w-100" />
                            <p class="ff-poppins fs-24 fw-700 text-align-center pt-26 mb-0">Jhone Doe</p>
                            <p class="ff-poppins font-size-18 fw-400 text-align-center">Manager</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default team