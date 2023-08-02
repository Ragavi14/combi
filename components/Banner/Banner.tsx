import React from "react";
import styles from './Banner.module.scss';
import Link from "next/link";

const Banner = () => {
    return (
        <div>
            <div className={`${styles.Banner}`}>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6">
                            <h1>Smart Home Automation Solutions</h1>
                            <p>A Leader in Automation for Luxury Flats, Villas, Bungalows and Farmhouses.</p>
                            <button className={`btn btn-primary`}>Enquire</button>
                            <Link className={`btn btn-link`} href="/product-list">View Products</Link>
                        </div>
                        <div className="col-md-6">
                             <img src="/images/banner.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
 export default Banner;   
