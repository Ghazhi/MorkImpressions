import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

export default function Portfolio() {
    return ( 
        <>
            <Nav />
            {/*==================================================*/}
            {/* End print shop Main Menu */}
            {/*==================================================*/}
            {/*==================================================*/}
            {/* Start print shop breatcam section  */}
            {/*==================================================*/}
            <div className="breatcam-section d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breatcam-content text-center">
                                {/* breadcumb title */}
                                <div className="breatcam-title">
                                    <h1> Protfolio </h1>
                                </div>
                                {/* breatcam menu */}
                                <div className="breatcam-menu">
                                    <ul>
                                        <li>
                                            <a href="index.html"> Home </a>
                                        </li>
                                        <li> Portfolio </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End print shop breatcam section */}
            {/*==================================================*/}
            {/*==================================================*/}
            {/* Start itsoft case study Area */}
            {/*==================================================*/}
            <div className="case-study-section">
                <div className="container">
                    <div className="row case-study-bg">
                        <div className="col-lg-12">
                            <div className="print_shop-section-title text-center">
                                <h5> CASE STUDIES </h5>
                                <h1>
                                    We Server the Best Works View Case <span>Studies</span>
                                </h1>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="portfolio_nav">
                                <div className="portfolio_menu">
                                    <ul className="menu-filtering">
                                        <li className="current_menu_item" data-filter=".physics">
                                           
                                            All items
                                        </li>
                                        <li data-filter="*"> Shop </li>
                                        <li data-filter=".chemistry"> T-Shart </li>
                                        <li data-filter=".math"> Print </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row image_load">
                        <div className="col-lg-4 col-md-6 grid-item physics english">
                            <div className="case-study-single-box">
                                <div className="case-study-thumb2">
                                    {/* port content */}
                                    <div className="port-content">
                                        <h5>
                                            <a href="shop.html">Silk-screen printing</a>
                                        </h5>
                                        <a href="shop-2.html">
                                            <i className="bi bi-arrow-right" />
                                        </a>
                                    </div>
                                    <img src="template/assets/images/resource/port1.jpg" alt="" />
                                    {/* port icon */}
                                    <div className="single_portfolio_icon">
                                        <a
                                            className="portfolio-icon venobox vbox-item"
                                            data-gall="myportfolio"
                                            href="template/assets/images/resource/port1.jpg"
                                        >
                                            <i className="bi bi-card-image" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grid-item physics chemistry math">
                            <div className="case-study-single-box">
                                <div className="case-study-thumb2">
                                    <img src="template/assets/images/resource/port2.jpg" alt="" />
                                    {/* port icon */}
                                    <div className="single_portfolio_icon">
                                        <a
                                            className="portfolio-icon venobox vbox-item"
                                            data-gall="myportfolio"
                                            href="template/assets/images/resource/port2.jpg"
                                        >
                                            <i className="bi bi-card-image" />
                                        </a>
                                    </div>
                                    {/* port content */}
                                    <div className="port-content">
                                        <h5>
                                            <a href="shop.html">T- Shirt Design Service</a>
                                        </h5>
                                        <a href="shop-2.html">
                                            <i className="bi bi-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grid-item chemistry english">
                            <div className="case-study-single-box">
                                <div className="case-study-thumb2">
                                    <img src="template/assets/images/resource/port3.jpg" alt="" />
                                    {/* port icon */}
                                    <div className="single_portfolio_icon">
                                        <a
                                            className="portfolio-icon venobox vbox-item"
                                            data-gall="myportfolio"
                                            href="template/assets/images/resource/port3.jpg"
                                        >
                                            <i className="bi bi-card-image" />
                                        </a>
                                    </div>
                                    {/* port content */}
                                    <div className="port-content">
                                        <h5>
                                            <a href="shop.html"> Shoping Bag </a>
                                        </h5>
                                        <a href="shop-2.html">
                                            <i className="bi bi-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grid-item math english">
                            <div className="case-study-single-box">
                                <div className="case-study-thumb2">
                                    <img src="template/assets/images/resource/port4.jpg" alt="" />
                                    {/* port icon */}
                                    <div className="single_portfolio_icon">
                                        <a
                                            className="portfolio-icon venobox vbox-item"
                                            data-gall="myportfolio"
                                            href="template/assets/images/resource/port4.jpg"
                                        >
                                            <i className="bi bi-card-image" />
                                        </a>
                                    </div>
                                    {/* port content */}
                                    <div className="port-content">
                                        <h5>
                                            <a href="shop.html"> Shoping mug </a>
                                        </h5>
                                        <a href="shop-2.html">
                                            <i className="bi bi-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grid-item math physics">
                            <div className="case-study-single-box">
                                <div className="case-study-thumb2">
                                    <img src="template/assets/images/resource/port5.jpg" alt="" />
                                    {/* port icon */}
                                    <div className="single_portfolio_icon">
                                        <a
                                            className="portfolio-icon venobox vbox-item"
                                            data-gall="myportfolio"
                                            href="template/assets/images/resource/port5.jpg"
                                        >
                                            <i className="bi bi-card-image" />
                                        </a>
                                    </div>
                                    {/* port content */}
                                    <div className="port-content">
                                        <h5>
                                            <a href="shop.html"> Printing Service </a>
                                        </h5>
                                        <a href="shop-2.html">
                                            <i className="bi bi-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grid-item chemistry physics">
                            <div className="case-study-single-box">
                                <div className="case-study-thumb2">
                                    <img src="template/assets/images/resource/port3.jpg" alt="" />
                                    {/* port icon */}
                                    <div className="single_portfolio_icon">
                                        <a
                                            className="portfolio-icon venobox vbox-item"
                                            data-gall="myportfolio"
                                            href="template/assets/images/resource/port3.jpg"
                                        >
                                            <i className="bi bi-card-image" />
                                        </a>
                                    </div>
                                    {/* port content */}
                                    <div className="port-content">
                                        <h5>
                                            <a href="shop.html"> Shoping Bag </a>
                                        </h5>
                                        <a href="shop-2.html">
                                            <i className="bi bi-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End itsoft case study Area */}
            {/*==================================================*/}
            {/*==================================================*/}
            {/* Start print shop Portfolio Section  */}
            {/*==================================================*/}
            <div className="portfolio-serction style-two upp2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="print_shop-section-title text-center">
                                <h5> CASE STUDIES </h5>
                                <h1>
                                    {" "}
                                    How Dose We <span> Works </span>{" "}
                                </h1>
                                <p>
                                    {" "}
                                    Professionally pursue economically sound services resource sucking
                                    potentialities morph with premier catalysts for change awesome
                                    services you.{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="portfolio-items-thumb">
                            <div className="item">
                                <img src="template/assets/images/resource/ports2.jpg" alt="" />
                                {/* port content */}
                                <div className="port-content">
                                    <h5>
                                        <a href="#">T- Shirt Design Service</a>
                                    </h5>
                                    <a href="#">
                                        <i className="bi bi-arrow-right" />
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <img src="template/assets/images/resource/ports3.jpg" alt="" />
                                {/* port content */}
                                <div className="port-content">
                                    <h5>
                                        <a href="#"> Shoping mug </a>
                                    </h5>
                                    <a href="#">
                                        <i className="bi bi-arrow-right" />
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <img src="template/assets/images/resource/ports4.jpg" alt="" />
                                {/* port content */}
                                <div className="port-content">
                                    <h5>
                                        <a href="#"> Printing Service </a>
                                    </h5>
                                    <a href="#">
                                        <i className="bi bi-arrow-right" />
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <img src="template/assets/images/resource/ports1.jpg" alt="" />
                                {/* port content */}
                                <div className="port-content">
                                    <h5>
                                        <a href="#">Silk-screen printing</a>
                                    </h5>
                                    <a href="#">
                                        <i className="bi bi-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

     );
}

