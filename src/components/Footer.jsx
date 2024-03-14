import React from 'react'
import insta from '../assets/insta.png';
import x from '../assets/x.png';
import yt from '../assets/yt.png';
import social from '../assets/social.png';


const Footer = () => {
    return (
        <>
            <div className='flex footer'>
                <div className='item longbasis flexcol-start'>
                    <div className='list flexcol-start'>
                        <span>Copyright © 2020 Landify UI Kit.</span>
                        <span>All rights reserved</span>
                    </div>
                    <div className='flex-start' style={{gap: '10px'}}>
                        <a href="https://www.instagram.com"><img src={insta} className='insta' alt="insta" /></a>
                        <a href="https://github.com/imuv21/"><img src={social} className='insta' alt="web" /></a>
                        <a href="https://www.twitter.com"><img src={x} className='insta' alt="x" /></a>
                        <a href="https://www.youtube.com"><img src={yt} className='insta' alt="youtube" /></a>
                    </div>
                </div>
                <div className='item shortbasis flexcol-start'>
                    <div className='heading-footer'>Company</div>
                    <div className='list flexcol-start'>
                        <a href="">About us</a>
                        <a href="">Blog</a>
                        <a href="">Contact us</a>
                        <a href="">Pricing</a>
                        <a href="">Testimonials</a>
                    </div>
                </div>
                <div className='item shortbasis flexcol-start'>
                    <div className='heading-footer'>Support</div>
                    <div className='list flexcol-start'>
                        <a href="">Help center</a>
                        <a href="">Terms of service</a>
                        <a href="">Legal</a>
                        <a href="">Privacy policy</a>
                        <a href="">Status</a>
                    </div>
                </div>
                <div className='item longbasis flexcol-start'>
                    <div className='heading-footer'>Stay up to date</div>
                    <div className='inputdiv'><input type="text" placeholder='Your email address' /></div>
                </div>
            </div>
        </>
    )
}

export default Footer