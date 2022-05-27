import React from 'react'

import ImgOne from '../img/1.png'
import ImgTwo from '../img/2.png'
import ImgThree from '../img/3.png'
import ImgFour from '../img/4.png'

const Company_logo = () => {
    return (
        <>
        <div className="client_section">
            <div className="container">
                <p>|| Favourite Clients</p>
                <h1>Work With Trusted Company.</h1>
                <div className="row text-center mt-5">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <img src={ ImgOne } alt="" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <img src= { ImgTwo } alt="" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <img src={ ImgThree } alt="" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <img src={ ImgFour } alt="" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Company_logo