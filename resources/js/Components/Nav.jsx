import { Link } from "@inertiajs/inertia-react";

export default function Nav() {
    return ( 
        <>
            {/*==================================================*/}
            {/* Start print shop Main Menu */}
            {/*==================================================*/}
            <div id="sticky-header" className="print_shop_nav_manu style-two">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-2">
                            <div className="logo">
                                <a className="logo_img" href="index.html" title="print_shop">
                                    <img src="assets/images/logo.png" alt="" />
                                </a>
                                <a className="main_sticky" href="index.html" title="print_shop">
                                    <img src="assets/images/logo2.png" alt="astute" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <nav className="print_shop_menu">
                                <ul className="nav_scroll">
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link className="" href="/about">
                                            About
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <a href="#">Pages </a>
                                    </li> */}
                                    <li>
                                        <Link href="/services">Services</Link>
                                    </li>
                                    <li>
                                        <Link href="/portfolio">Portfolio</Link>
                                    </li>
                                    {/* <li>
                                        <Link className="/contact" href="contact.html">
                                            Contact
                                        </Link>
                                    </li> */}
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-2">
                            <div className="header-button text-right">
                                <Link href="#">
                                    {" "}
                                    Contact Us <i className="bi bi-arrow-right" />{" "}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* print_shop Mobile Menu  */}
            <div className="mobile-menu-area sticky d-sm-block d-md-block d-lg-none ">
                <div className="mobile-menu">
                    <nav className="print_shop_menu">
                        <ul className="nav_scroll">
                            <li>
                                <a href="#">Home</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="index.html">Print Shope Home</a>
                                    </li>
                                    <li>
                                        <a href="index-2.html">Print Shope Company</a>
                                    </li>
                                    <li>
                                        <a href="index-3.html">Print Shope Creative</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="blog" href="about.html">
                                    About{" "}
                                </a>
                            </li>
                            <li>
                                <a href="#">Pages </a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="about.html">About Us</a>
                                    </li>
                                    <li>
                                        <a href="pricing.html">Pricing</a>
                                    </li>
                                    <li>
                                        <a href="team.html">Our Team</a>
                                    </li>
                                    <li>
                                        <a href="cart.html">Cart</a>
                                    </li>
                                    <li>
                                        <a href="faq.html">Faq</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Services</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="service.html">Our Service</a>
                                    </li>
                                    <li>
                                        <a href="service-details.html">Service Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Project</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="portfolio.html">Portfolio</a>
                                    </li>
                                    <li>
                                        <a href="portfolio-details.html">Portfolio Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Shop</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="shop.html">Shop One</a>
                                    </li>
                                    <li>
                                        <a href="shop-2.html">Shop Two</a>
                                    </li>
                                    <li>
                                        <a href="shop-details.html">Shop Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="blog.html">Blog List</a>
                                    </li>
                                    <li>
                                        <a href="blog-list.html">Blog Grid</a>
                                    </li>
                                    <li>
                                        <a href="blog-details.html">Blog Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="blog" href="contact.html">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/*==================================================*/}
            {/* End print shop Main Menu */}
            {/*==================================================*/}
        </>
     );
}

