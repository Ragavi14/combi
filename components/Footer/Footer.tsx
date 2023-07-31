import React from "react";
import styles from './Footer.module.scss';
import Link from "next/link";

const Footer = () => {
    return (
        <div className={`${styles.Footer}`} >
            <div className='container'>
                <div className='row'>
                    <div className="col-md-6">
                        <img src="/images/logo.png" />
                        <div className={`${styles.links}`}>
                                <Link className={`${styles.fb}`} href='#'>
                                    <img src="/images/facebook.svg" alt="" />
                                </Link>
                                <Link className={`${styles.insta}`} href='#'>
                                    <img src="/images/instagram.svg" alt="" />
                                </Link>
                                <Link className={`${styles.youTube}`} href='#'>
                                    <img src="/images/youtube.svg" alt="" />
                                </Link>
                                <Link className={`${styles.insta}`} href='#'>
                                    <img src="/images/linkedin.svg" alt="" />
                                </Link>
                                <Link className={`${styles.insta}`} href='#'>
                                    <img src="/images/twitter.svg" alt="" />
                                </Link>
                            </div>
                    </div>
                    <div className="col-md-6">
                        <div className={`${styles.office} row`}>
                            <div className="col-md-6">
                                <h5> Office Address </h5>
                                    <ul className="links">
                                        <li><Link href="#">FAQ's</Link></li>
                                        <li><Link href="#">Become a Dealer</Link></li>
                                        <li><Link href="#">Accessories</Link></li>
                                        <li><Link href="#">How-href Videos</Link></li>
                                        <li><Link href="#"> Catalogue </Link></li>
                                        <li><Link href="#"> Downloads </Link></li>
                                    </ul>
                            </div>
                            <div className="col-md-6">
                                <h5>Office Address </h5>
                                <p>No. 839, Ground Floor, 9th Main, 1st Block HRBR Layout, Kalyan Nagar, Bangalore, Karnataka, India - 560 043.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <p> 2023 Combifer Technologies. All Rights Reserved. Privacy Policy | Terms of Use</p>
            </div>

        </div>
    )
}
export default Footer;