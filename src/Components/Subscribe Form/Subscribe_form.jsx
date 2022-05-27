import React from 'react'

const Subscribe_form = () => {
    return (
        <>
            <div className="subscribe_section">
                <div className="container text-center">
                    <p>|| Get Latest Updates </p>
                    <h1>Subscribe For Newsletter </h1>
                    <div className="row">
                        <div className="container form_section">
                            <div className="row">
                                <div className="col-lg-10">                                                                                                                                       
                                    <form action="">                                                                    
                                        <input type="text" className='form-control' placeholder='Enter your email here .....' />                                                                                                                                                                                   
                                    </form>
                                </div>
                                <div className="col-lg-2">
                                    <a href='' className='btn'>Subscribe</a>
                                </div>
                            </div>
                        </div>                                                                              
                    </div>
                    <div className="contact_details">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <h5 className='phone'> <i className="fa-solid fa-phone"></i> +880 1766 - 118094</h5>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <h5 className='email'> <i className="fa-solid fa-envelope"></i> parvezrabbi664@gmail.com</h5>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="social_section">
                                    <li><a href=""><i className="fa-brands fa-facebook-square"></i></a></li>
                                    <li><a href=""><i className="fa-brands fa-linkedin"></i></a></li>
                                    <li><a href=""><i className="fa-brands fa-behance-square"></i></a></li>
                                    <li><a href=""><i className="fa-brands fa-twitter-square"></i></a></li>
                                    <li><a href=""><i className="fa-brands fa-youtube-square"></i></a></li>
                                    <li><a href=""><i className="fa-brands fa-github-square"></i></a></li>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>                                                                                                                 
    )
}

export default Subscribe_form