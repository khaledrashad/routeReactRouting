import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div class="container">
                <Link class="navbar-brand" href="#" to={"/"}><h2 className='fs-1'>START FRAMEWORK</h2></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup" className='ms-0'>
                    <div class="navbar-nav">
                        <Link class="nav-link fs-6" aria-current="page" href="#" to={"about"}>ABOUT</Link>
                        <Link class="nav-link fs-6" href="#" to={"portfolio"}>PORTFOLIO</Link>
                        <Link class="nav-link fs-6" href="#" to={"contact"}>CONTACT</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
}
