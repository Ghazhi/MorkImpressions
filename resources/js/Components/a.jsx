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
                                    {/* <img src="assets/images/logo.png" alt="" /> */}
                                </a>
                                <a className="main_sticky" href="index.html" title="print_shop">
                                    <img src="assets/images/mork/morkLogo.jpeg" alt="astute" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <nav className="print_shop_menu">
                                <ul className="">
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
                    </div>
                </div>
            </div>
            {/* print_shop Mobile Menu  */}
            <div className="mobile-menu-area sticky d-sm-block d-md-block d-lg-none ">
                <div className="">
                {/* <div className=""> */}
                    <nav className="print_shop_menu">
                        <ul className="nav_scroll" style={{fontSize:"12px"}} >
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
            </div>
            {/*==================================================*/}
            {/* End print shop Main Menu */}
            {/*==================================================*/}
        </>
     );
}

