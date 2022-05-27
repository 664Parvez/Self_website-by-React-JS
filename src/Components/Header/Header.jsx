import React, { useState, useEffect } from 'react'

import WhiteLogo from '../img/logo.png'
import BlackLogo from '../img/logo-black.png'

import Miself from '../img/miself.png'

import Skill_one from '../img/s1.png'
import Skill_two from '../img/s2.png'
import Skill_three from '../img/s3.png'
import Skill_four from '../img/s4.png'


const Header = () => {

    const [ skill_info, setSkill_info] = useState (  
        {
            info_one : 'HTML -> Hypertext Markup Language',
            info_two : 'React -> It is a Library of JavaScript',
            info_three : 'JavaScript -> JavaScript is a Web base Programming Language',
            info_four : 'CSS -> Cascading Style Sheet'
        }
    )
    const { info_one, info_two, info_three, info_four } = skill_info

    const [ skill_icon, setSkill_icon ] = useState ( {
        one : Skill_one,
        two : Skill_two,
        three : Skill_three,
        four : Skill_four
    } )
    const { one, two, three, four } = skill_icon


    const [ mode, setMode ] = useState ('dark_mode')

    const [ logo, setLogo ] = useState ( WhiteLogo )

    const mode_icon = () => {
        if ( mode === 'light_mode' ) {
            setMode ('dark_mode')
            setLogo (WhiteLogo)
        }
        else {
            setMode ('light_mode')
            setLogo (BlackLogo)
        }
    }

    useEffect ( () => {
        document.body.className = mode
    }, )

    return (
        <>
            <div className="container">
                <div className="logo_social_header">
                    <div className="row">
                        <div className="col-4">
                            <div id="logo">
                                <a href="" title='miself'><img src={ logo } alt="" /></a>
                            </div>
                        </div>
                        <div className="col-8" id='social_icon'>
                            <span className='float-end mode_icon' title='Mode Change'><i onClick={ mode_icon } className="fa-solid fa-moon"></i></span>
                            <ul>
                                    <li><a href=""><i className="fa-brands fa-facebook-square"></i></a></li>
                                    <li><a href=""><i className="fa-brands fa-linkedin"></i></a></li>
                                    <li><a href=""><i className="fa-brands fa-behance-square"></i></a></li>
                                    <li><a href=""><i className="fa-brands fa-twitter-square"></i></a></li>
                                    <li><a href=""><i className="fa-brands fa-youtube-square"></i></a></li>
                                    <li><a href=""><i className="fa-brands fa-github-square"></i></a></li>
                                </ul>
                        </div>
                    </div>
                </div>
                

                <div className="header_section">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <h2 className=''><b>Hello !</b> I'm</h2>
                            <h1 className=''>Parvez Rabbi</h1>
                            <p className=''>Front End Developer Specialist</p>
                            <p className='skill'>-- HTML, CSS, BOOTSTRAP, JavaScript, React JS, Next JS --</p>
                            <a href='' className='btn mt-5'>Get Resume <span className='mx-2'> <i className="fa-solid fa-download"></i></span></a>
                            <div id='video_play'><a href=""><i className="fa-solid fa-circle-play"></i></a></div>
                            <div id='watch_video'> Watch Video</div>
                        </div>
                        <div className="col-lg-6 col-sm-12" id='myImageSection'>

                            <div className="skill_icon">
                                <div className="row">
                                    <div className="col-2">
                                        <a href="" onClick={ () => alert(info_one) }><img className='skill_one' src={ one } alt="" /></a>
                                    </div>
                                    <div className="col-2">
                                        <a href="" onClick={ () => alert(info_two) }><img className='skill_two' src={ two } alt="" /></a>
                                    </div>
                                    <div className="col-2">
                                        <a href="" onClick={ () => alert(info_three) }><img className='skill_three' src= { three } alt="" /></a>
                                    </div>
                                    <div className="col-2">
                                        <a href="" onClick={ () => alert(info_four) }><img className='skill_four' src= { four } alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            <div id='myImage'>
                                <img src={ Miself } alt="" />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>

        </>
    )
}

export default Header