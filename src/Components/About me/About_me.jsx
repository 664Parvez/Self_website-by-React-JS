import React from 'react'

const About = () => {
    return (
        <>
        <div className="about_section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 pt-5">
                    <span className="d-inline-block" tabIndex="0" data-bs-toggle="tooltip" title="React JS">
                        <a href="" className='react_logo'><i className="fa-brands fa-react"></i></a>
                    </span>
                    <span className="d-inline-block" tabIndex="0" data-bs-toggle="tooltip" title="HTML">
                        <a href="" className='html_logo'><i className="fa-brands fa-html5"></i></a>
                    </span>
                    <span className="d-inline-block" tabIndex="0" data-bs-toggle="tooltip" title="CSS">
                        <a href="" className='css_logo'><i className="fa-brands fa-css3-alt"></i></a>
                    </span>
                    <span className="d-inline-block" tabIndex="0" data-bs-toggle="tooltip" title="BootStrap">
                        <a href="" className='bootstrap_logo'><i className="fa-brands fa-bootstrap"></i></a>
                    </span>    
                    <span className="d-inline-block" tabIndex="0" data-bs-toggle="tooltip" title="JavaScript">
                        <a href="" className='js_logo'><i className="fa-brands fa-js-square"></i></a>
                    </span>
                    </div>
                    <div className="col-lg-7">
                        <h2 className='fw-bold about_heading'>|| About Me</h2>
                        <p> I am a passionate Web Designer and Developer with 3 years colorful experience. I have strongly experience on HTML, CSS, BOOTSTRAP, JavaScript (ES6), PHP, ReactJS, Next JS and Word Press. I design responsive web design. Since I am capable for this job, so I decided that I give my quality service on Fiverr. All time I provide you my best quality work. </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About