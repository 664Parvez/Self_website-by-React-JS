import React from 'react'

import BlogImg from '../img/b.webp'

const Blog = () => {
    return (
        <>
            <div className="blog_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <img className='card-img-top' src={ BlogImg } alt="" />
                                <div className="card-body">
                                    <div className="card-title"><h2>One Blog</h2></div>
                                    <div className="card-text">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus andae, soluta neque dolores vero sapiente dicta! Accusantium, vero quibusdam! </p>
                                    </div>
                                    <a href="" className='btn'>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <img className='card-img-top' src={ BlogImg } alt="" />
                                <div className="card-body">
                                    <div className="card-title"><h2>Two Blog</h2></div>
                                    <div className="card-text">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus andae, soluta neque dolores vero sapiente dicta! Accusantium, vero quibusdam! </p>
                                    </div>
                                    <a href="" className='btn btn-light'>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <img className='card-img-top' src={ BlogImg } alt="" />
                                <div className="card-body">
                                    <div className="card-title"><h2>Third Blog</h2></div>
                                    <div className="card-text">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus andae, soluta neque dolores vero sapiente dicta! Accusantium, vero quibusdam! </p>
                                    </div>
                                    <a href="" className='btn btn-light'>Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog