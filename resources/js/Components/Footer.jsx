export default function Footer () {
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
                                        <img src="assets/images/mork/morkLogo.png" alt="" />
                                    </a>
                                </div>
                                {/* footer desc */}
                                <div className="company-desc-info">
                                    <p>
                                        Curabitur vennatis finibus nte et magna eu ve Aliuam puus seim
                                        rhoncus bibendum,
                                    </p>
                                </div>
                                {/* company social info */}
                                <div className="company-social-info">
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
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p" />
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
                                            <a href="#">
                                                {" "}
                                                <i className="bi bi-arrow-right" /> About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                {" "}
                                                <i className="bi bi-arrow-right" /> Services
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                {" "}
                                                <i className="bi bi-arrow-right" /> Portfolio
                                            </a>
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
                                            <a href="#">
                                                {" "}
                                                <i className="bi bi-arrow-right" />Industrial Lamination
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                {" "}
                                                <i className="bi bi-arrow-right" /> Graphic Design
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                {" "}
                                                <i className="bi bi-arrow-right" /> Offset Printing
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                {" "}
                                                <i className="bi bi-arrow-right" /> T-Shart printing
                                            </a>
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
                                        <i className="bi bi-telephone" /> Phone: 1111 11 11{" "}
                                    </p>
                                    <p>
                                        {" "}
                                        <i className="bi bi-envelope-fill" /> Email: morkimpression@gmail{" "}
                                    </p>
                                    <p>
                                        {" "}
                                        <i className="bi bi-geo-alt-fill" /> Accra Ghana
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

