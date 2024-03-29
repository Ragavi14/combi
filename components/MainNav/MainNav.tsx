import React from "react";
import styles from './MainNav.module.scss';
import { NavDropdown } from 'react-bootstrap';
import Link from "next/link";

const MainNav = () => {
    return (
        <div className={`${styles.MainNav}`}>
            <div className={` container`}>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-2">
                       <Link href="/"> <img src="/images/logo.png" /> </Link>
                    </div>
                    <div className={`col-md-8`}>



                        <ul className={`${styles.mainNav}`}>
                            <li><div className={`${styles.curtain}`}>
                                <NavDropdown title="Curtains" id="basic-nav-dropdown"  >
                                    <div className={`${styles.NavBar}`}>
                                        <div className={`${styles.HeadNav}`}>
                                            <p>Extendable</p>
                                        </div>
                                        <div className={`${styles.txtNav}`}>
                                            <NavDropdown.Item href="#">WhiteNoise 3300</NavDropdown.Item>
                                            <NavDropdown.Item href="#">WhiteNoise 3400</NavDropdown.Item>
                                            <NavDropdown.Item href="#">WhiteNoise 3600</NavDropdown.Item>
                                        </div>
                                        <div className={`${styles.HeadNav}`}>
                                            <p>Customisable</p>
                                        </div>
                                        <div className={`${styles.txtNav}`}>
                                            <NavDropdown.Item href="#">WhiteNoise 2000</NavDropdown.Item>
                                        </div>
                                        <div className={`${styles.HeadNav}`}>
                                            <p>Accessories</p>
                                        </div>
                                        <div className={`${styles.txtNav}`}>
                                            <NavDropdown.Item href="#">Curtain Motor</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Curtain Remote Control</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Curtain Wall Bracket - Single</NavDropdown.Item>
                                            <NavDropdown.Item href="#"> Curtain Wall Bracket - Double</NavDropdown.Item>
                                        </div>
                                    </div>
                                </NavDropdown>
                            </div></li>
                            <li><div className={`${styles.blind} `}>
                                <NavDropdown title="Blinds" id="basic-nav-dropdown"  >
                                    <div className={`${styles.NavBar}`}>
                                        <div className={`${styles.txtNav}`}>
                                            <NavDropdown.Item href="#">Roller Blinds </NavDropdown.Item>
                                            <NavDropdown.Item href="#">Shangri La Blinds </NavDropdown.Item>
                                            <NavDropdown.Item href="#">Zebra Blinds</NavDropdown.Item>
                                        </div>
                                    </div>
                                </NavDropdown>
                            </div></li>
                            <li><div className={`${styles.switch} `}>
                                <NavDropdown title="Switches" id="basic-nav-dropdown"  >
                                    <div className={`${styles.NavBar}`}>
                                        <div className={`${styles.txtNav}`}>
                                            
                                            <NavDropdown.Item href="#">One Gang </NavDropdown.Item>
                                            <NavDropdown.Item href="#">Two Gang </NavDropdown.Item>
                                            <NavDropdown.Item href="#">Three Gang</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Four Gang</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Eight Gang </NavDropdown.Item>
                                            <NavDropdown.Item href="#">Master - Slave (2way)  </NavDropdown.Item>
                                            <NavDropdown.Item href="#">Dimmer Switch</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Boiler Switch </NavDropdown.Item>
                                            <NavDropdown.Item href="#">Fan Switch </NavDropdown.Item>
                                            <NavDropdown.Item href="#">Wall Socket </NavDropdown.Item>
                                            <NavDropdown.Item href="#">  Wall Socket with USB</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Four Gang with Fan Switch  </NavDropdown.Item>
                                            <NavDropdown.Item href="#">Double Wall Socket with USB</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Four Gang with Socket </NavDropdown.Item>
                                        </div>
                                    </div>
                                </NavDropdown>
                            </div></li>
                            <li><div className={`${styles.resources}`}>
                                <NavDropdown title="Resources" id="basic-nav-dropdown"  >
                                    <div className={`${styles.NavBar}`}>
                                        <div className={`${styles.txtNav}`}>
                                            <NavDropdown.Item href="#"> </NavDropdown.Item>
                                            <NavDropdown.Item href="#"> </NavDropdown.Item>
                                            <NavDropdown.Item href="#"></NavDropdown.Item>
                                        </div>
                                    </div>
                                </NavDropdown>
                            </div></li>
                            <li><div className={`${styles.company}`}>
                                    <Link href="#">Company</Link>
                                </div></li>
                        </ul>

                    </div>

                    <div className="col-md-2">
                        <a href={`#`} className={`btn btn-primary`}>Enquire</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainNav;