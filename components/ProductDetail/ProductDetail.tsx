import React from "react";
import styles from './ProductDetail.module.scss';
import Link from "next/link";

const ProductDetail = () => {
    return (
        <div className={`${styles.ProductDetail}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/images/img1.png" />
                    </div>
                    <div className={`${styles.text} col-md-6`}>
                        <p>Home / Products / WhiteNoise 3300</p>
                        <h1>WhiteNoise 3300</h1>
                        <h3>Intelligent Measurement-Free Extendable curtain track system</h3>
                        <button>Enquire</button>
                    </div>
                </div>
                <div className="row">
                    <h1>The best reviewed curtain system</h1>
                    <p>This Extendable Electric Curtain Track is the perfect solution for DIY electric curtain tracks. With an adjustable length of between 
                        1.7m - 3m you cannot go wrong. It is suitable for most curtains and comes with easy-to-fix ceiling brackets for a hassle-free 
                        installation. This system is only suitable for a pair of curtains and will not work with a single curtain. There is a choice of 
                        remote control, smartphone  and control to suit your application.</p>
                </div>
            </div>
            <div className={`${styles.specification}`}>
                <div className="container">
                    <h1>Specifications</h1>
                    <p>Hardware</p><h5>|</h5>
                    <h6>Software</h6>
                    <div className="row">
                        <div className="col-md-4">
                            <h2>Supported curtain types</h2>
                        </div>
                        <div className="col-md-8">
                            <h4>All straight curtain tracks up to 6 meters. Slide does not support curved or cornered tracks. One Slide can pull a single 
                                or double symmetrical curtain setup.</h4>
                        </div>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <h2>Supported curtain types</h2>
                        </div>
                        <div className="col-md-8">
                            <h4>All straight curtain tracks up to 6 meters. Slide does not support curved or cornered tracks. One Slide can pull a single 
                                or double symmetrical curtain setup.</h4>
                        </div>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <h2>Supported curtain types</h2>
                        </div>
                        <div className="col-md-8">
                            <h4>All straight curtain tracks up to 6 meters. Slide does not support curved or cornered tracks. One Slide can pull a single 
                                or double symmetrical curtain setup.</h4>
                        </div>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <h2>Supported curtain types</h2>
                        </div>
                        <div className="col-md-8">
                            <h4>All straight curtain tracks up to 6 meters. Slide does not support curved or cornered tracks. One Slide can pull a single 
                                or double symmetrical curtain setup.</h4>
                        </div>
                        <hr/>
                    </div>
                </div>
            </div>
            <div className={`${styles.faq}`}>
                <div className="container">
                    <h1>Frequently asked questions</h1>
                    <div className="row">
                        <div className="col-md-10">
                            <h2>All you want to know about product assembly!</h2>
                            <h4>All products are often delivered flat-packed to save you money and help the environment. They are designed to be easy to 
                                assemble so you should be able to Do-It-Yourself, making our products even more affordable.</h4>
                        </div>
                        <div className="col-md-2">
                            <p>&#8722;</p>
                        </div>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-md-10">
                            <h2>Assembly Videos of your favorite product</h2>
                        </div>
                        <div className="col-md-2">
                            <p>&#43;</p>
                        </div>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-md-10">
                            <h2>I have received damaged articles.</h2>
                        </div>
                        <div className="col-md-2">
                            <p>&#43;</p>
                        </div>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-md-10">
                            <h2>Assembly Videos of your favorite product</h2>
                        </div>
                        <div className="col-md-2">
                            <p>	&#43;</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.teach}`}>
                <div className="container">
                    <h1>How to Install</h1>
                    <iframe src="https://www.youtube.com" />
                </div>
            </div>
        </div>
    )
}
export default ProductDetail;