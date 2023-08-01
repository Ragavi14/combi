import React from "react";
import styles from './Banner.module.scss';
import Link from "next/link";
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
    return (
        <div>
            <div className={`${styles.Banner}`}>
            <Carousel data-bs-theme="dark">
                            <Carousel.Item>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Carousel.Caption>
                                            <h1>Smart Home Automation Solutions</h1>
                                            <p>A Leader in Automation for Luxury Flats, Villas, Bungalows and Farmhouses.</p>
                                            <button>Enquire</button>
                                            <Link href="/product-list">View Products</Link>
                                        </Carousel.Caption>
                                    </div>
                                    <div className="col-md-6">
                                         <img className="d-block w-100" src="/images/banner.png"alt="First slide" />
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Carousel.Caption>
                                            <h1>Smart Home Automation Solutions</h1>
                                            <p>A Leader in Automation for Luxury Flats, Villas, Bungalows and Farmhouses.</p>
                                            <button>Enquire</button>
                                            <Link href="/product-list">View Products</Link>
                                        </Carousel.Caption>
                                    </div>
                                    <div className="col-md-6">
                                         <img className="d-block w-100" src="/images/banner.png"alt="First slide" />
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Carousel.Caption>
                                            <h1>Smart Home Automation Solutions</h1>
                                            <p>A Leader in Automation for Luxury Flats, Villas, Bungalows and Farmhouses.</p>
                                            <button>Enquire</button>
                                            <Link href="/product-list">View Products</Link>
                                        </Carousel.Caption>
                                    </div>
                                    <div className="col-md-6">
                                         <img className="d-block w-100" src="/images/banner.png"alt="First slide" />
                                    </div>
                                </div>
                            </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
    }
 export default Banner;   
