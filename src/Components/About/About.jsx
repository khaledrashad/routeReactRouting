import React from 'react'
import style from "./About.module.css"
export default function About() {
    return <>
        <div className={`${style.aboutPage} + bg-black + mt-5`}>
            <div className={` ${style.aboutPageContent} + container + d-flex + flex-column + justify-content-center + align-items-center`}>
                <h2 className='fs-1 text-white mb-4'>About Component</h2>
                <div className='text-white d-flex'>
                    <p className='px-3'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    <p className='px-3'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
        </div>
    </>
}
