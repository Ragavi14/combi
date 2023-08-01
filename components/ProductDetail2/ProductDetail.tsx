import React from "react";
import styles from './ProductDetail.module.scss';

const ProductDetail = () => {
    const currentPath = window.location.pathname;
    const fullPath = `${window.location.origin}${currentPath}`;
    return (
        <div className={`${styles.ProductDetail}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/images/img3.png" />
                    </div>
                    <div className={`${styles.text} col-md-6`}>
                        <p>
                            Home / 
                            {currentPath.split('/').map((part, index, array) => (
                            <span key={index}>
                                {index === array.length - 1 ? (
                                <span style={{ color: 'blue' }}> {part} </span>
                                ) : (
                                <span>{part}</span>
                                )}
                            </span>
                            ))}
                        </p>
                        <h1>WhiteNoise 3300</h1>
                        <h3>Intelligent Measurement-Free Extendable curtain track system</h3>
                        <button>Enquire</button>
                    </div>
                </div>
            </div>
            <div className={`${styles.specification}`}>
                <div className="container">
                    <h1>Specifications</h1>
                    <p>Key Features</p><h5>|</h5>
                    <h6>Technical Specifications</h6>
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Design</h3>
                        </div>
                        <div className="col-md-4">
                            <h4>Sleek Modern Design</h4>
                        </div>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Usable Length</h3>
                        </div>
                        <div className="col-md-4">
                            <h4>1.7m to 3m</h4>
                        </div>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Smart Play</h3>
                        </div>
                        <div className="col-md-4">
                            <h2>Remote Control
                                 App Control
                                  Voice Control</h2>
                        </div>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Easy Installation</h3>
                        </div>
                        <div className="col-md-4">
                            <h2>Do-It-Yourself
                                Professional</h2>
                        </div>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Intelligent Limit Stop</h3>
                        </div>
                        <div className="col-md-4">
                            <h2>25% Open <br/>
                                50% Open <br/>
                                75% Open
                            </h2>
                        </div>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Motor IP Grade</h3>
                        </div>
                        <div className="col-md-4">
                            <h4>IP41</h4>
                        </div>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Manual Operation</h3>
                        </div>
                        <div className="col-md-4">
                            <h4>When Power Cut</h4>
                        </div>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Load Capacity</h3>
                        </div>
                        <div className="col-md-4">
                            <h4>Upto 20kgs</h4>
                        </div>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Motor Warranty</h3>
                        </div>
                        <div className="col-md-4">
                            <h4>5 Years</h4>
                        </div>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Suitable Drapes Folds</h3>
                        </div>
                        <div className="col-md-4">
                            <h2>Pinch Fold<br/>
                                Box Pleat<br/>
                                Goblet Pleat<br/>
                                Pencil Pleat<br/>
                                Pocket Fold </h2>
                        </div>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Application Type <br/>
                                (Best Suited For)</h3>
                        </div>
                        <div className="col-md-4">
                            <h2>French Windows
                                Large Windows
                                Long Frame Windows</h2>
                        </div>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Pre-Assembled</h3>
                        </div>
                        <div className="col-md-4">
                            <h4>No Parts Assemble Required</h4>
                        </div>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Gateway</h3>
                        </div>
                        <div className="col-md-4">
                            <h4>No Gateway Required</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.details}`}>
                <div className="container">
                    <h1>Details & specifications</h1>
                    <div className={`${styles.lineContainer} row`}>
                        <div className="col-md-4">
                            <h2>What’s inside box</h2>
                        </div>
                        <div className="col-md-4">
                            <h3>|   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    Accessories</h3>
                        </div>
                        <div className="col-md-4">
                            <h4>|   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    Not Included But Required</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h5>What’s inside box</h5>
                        </div>
                        <div className="col-md-6">
                            <h6>1 * Intelligent Measurement-free Extendable Curtain Track<br/> 1 * Smart Curtain Wi-Fi Motor<br/> 1 * Remote Control</h6>
                        </div>
                    </div>
                    <div className={`${styles.textBox}`}>
                        <p>Note: In Case of Mounting Curtain Track on Wall <br/>
                            Wall Mounting Brackets are Sold Separately for both Single Track and Double Track</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail;