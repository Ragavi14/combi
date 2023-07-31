import React from "react";
import styles from './ProductList.module.scss';

const ProductList = () => {
    return (
        <div className={`${styles.ProductList}`}>
                <div className="row">
                    <img src="/images/productList.png" />
                    <h2>Smart Curtains</h2>
                    <p>Extendable Curtain Track System</p> <h5>|</h5> 
                    <h6>Customisable Curtain Track System</h6>
                </div>
                <div className="container">
                    <div className={`${styles.Div} row`}>
                        <div className={`${styles.divOne} col-md-4`}>
                            <img src="/images/img1.png" />
                            <h2>WhiteNoise 3300</h2>
                            <h3>Intelligent Measurement-Free Extendable curtain track system</h3>
                            <a href="/product-detail">Product catalogue</a>
                            <a className={`${styles.round}`} href='/product-detail'>
                                    <img src="/images/arrow-right.png" alt="" />
                            </a>
                        </div>
                        <div className={`${styles.divTwo} col-md-4`}>
                            <img src="/images/headphone.png" />
                            <h2>WhiteNoise 3300</h2>
                            <h3>Intelligent Measurement-Free Extendable curtain track system</h3>
                            <a href="#">Product catalogue</a>
                            <a className={`${styles.round}`} href='#'>
                                    <img src="/images/arrow-right.png" alt="" />
                            </a>
                        </div>
                        <div className={`${styles.divThree} col-md-4`}>
                            <img src="/images/img2.png" />
                            <h2>WhiteNoise 3300</h2>
                            <h3>Intelligent Measurement-Free Extendable curtain track system</h3>
                            <a href="#">Product catalogue</a>
                            <a className={`${styles.round}`} href='#'>
                                    <img src="/images/arrow-right.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default ProductList;