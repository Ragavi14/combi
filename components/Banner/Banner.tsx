import React from "react";
import styles from './Banner.module.scss';

const Banner = () => {
    return (
        <div>
            <div className={`${styles.Banner}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>Smart Home Automation Solutions</h1>
                            <p>A Leader in Automation for Luxury Flats, Villas, Bungalows and Farmhouses.</p>
                            <button>Enquire</button>
                            <a href="/product-list">View Products</a>
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
