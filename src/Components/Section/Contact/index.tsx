import React from "react";
import Link from 'next/link';
import Image from 'next/image';

/*  Assets  */
import email from '../../../../public/assets/icons/email.png';
import phone from '../../../../public/assets/icons/phone.png';



/*
*   Interfaces
*/
export interface IContactSectionProps {

}



/*
*   Component
*/
export function ContactSection(IContactSectionProps) {

    return (
        <section className="custom-component cat-section contact-section bg-grey" id="contact">
            <div className="container">
                <h2 className="section-title text-center">Contact</h2>
                
                <div className="contact-item">
                    <Link href="tel:+447805601727" className="no-hover inline-flex">
                          <Image src={phone} alt="Phone Icon" width="60" height="60" />
                          <div className="text">+447805601727</div>
                    </Link>
                </div>
                
                <div className="contact-item">
                    <Link href="mailto:tomodowling@outlook.com" className="no-hover inline-flex">
                          <Image src={email} alt="Email Icon" width="60" height="60" />
                          <div className="text">tomodowling@outlook.com</div>
                    </Link>
                </div>
            </div>
        </section>
    )
}