import React from "react";
import styles from './HomeContent.module.scss';
import Link from "next/link";

const HomeContent = () => {
    return (
        <div className={`${styles.HomeContent}`}>
            <div className="container">
                <div className="row">
                    <div className={`${styles.headContent}`}>

                    <p>At Combifer, Simply Better Security means more than just providing a great product. It’s combining the best service with the best 
                        technology to protect our customers and users.</p>
                    <h5>Products to help make home life smart.</h5>
                    </div>
                </div>
                <div className="row">
                    <div className={`col-md-6`}>
                        <div className={`${styles.imgDiv}`}>
                            <img src="/images/smart-curtain.png" />
                            <h2>Smart Curtain</h2>
                        </div>
                    </div>
                    <div className={`col-md-6`}>
                        <div className={`${styles.txtDiv}`} >
                            <h2>Smart Curtain </h2>
                            <ul>
                                <li><Link href="#"> <img src="/images/arrow.svg" /> Wirefree motors blinds and curtains</Link></li>
                                <li><Link href="#"> <img src="/images/arrow.svg" /> Interior blinds</Link></li>
                                <li><Link href="#"> <img src="/images/arrow.svg" /> Curtains</Link></li>
                                <li><Link href="#"> <img src="/images/arrow.svg" /> Projection screens</Link></li>
                                <li><Link href="#"> <img src="/images/arrow.svg" /> Connexoon Window RTS</Link></li>
                            </ul>
                            <div className={`${styles.know}`}>
                                <Link href="#"> Know More <img src="/images/arrow.svg" /> </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className={`${styles.imgDivBottom}`}>
                        <img src="/images/home-content.png" />
                        <h2>Smart Switches</h2>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default HomeContent;
