import React from 'react'

const HappyClient = () => {
    return (
        <>
        <div className="happy_client_section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-12 happy_client_number">
                        <div className="row text-center">
                            <div className="col-4">
                                <i className="fa-solid fa-people-group"></i>
                            </div>
                            <div className="col-8">
                                <h2 className='fw-bold fs-1'>360 +</h2>
                                <h5>Happy Clients</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 happy_client_number">
                        <div className="row text-center">
                            <div className="col-4">
                            <i className="fa-solid fa-list-check"></i>
                            </div>
                            <div className="col-8">
                                <h2 className='fw-bold fs-1'>154 +</h2>
                                <h5>Project Completed</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 happy_client_number">
                        <div className="row text-center">
                            <div className="col-4">
                                <i className="fa-solid fa-calendar-days"></i>
                            </div>
                            <div className="col-8">
                                <h2 className='fw-bold fs-1'>2 +</h2>
                                <h5>Years of Experience</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default HappyClient