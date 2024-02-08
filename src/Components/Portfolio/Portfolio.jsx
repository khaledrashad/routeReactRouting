import React from 'react'
import styles from "./Portfolio.module.css"
import cardOne from "../../Assets/poert1.png"
import cardTwo from "../../Assets/port2.png"
import cardThree from "../../Assets/port3.png"
export default function Portfolio() {
  return <>
    <div className={`${styles.portfolioPage} + bg-black + mt-5 + py-5`}>
        <div className={` ${styles.portfolioPageContent} + container + d-flex + flex-column + align-items-center `}>
            <h2 className='text-white my-5 fs-1'>PORTFOLIO COMPONENT</h2>
            <div className="row g-5">
                <div className="col-4">
                    <img src={cardOne} alt="" className='w-100 rounded-3' />
                </div>
                <div className="col-4">
                    <img src={cardTwo} alt="" className='w-100 rounded-3' />
                </div>
                <div className="col-4">
                    <img src={cardThree} alt="" className='w-100 rounded-3' />
                </div>
                <div className="col-4">
                    <img src={cardOne} alt="" className='w-100 rounded-3' />
                </div>
                <div className="col-4">
                    <img src={cardTwo} alt="" className='w-100 rounded-3' />
                </div>
                <div className="col-4">
                    <img src={cardThree} alt="" className='w-100 rounded-3' />
                </div>
            </div>
        </div>
    </div>
  </>
}
