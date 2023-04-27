import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

import { Inertia } from '@inertiajs/inertia';



export default function Portfolio() {
    Inertia.on("success", (event) => {
        event.detail.page.url === "/portfolio" && window.location.reload();
    });
    return (
        <>
            <Nav />
            {/*==================================================*/}
            {/* End print shop Main Menu */}
            {/*==================================================*/}
            {/*==================================================*/}
            {/* Start print shop breatcam section  */}
            {/*==================================================*/}
            <div className="breatcam-section d-flex align-items-center ">
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
            <div className="case-study-section bg-white">
                <div className="container">
                    <div className="row case-study-bg">
                        <div className="col-lg-12">
                            <div className="print_shop-section-title text-center">
                                <h5> CASE STUDIES </h5>
                                <h1>
                                    {" "}
                                    We Serve the Best Works. View Case Our <span>Studies</span>
                                </h1>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="portfolio_nav">
                                <div className="portfolio_menu">
                                    <ul className="menu-filtering">
                                        <li className="current_menu_item" data-filter="*">
                                            {" "}
                                            All items{" "}
                                        </li>
                                        <li data-filter=".branding"> Branding </li>
                                        <li data-filter=".tombler">Tombler Press </li>
                                        <li data-filter=".ond"> Offset & Digital Print </li>
                                        <li data-filter=".dtf">DTF, EMBROIDERY AND SCREEN PRINT  </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row image_load">
                        {/* branding */}
                        <div className="col-lg-4 col-md-6 grid-item  branding">
                            <div className="case-study-single-box">
                                <div className="case-study-thumb2">
                                    {/* port content */}
                                    
                                    <img src="template/assets/images/portfolio/branding/brnd.jpg" alt="" />
                                    {/* port icon */}
                                    <div className="single_portfolio_icon">
                                        <a
                                            className="portfolio-icon venobox vbox-item"
                                            data-gall="myportfolio"
                                            href="template/assets/images/portfolio/branding/brnd.jpg"
                                        >
                                            <i className="bi bi-card-image" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* tombler */}
                        <div className="col-lg-4 col-md-6 grid-item tombler">
                            <div className="case-study-single-box">
                                <div className="case-study-thumb2">
                                    <img src="template/assets/images/portfolio/tombler/tombler1.jpg" alt="" />
                                    {/* port icon */}
                                    <div className="single_portfolio_icon">
                                        <a
                                            className="portfolio-icon venobox vbox-item"
                                            data-gall="myportfolio"
                                            href="template/assets/images/portfolio/tombler/tombler1.jpg"
                                        >
                                            <i className="bi bi-card-image" />
                                        </a>
                                    </div>
                                    {/* port content */}
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grid-item tombler">
                            <div className="case-study-single-box">
                                <div className="case-study-thumb2">
                                    <img src="template/assets/images/portfolio/tombler/tombler2.jpg" alt="" />
                                    {/* port icon */}
                                    <div className="single_portfolio_icon">
                                        <a
                                            className="portfolio-icon venobox vbox-item"
                                            data-gall="myportfolio"
                                            href="template/assets/images/portfolio/tombler/tombler2.jpg"
                                        >
                                            <i className="bi bi-card-image" />
                                        </a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        {/* offset */}
                        <div className="col-lg-4 col-md-6 grid-item ond">
                            <div className="case-study-single-box">
                                <div className="case-study-thumb2">
                                    <img src="template/assets/images/portfolio/offset/off&digi1.jpg" alt="" />
                                    {/* port icon */}
                                    <div className="single_portfolio_icon">
                                        <a
                                            className="portfolio-icon venobox vbox-item"
                                            data-gall="myportfolio"
                                            href="template/assets/images/portfolio/offset/off&digi1.jpg"
                                        >
                                            <i className="bi bi-card-image" />
                                        </a>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grid-item ond">
                            <div className="case-study-single-box">
                                <div className="case-study-thumb2">
                                    <img src="template/assets/images/portfolio/offset/off&digi2.jpg" alt="" />
                                    {/* port icon */}
                                    <div className="single_portfolio_icon">
                                        <a
                                            className="portfolio-icon venobox vbox-item"
                                            data-gall="myportfolio"
                                            href="template/assets/images/portfolio/offset/off&digi2.jpg"
                                        >
                                            <i className="bi bi-card-image" />
                                        </a>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                          {/* digital printing */}
                        <div className="col-lg-4 col-md-6 grid-item dtf">
                            <div className="case-study-single-box">
                                <div className="case-study-thumb2">

                                    <img src="template\assets\images\portfolio\dtf\dtf1.jpg" alt="" />
                                    {/* port icon */}
                                    <div className="single_portfolio_icon">
                                        <a
                                            className="portfolio-icon venobox vbox-item"
                                            data-gall="myportfolio"
                                            href="template\assets\images\portfolio\dtf\dtf1.jpg"
                                        >
                                            <i className="bi bi-card-image" />
                                        </a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grid-item dtf">
                            <div className="case-study-single-box">
                                <div className="case-study-thumb2">
                                    <img src="template\assets\images\portfolio\dtf\dtf2.jpg" alt="" />
                                    {/* port icon */}
                                    <div className="single_portfolio_icon">
                                        <a
                                            className="portfolio-icon venobox vbox-item"
                                            data-gall="myportfolio"
                                            href="template\assets\images\portfolio\dtf\dtf2.jpg"
                                        >
                                            <i className="bi bi-card-image" />
                                        </a>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grid-item dtf">
                            <div className="case-study-single-box">
                                <div className="case-study-thumb2">
                                    <img src="template\assets\images\portfolio\dtf\dtf3.jpg" alt="" />
                                    {/* port icon */}
                                    <div className="single_portfolio_icon">
                                        <a
                                            className="portfolio-icon venobox vbox-item"
                                            data-gall="myportfolio"
                                            href="template\assets\images\portfolio\dtf\dtf3.jpg"
                                        >
                                            <i className="bi bi-card-image" />
                                        </a>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grid-item dtf">
                            <div className="case-study-single-box">
                                <div className="case-study-thumb2">
                                    <img src="template\assets\images\portfolio\dtf\dtf4.jpg" alt="" />
                                    {/* port icon */}
                                    <div className="single_portfolio_icon">
                                        <a
                                            className="portfolio-icon venobox vbox-item"
                                            data-gall="myportfolio"
                                            href="template\assets\images\portfolio\dtf\dtf4.jpg"
                                        >
                                            <i className="bi bi-card-image" />
                                        </a>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grid-item dtf">
                            <div className="case-study-single-box">
                                <div className="case-study-thumb2">
                                    <img src="template\assets\images\portfolio\dtf\dtf5.jpg" alt="" />
                                    {/* port icon */}
                                    <div className="single_portfolio_icon">
                                        <a
                                            className="portfolio-icon venobox vbox-item"
                                            data-gall="myportfolio"
                                            href="template\assets\images\portfolio\dtf\dtf5.jpg"
                                        >
                                            <i className="bi bi-card-image" />
                                        </a>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grid-item dtf">
                            <div className="case-study-single-box">
                                <div className="case-study-thumb2">
                                    <img src="template\assets\images\portfolio\dtf\dtf6.jpg" alt="" />
                                    {/* port icon */}
                                    <div className="single_portfolio_icon">
                                        <a
                                            className="portfolio-icon venobox vbox-item"
                                            data-gall="myportfolio"
                                            href="template\assets\images\portfolio\dtf\dtf6.jpg"
                                        >
                                            <i className="bi bi-card-image" />
                                        </a>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grid-item dtf">
                            <div className="case-study-single-box">
                                <div className="case-study-thumb2">
                                    <img src="template\assets\images\portfolio\dtf\dtf7.jpg" alt="" />
                                    {/* port icon */}
                                    <div className="single_portfolio_icon">
                                        <a
                                            className="portfolio-icon venobox vbox-item"
                                            data-gall="myportfolio"
                                            href="template\assets\images\portfolio\dtf\dtf7.jpg"
                                        >
                                            <i className="bi bi-card-image" />
                                        </a>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grid-item dtf">
                            <div className="case-study-single-box">
                                <div className="case-study-thumb2">
                                    <img src="template\assets\images\portfolio\dtf\dtf8.jpg" alt="" />
                                    {/* port icon */}
                                    <div className="single_portfolio_icon">
                                        <a
                                            className="portfolio-icon venobox vbox-item"
                                            data-gall="myportfolio"
                                            href="template\assets\images\portfolio\dtf\dtf8.jpg"
                                        >
                                            <i className="bi bi-card-image" />
                                        </a>
                                    </div>
                                    {/* port content */}
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grid-item dtf">
                            <div className="case-study-single-box">
                                <div className="case-study-thumb2">
                                    <img src="template\assets\images\portfolio\dtf\dtf9.jpg" alt="" />
                                    {/* port icon */}
                                    <div className="single_portfolio_icon">
                                        <a
                                            className="portfolio-icon venobox vbox-item"
                                            data-gall="myportfolio"
                                            href="template\assets\images\portfolio\dtf\dtf9.jpg"
                                        >
                                            <i className="bi bi-card-image" />
                                        </a>
                                    </div>
                                    {/* port content */}
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grid-item dtf">
                            <div className="case-study-single-box">
                                <div className="case-study-thumb2">
                                    <img src="template\assets\images\portfolio\dtf\dtf10.jpg" alt="" />
                                    {/* port icon */}
                                    <div className="single_portfolio_icon">
                                        <a
                                            className="portfolio-icon venobox vbox-item"
                                            data-gall="myportfolio"
                                            href="template\assets\images\portfolio\dtf\dtf10.jpg"
                                        >
                                            <i className="bi bi-card-image" />
                                        </a>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grid-item dtf">
                            <div className="case-study-single-box">
                                <div className="case-study-thumb2">
                                    <img src="template\assets\images\portfolio\dtf\dtf11.jpg" alt="" />
                                    {/* port icon */}
                                   
                                   
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

            <Footer />
        </>

    );
}

