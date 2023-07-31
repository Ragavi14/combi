import React from "react";
import styles from './HomeContent.module.scss';
import Link from "next/link";

const HomeContent = () => {
    return (
        <div className={`${styles.HomeContent}`}>
            <div className="container">
                <div className="row">
                    <p>At Combifer, Simply Better Security means more than just providing a great product. It’s combining the best service with the best 
                        technology to protect our customers and users.</p>
                        <h5>Products to help make home life smart.</h5>
                </div>
                <div className="row">
                    <div className={`${styles.imgDiv} col-md-6`}>
                     <img src="/images/smart-curtain.png" /> 
                     <h1> Smart Curtain  </h1>
                    </div>
                    <div className={`${styles.txtDiv} col-md-6`}>
                        <h1> Smart Curtain  </h1>
                        <Link href="#"> <img src="/images/arrow.svg" /> Wirefree motors blinds and curtains</Link>
                        <Link href="#"> <img src="/images/arrow.svg" /> Interior blinds</Link> <br></br>
                        <Link href="#"> <img src="/images/arrow.svg" />  Curtains</Link> <br></br>
                        <Link href="#"> <img src="/images/arrow.svg" /> Projection screens</Link> <br></br>
                        <Link href="#"> <img src="/images/arrow.svg" />  Connexoon Window RTS</Link>
                        <div className={`${styles.know}`}>
                        <Link href="#"> Know More <img src="/images/arrow.svg" /> </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src="/images/home-content.png" />
                    <h2>Smart Switches</h2>
                </div>
                <div className={`${styles.sectors} row`}>
                    <p>Applicable Sectors</p>
                    <div className={`${styles.Residential} col-md-2`}>
                        <img src="/images/Residential.png" /> 
                        <figcaption><Link href="#">  Residential</Link></figcaption>
                    </div>
                    <div className={`${styles.retail} col-md-2`}>
                        <img src="/images/retail.png" /> 
                        <figcaption><Link href="#">Retail & Offices</Link></figcaption>
                    </div>
                    <div className={`${styles.healthCare} col-md-2`}>
                        <img src="/images/healthCare.png" />  
                        <figcaption><Link href="#"> HealthCare</Link></figcaption>
                    </div>
                    <div className={`${styles.comercial} col-md-2`}>
                       <img src="/images/comercial.png" />
                       <figcaption><Link href="#">  Commercial</Link></figcaption>
                    </div>
                    <div className={`${styles.learn} col-md-2`}>
                      <img src="/images/learn.png" />
                      <figcaption> <Link href="#">  Learning</Link></figcaption>
                    </div>
                    <div className={`${styles.hospital} col-md-2`}>
                       <img src="/images/hospital.png" />
                       <figcaption> <Link href="#"> Hospitality</Link></figcaption>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeContent;
