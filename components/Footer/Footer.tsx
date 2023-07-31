import React from "react";
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={`${styles.Footer}`} >
            <div className='container'>
                <div className='row'>
                    <div className="col-md-6">
                        <img src="/images/logo.png" />
                        <div className={`${styles.links}`}>
                                <a className={`${styles.fb}`} href='#'>
                                    <img src="/images/facebook.svg" alt="" />
                                </a>
                                <a className={`${styles.insta}`} href='#'>
                                    <img src="/images/instagram.svg" alt="" />
                                </a>
                                <a className={`${styles.youTube}`} href='#'>
                                    <img src="/images/youtube.svg" alt="" />
                                </a>
                                <a className={`${styles.insta}`} href='#'>
                                    <img src="/images/linkedin.svg" alt="" />
                                </a>
                                <a className={`${styles.insta}`} href='#'>
                                    <img src="/images/twitter.svg" alt="" />
                                </a>
                            </div>
                    </div>
                    <div className="col-md-6">
                        <div className={`${styles.office} row`}>
                            <div className="col-md-6">
                                <h5> Office Address </h5>
                                    <ul className="links">
                                        <li><a href="#">FAQ's</a></li>
                                        <li><a href="#">Become a Dealer</a></li>
                                        <li><a href="#">Accessories</a></li>
                                        <li><a href="#">How-to Videos</a></li>
                                        <li><a href="#"> Catalogue </a></li>
                                        <li><a href="#"> Downloads </a></li>
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