import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

// Tab
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';


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
                                        <Tabs>
                                            <TabList>
                                                <Tab >Title 1</Tab>
                                                <Tab>Title 2</Tab>
                                            </TabList>
                                           <TabPanel>
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
                                           </TabPanel>
                                           <TabPanel>
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
                                                            <img src="template/assets/images/resource/ports.jpg" alt="" />
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
                                           </TabPanel>
                                            
                                        </Tabs>

                                    </ul>
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

