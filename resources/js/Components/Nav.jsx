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
                                    <li>
                                        <Link href="/services">Services</Link>
                                    </li>
                                    <li>
                                        <Link href="/portfolio">Portfolio</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        {/* <div className="col-lg-2">
                            <div className="header-button text-right">
                                <Link href="#">
                                    {" "}
                                    Contact Us <i className="bi bi-arrow-right" />{" "}
                                </Link>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* print_shop Mobile Menu  */}
            <div className="mobile-menu-area sticky d-sm-block d-md-block d-lg-none ">
                <div className="mobile-menu">
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
                            <li>
                                <Link href="/services">Services</Link>
                            </li>
                            <li>
                                <Link href="/portfolio">Portfolio</Link>
                            </li>
                            <li>
                                <Link href="#">Contact</Link>
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

