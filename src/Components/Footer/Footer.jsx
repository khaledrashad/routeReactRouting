import React from 'react'

export default function Footer() {
  return <>
    <footer className='bg-body-tertiary text-center p-5'>
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h2>LOCATION</h2>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className="col-4">
                    <h2>AROUND THE WEB</h2>
                    <div className='bg-danger'></div>
                </div>
                <div className="col-4">
                    <h2>ABOUT FREELANCER</h2>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
        </div>
    </footer>
    <div className='bg-black text-white p-3 text-center'>
        <p>Copyright © Your Website 2021</p>
    </div>
  </>
}
