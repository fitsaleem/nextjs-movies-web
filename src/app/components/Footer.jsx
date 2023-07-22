import React from 'react';
import style from '@/app/styles/footer.module.css'
import { FaFacebookF, FaTwitter,FaInstagram,FaLinkedinIn,FaYoutube, FaGithub } from "react-icons/fa";
import Link from "next/link";


export const metadata = {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
}

const Footer = () => {
    return (
        <>

            <footer className={style.footer}>
                <div className={style.content}>
                    <div className={style.top}>
                        <div className={style['logo-details']}>
                            <span className={style.logo_name}>Fitcodding</span>
                        </div>
                        <div className={style[`media-icons`]}>
                            <Link href="https://github.com/fitsaleem" target="_blank"><i > <FaGithub/> </i></Link>
                            <Link href="https://www.instagram.com/fitsaleem/" target="_blank"><i > <FaInstagram/>  </i></Link>
                            <Link href="https://www.linkedin.com/in/saleem-raza/" target="_blank"><i > <FaLinkedinIn /> </i></Link>
                            <Link href="https://www.youtube.com/@fitcodding" target="_blank"><i > <FaYoutube />  </i></Link>
                        </div>
                    </div>
                    <div className={style['link-boxes']}>
                        <ul className={style.box}>
                            <li className={style.link_name}>Company</li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Get started</a></li>
                        </ul>
                        <ul className={style.box}>
                            <li className={style.link_name}>Services</li>
                            <li><a href="#">App design</a></li>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Logo design</a></li>
                            <li><a href="#">Banner design</a></li>
                        </ul>
                        <ul className={style.box}>
                            <li className={style.link_name}>Account</li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">My account</a></li>
                            <li><a href="#">Prefrences</a></li>
                            <li><a href="#">Purchase</a></li>
                        </ul>
                        <ul className={style.box}>
                            <li className={style.link_name}>Courses</li>
                            <li><a href="#">HTML & CSS</a></li>
                            <li><a href="#">JavaScript</a></li>
                            <li><a href="#">Photography</a></li>
                            <li><a href="#">Photoshop</a></li>
                        </ul>
                        <ul className={`${style.box} ${style['input-box']}`}>
                            <li className={style.link_name}>Subscribe</li>
                            <li><input type="text" placeholder="Enter your email" /></li>
                            <li><input type="button" value="Subscribe" /></li>
                        </ul>
                    </div>
                </div>
                <div className={style['bottom-details']}>
                    <div className={style.bottom_text}>
                        <span className={style.copyright_text}> Copyright © 2023
                            <Link href="/>"> Fitcodding.</Link> All rights reserved </span>
                        <span className={style.policy_terms}>
                          <Link href="/">Privacy policy</Link>
                          <Link href="/">Terms & condition</Link>
                        </span>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Footer;