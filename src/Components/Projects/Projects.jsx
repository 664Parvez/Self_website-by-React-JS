import React from 'react'

import Image from '../img/b.webp'

const Projects = () => {
  return (
    <>
        <div className="project_section">
          <div className="container">
            <h1 className='pb-3'>|| My Valuable Projects</h1>
            <div className="row">
              <div className="col-lg-4">
                <div className="projectDetails">
                  <img src= { Image } alt="" />
                  <h5 className='pt-3'>Digital Marketing Agency</h5>
                  <p>Website</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="projectDetails">
                  <img src= { Image } alt="" />
                  <h5 className='pt-3'>Training Center Institute</h5>
                  <p>Website</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="projectDetails">
                  <img src= { Image } alt="" />
                  <h5 className='pt-3'>Restaurant</h5>
                  <p>Website</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Projects