'use client'

import React from 'react'
import style from "@/app/styles/navbar.module.css"
import Link from 'next/link'
import {CgCloseR, CgMenu} from "react-icons/cg";


const Nav = () => {
   
        const [openMenu, setOpenMenu] = React.useState(false);
        console.log("value " + openMenu)

        const handleClose=()=>{
            setOpenMenu(false)
        }
    
  return (
   <nav className={style.navbar}>
    <div  className={openMenu ? `${style.active}` : "" }>
        <ul className={style.navbarList}>
            <li className={style.navbarlistItem}>
                <Link href="/" className={style.navbarLink}  onClick={handleClose}>

                    Home

                </Link>
                </li>
                <li className={style.navbarlistItem}>
                <Link href="/about" className={style.navbarLink}  onClick={handleClose}>

                    About

                </Link>
                </li>
                <li className={style.navbarlistItem}>
                <Link href="/movies" className={style.navbarLink} onClick={handleClose}>

                    Movies

                </Link>
                </li>
                
                <li className={style.navbarlistItem}>
                <Link href="contact" className={style.navbarLink} onClick={handleClose}>

                    Contact

                </Link>
            </li>
            
        </ul>
         {/* //nav icon */}
         <div className={style['mobile-navbar-btn']}>
                        <CgMenu
                            name="menu-outline"
                            className={style['mobile-nav-icon']}
                            onClick={() => setOpenMenu(true)}
                        />
                        <CgCloseR
                            name="close-outline"
                            className={`${style['mobile-nav-icon']} ${style['close-outline']}`}
                            onClick={() => setOpenMenu(false)}
                        />
                    </div>
    </div>

   </nav>
  )
}

export default Nav