import React from 'react'

const My_skills = () => {
    return (
        <>
        <div className="mySkill">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6" id='mySkills_section'>
                        <p>|| My Skills</p>
                        <h1>My Special Skills <br/>Field Here</h1>
                        <button className='btn mt-5 mySkills_btn'>Get Resume <span className='mx-2'> <i className="fa-solid fa-download"></i></span></button>
                    </div>
                    <div className="col-lg-6">
                        <div className='special_skills'>
                            <h5>JavaScript</h5>
                            <div className="progress">
                                <div className="progress-bar bg-light" role="progressbar" style={ { width: '87%', color: '#1A1B2F' } } aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">87%</div>
                            </div>
                        </div>
                        <div className='special_skills'>
                            <h5>React JS</h5>
                            <div className="progress">
                                <div className="progress-bar bg-light" role="progressbar" style={ { width: '78%', color: '#1A1B2F' } } aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">78%</div>
                            </div>
                        </div>
                        <div className='special_skills'>
                            <h5>Next JS</h5>
                            <div className="progress">
                                <div className="progress-bar bg-light" role="progressbar" style={ { width: '80%', color: '#1A1B2F' } } aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                            </div>
                        </div>
                        <div className='special_skills'>
                            <h5>API</h5>
                            <div className="progress">
                                <div className="progress-bar bg-light" role="progressbar" style={ { width: '70%', color: '#1A1B2F' } } aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default My_skills