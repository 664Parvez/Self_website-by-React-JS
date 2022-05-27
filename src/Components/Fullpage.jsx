import React from 'react'

import Header from './Header/Header'
import Services from './Services/Services'
import My_skills from './My Skills/My_skills'
import Copywrite from './Copywrite/Copywrite'
import Company_logo from './Company Logo/Company_logo'
import Subscribe_form from './Subscribe Form/Subscribe_form'
import HappyClient from './HappyClient/Happy_client'
import Projects from './Projects/Projects'
import About from './About me/About_me'
import Blog from './Blog/Blog'


const Fullpage = () => {

    return (
        <>
            <Header />
            <Services />
            <About />
            <HappyClient />
            <Projects />
            <My_skills />
            <Blog />
            <Company_logo />
            <Subscribe_form />
            <Copywrite />
            
        </>
    )
}

export default Fullpage