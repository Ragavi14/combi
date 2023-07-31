import React from "react";
import styles from './HomeContent.module.scss';

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
                        <a href="#"> <img src="/images/arrow.svg" /> Wirefree motors blinds and curtains</a>
                        <a href="#"> <img src="/images/arrow.svg" /> Interior blinds</a> <br></br>
                        <a href="#"> <img src="/images/arrow.svg" />  Curtains</a> <br></br>
                        <a href="#"> <img src="/images/arrow.svg" /> Projection screens</a> <br></br>
                        <a href="#"> <img src="/images/arrow.svg" />  Connexoon Window RTS</a>
                        <div className={`${styles.know}`}>
                        <a href="#"> Know More <img src="/images/arrow.svg" /> </a>
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
                        <figcaption><a href="#">  Residential</a></figcaption>
                    </div>
                    <div className={`${styles.retail} col-md-2`}>
                        <img src="/images/retail.png" /> 
                        <figcaption><a href="#">Retail & Offices</a></figcaption>
                    </div>
                    <div className={`${styles.healthCare} col-md-2`}>
                        <img src="/images/healthCare.png" />  
                        <figcaption><a href="#"> HealthCare</a></figcaption>
                    </div>
                    <div className={`${styles.comercial} col-md-2`}>
                       <img src="/images/comercial.png" />
                       <figcaption><a href="#">  Commercial</a></figcaption>
                    </div>
                    <div className={`${styles.learn} col-md-2`}>
                      <img src="/images/learn.png" />
                      <figcaption> <a href="#">  Learning</a></figcaption>
                    </div>
                    <div className={`${styles.hospital} col-md-2`}>
                       <img src="/images/hospital.png" />
                       <figcaption> <a href="#"> Hospitality</a></figcaption>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeContent;
