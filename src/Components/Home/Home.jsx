import React from 'react'
import logo from "../../Assets/avataaars.svg"
import styles from "./home.module.css"
export default function Home() {
  return <>
    <div className={`${styles.homePage} + bg-black + mt-5`}>
        <div className={` ${styles.homePageContent} + container + d-flex + flex-column + justify-content-center + align-items-center`}>
            <img src={logo} alt="" className={`${styles.homeImg}`} />
            <h1 className='text-white my-4'>START FRAMEWORK</h1>
            <p className='text-white mb-0 mt-2'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </div>
  </>
}
