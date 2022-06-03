import React, { useEffect } from 'react';
import logo from '../../../../public/logo.png';
import Link from 'next/link';
import Image from 'next/image';


export function Header() {
    const HeaderScroll = () => {
        useEffect(() => {
            window.onscroll = () => {
                if(window.pageYOffset > 5) {
                    document.getElementById("header").classList.add("scroll");
                }
    
                if(window.pageYOffset < 5) {
                    document.getElementById("header").classList.remove("scroll");
                }
            }
        }, [])
    }

    return (
        <header id="header" onScroll={HeaderScroll()}>
            <div className="container">
                <Link href="/#top">
                    <a className="no-hover inline-flex">
                        <Image className="logo" src={logo} alt="Tom's Logo" width="60" height="60" />
                    </a>
                </Link>

                <ul className="main-menu">
                    <li>
                        <Link href="/#about">
                            <a>
                                About
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/#contact">
                            <a>
                                Contact
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}