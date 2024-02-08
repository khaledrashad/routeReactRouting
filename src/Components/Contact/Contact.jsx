import React from 'react'
import styles from "./Contact.module.css"
export default function Contact() {
    return <>
        <div className={`${styles.contactPage} + bg-black + mt-5`}>
            <div className={` ${styles.contactPageContent} + container + d-flex + flex-column + justify-content-center + align-items-center`}>
                <h1 className='text-white my-4'>CONATCT SECTION</h1>
                <form action="submit" className='w-50'>
                    <input type="text" className='form-control w-100 p-2 my-2' placeholder='userName'/>
                    <input type="number" className='form-control w-100 p-2 my-2' placeholder='userAge'/>
                    <input type="email" className='form-control w-100 p-2 my-2' placeholder='userEmail'/>
                    <input type="password" className='form-control w-100 p-2 my-2' placeholder='userPassword'/>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    </>
}
