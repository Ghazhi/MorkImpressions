import { Link } from "@inertiajs/inertia-react";

export default function Footer() {
    return (
        <>
            <div className="footer-section">
                <div className="container">
                    <div className="row footer-bg">
                        <div className="col-lg-3 col-md-6 pl-20 pr-40">
                            <div className="widgets-company-info">
                                {/* print logo */}
                                <div className="print-logo">
                                    <a className="logo_img" href="index.html" title="morkimpression">
                                        <img src="template/assets/images/mork/mk.png" alt="morkimpression" style={{ width: "10rem" }} />
                                    </a>
                                </div>
                                {/* footer desc */}
                                <div className="company-desc-info">
                                <span style={{fontSize:"12px"}}>Quality Digital & Offset Printing Company</span>
                                </div>
                                {/* company social info */}
                                <div className="company-social-info pt-4">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pl-40">
                            <div className="widget-nav-menu">
                                {/* widget title */}
                                <h4 className="widget-title"> Get in touch </h4>
                                <div className="menu-quick-link-content">
                                    <ul className="footer-widget-list">

                                        <li>
                                            <Link href="about">
                                                {" "}
                                                <i className="bi bi-arrow-right" /> About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="services">
                                                {" "}
                                                <i className="bi bi-arrow-right" /> Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="portfolio">
                                                {" "}
                                                <i className="bi bi-arrow-right" /> Portfolio
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="widget-nav-menu">
                                {/* widget title */}
                                <h4 className="widget-title"> Useful Links </h4>
                                <div className="menu-quick-link-content">
                                    <ul className="footer-widget-list">

                                        <li>
                                            <Link href="services">
                                                {" "}
                                                <i className="bi bi-arrow-right" />Industrial Lamination
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="services">
                                                {" "}
                                                <i className="bi bi-arrow-right" /> Graphic Design
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="services">
                                                {" "}
                                                <i className="bi bi-arrow-right" /> Offset Printing
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="services">
                                                {" "}
                                                <i className="bi bi-arrow-right" /> Color Seperation
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="menu-quick-link-contact">
                                {/* widget title */}
                                <h4 className="widget-title"> Contact Us </h4> 
                                {/* company contact info */}
                                <div className="company-contact-info">
                                    <p>
                                        {" "}
                                        <i className="bi bi-telephone" /> Phone: +233 244 372 598<br /> +233 302 316 441
                                    </p>
                                    <p>
                                        {" "}
                                        <i className="bi bi-envelope-fill" /> Email: info@morkimpression.com{" "}
                                    </p>
                                    <p>
                                        {" "}
                                        <i className="bi bi-geo-alt-fill" /> 
                                        Mamprobi, A1161/3 Kpakpo, Brimah Street, Accra Ghana
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* footer shape */}
                        <div className="footer-shape bounce-animate">
                            <img src="assets/images/resource/ball2.png" alt="" />
                        </div>
                        <div className="footer-shape2 bounce-animate2">
                            <img src="assets/images/slider/cross1.png" alt="" />
                        </div>
                        <div className="footer-shape3 bounce-animate3">
                            <img src="assets/images/slider/cross1.png" alt="" />
                        </div>
                        <div className="footer-shape4 bounce-animate4">
                            <img src="assets/images/slider/ball2.png" alt="" />
                        </div>
                        <div className="footer-shape5 bounce-animate5">
                            <img src="assets/images/resource/ball3.png" alt="" />
                        </div>
                        <div className="footer-shape6 bounce-animate2">
                            <img src="assets/images/slider/cross2.png" alt="" />
                        </div>
                        <div className="footer-shape7 bounce-animate2">
                            <img src="assets/images/slider/cross1.png" alt="" />
                        </div>
                        <div className="footer-shape8 bounce-animate2">
                            <img src="assets/images/resource/ball2.png" alt="" />
                        </div>
                    </div>
                    <div className="row footer-bottom-bg">
                        <div className="col-lg-6 col-md-6 pl-0">
                            <div className="footer-bottom-content-copy">
                                <p> Copyright 2023 @ Mork Impressions. All rights reserved.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End print_shop Footer Section  */}
            {/*==================================================*/}
            {/*==================================================*/}
            {/* Start scrollup section  */}
            {/*==================================================*/}
            {/* scrollup section */}
            <div className="scroll-area">
                <div className="top-wrap">
                    <div className="go-top-btn-wraper">
                        <div className="go-top go-top-button">
                            <i className="fas fa-arrow-up" />
                            <i className="fas fa-arrow-up" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

