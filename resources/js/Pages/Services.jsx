import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

// modal
import { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export default function Services() {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    const [open8, setOpen8] = useState(false);
    return (

        <>
            <Nav />
            <div className="breatcam-section d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breatcam-content text-center">
                                {/* breadcumb title */}
                                <div className="breatcam-title">
                                    <h1> Services </h1>
                                </div>
                                {/* breatcam menu */}
                                <div className="breatcam-menu">
                                    <ul>
                                        <li>
                                            <a href="index.html"> Home </a>
                                        </li>
                                        <li> Services </li>
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
            {/* Start print shop Service Section  */}
            {/*==================================================*/}
            <div className="service-section style-two upp">
                <div className="container">
                    <div className="row service-bg">
                        <div className="col-lg-12">
                            <div className="print_shop-section-title text-center pb-4">
                                <h5> WE ARE Professional </h5>
                                <h1> Awesome Service For Printing</h1>
                                <h1>
                                    {" "}
                                    <span> And Design </span>
                                </h1>
                            </div>
                        </div>
                        {/* service shape */}
                        <div className="service-shape bounce-animate3">
                            <img src="template/assets/images/slider/cross2.png" alt="" />
                        </div>
                        <div className="service-shape2 dance2">
                            <img src="template/assets/images/slider/ball1.png" alt="" />
                        </div>
                        <div className="service-shape3 bounce-animate">
                            <img src="template/assets/images/slider/cross1.png" alt="" />
                        </div>
                        <div className="service-shape4 bounce-animate">
                            <img src="template/assets/images/resource/ball1.png" alt="" />
                        </div>
                        <div className="service-shape5 bounce-animate4">
                            <img src="template/assets/images/resource/ball2.png" alt="" />
                        </div>
                    </div>
                    {/* <Modal open={open1} onClose={() => setOpen1(false)} center>
                        <div className="row">
                            <div className="col ">
                                <img src="template/assets/images/slider/hero-bg.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                            <div className="col">
                                <div className="csd-content">
                                    <div className="csd-title pb-10">
                                        <h2>Growth Strategies</h2>
                                    </div>
                                    <p>
                                        Whether you are building an enterprise web portal or a state-of-the-art
                                        website, you always need the right modern tools. Well-builtst and maintained
                                        PHP frameworks provide those tools maintained PHP frameworks provide those
                                        tools in abundance, allowing thiatse developers to save time, re-use code,
                                        and streamlin the back end. As software development tools continuously
                                        change to follow the latest. Despite the competition from startups and the
                                        ever-present economic challenges, the banking industry is gradually adopting
                                        what the latest technologies have to offer. From cloud technology to cyber
                                        risk management to machine learning thats investment banking, join us as we
                                        explore the banking industry trends for 2019 and beyond. Cloud is one of the
                                        industry trends as well.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </Modal> */}
                    {/* <Modal open={open2} onClose={() => setOpen2(false)} center>
                        <div className="row">
                            <div className="col ">
                                <img src="template/assets/images/slider/hero-bg.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                            <div className="col">
                                <div className="csd-content">
                                    <div className="csd-title pb-10">
                                        <h2>Title</h2>
                                    </div>
                                    <p>
                                        Whether you are building an enterprise web portal or a state-of-the-art
                                        website, you always need the right modern tools. Well-builtst and maintained
                                        PHP frameworks provide those tools maintained PHP frameworks provide those
                                        tools in abundance, allowing thiatse developers to save time, re-use code,
                                        and streamlin the back end. As software development tools continuously
                                        change to follow the latest. Despite the competition from startups and the
                                        ever-present economic challenges, the banking industry is gradually adopting
                                        what the latest technologies have to offer. From cloud technology to cyber
                                        risk management to machine learning thats investment banking, join us as we
                                        explore the banking industry trends for 2019 and beyond. Cloud is one of the
                                        industry trends as well.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </Modal>
                    <Modal open={open3} onClose={() => setOpen3(false)} center>
                        <div className="row">
                            <div className="col ">
                                <img src="template/assets/images/slider/hero-bg.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                            <div className="col">
                                <div className="csd-content">
                                    <div className="csd-title pb-10">
                                        <h2>Title</h2>
                                    </div>
                                    <p>
                                        Whether you are building an enterprise web portal or a state-of-the-art
                                        website, you always need the right modern tools. Well-builtst and maintained
                                        PHP frameworks provide those tools maintained PHP frameworks provide those
                                        tools in abundance, allowing thiatse developers to save time, re-use code,
                                        and streamlin the back end. As software development tools continuously
                                        change to follow the latest. Despite the competition from startups and the
                                        ever-present economic challenges, the banking industry is gradually adopting
                                        what the latest technologies have to offer. From cloud technology to cyber
                                        risk management to machine learning thats investment banking, join us as we
                                        explore the banking industry trends for 2019 and beyond. Cloud is one of the
                                        industry trends as well.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </Modal>
                    <Modal open={open4} onClose={() => setOpen4(false)} center>
                        <div className="row">
                            <div className="col ">
                                <img src="template/assets/images/slider/hero-bg.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                            <div className="col">
                                <div className="csd-content">
                                    <div className="csd-title pb-10">
                                        <h2>Title</h2>
                                    </div>
                                    <p>
                                        Whether you are building an enterprise web portal or a state-of-the-art
                                        website, you always need the right modern tools. Well-builtst and maintained
                                        PHP frameworks provide those tools maintained PHP frameworks provide those
                                        tools in abundance, allowing thiatse developers to save time, re-use code,
                                        and streamlin the back end. As software development tools continuously
                                        change to follow the latest. Despite the competition from startups and the
                                        ever-present economic challenges, the banking industry is gradually adopting
                                        what the latest technologies have to offer. From cloud technology to cyber
                                        risk management to machine learning thats investment banking, join us as we
                                        explore the banking industry trends for 2019 and beyond. Cloud is one of the
                                        industry trends as well.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </Modal>
                    <Modal open={open5} onClose={() => setOpen5(false)} center>
                        <div className="row">
                            <div className="col ">
                                <img src="template/assets/images/slider/hero-bg.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                            <div className="col">
                                <div className="csd-content">
                                    <div className="csd-title pb-10">
                                        <h2>Title</h2>
                                    </div>
                                    <p>
                                        Whether you are building an enterprise web portal or a state-of-the-art
                                        website, you always need the right modern tools. Well-builtst and maintained
                                        PHP frameworks provide those tools maintained PHP frameworks provide those
                                        tools in abundance, allowing thiatse developers to save time, re-use code,
                                        and streamlin the back end. As software development tools continuously
                                        change to follow the latest. Despite the competition from startups and the
                                        ever-present economic challenges, the banking industry is gradually adopting
                                        what the latest technologies have to offer. From cloud technology to cyber
                                        risk management to machine learning thats investment banking, join us as we
                                        explore the banking industry trends for 2019 and beyond. Cloud is one of the
                                        industry trends as well.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </Modal>
                    <Modal open={open6} onClose={() => setOpen6(false)} center>
                        <div className="row">
                            <div className="col ">
                                <img src="template/assets/images/slider/hero-bg.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                            <div className="col">
                                <div className="csd-content">
                                    <div className="csd-title pb-10">
                                        <h2>Title</h2>
                                    </div>
                                    <p>
                                        Whether you are building an enterprise web portal or a state-of-the-art
                                        website, you always need the right modern tools. Well-builtst and maintained
                                        PHP frameworks provide those tools maintained PHP frameworks provide those
                                        tools in abundance, allowing thiatse developers to save time, re-use code,
                                        and streamlin the back end. As software development tools continuously
                                        change to follow the latest. Despite the competition from startups and the
                                        ever-present economic challenges, the banking industry is gradually adopting
                                        what the latest technologies have to offer. From cloud technology to cyber
                                        risk management to machine learning thats investment banking, join us as we
                                        explore the banking industry trends for 2019 and beyond. Cloud is one of the
                                        industry trends as well.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </Modal>
                    <Modal open={open7} onClose={() => setOpen7(false)} center>
                        <div className="row">
                            <div className="col ">
                                <img src="template/assets/images/slider/hero-bg.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                            <div className="col">
                                <div className="csd-content">
                                    <div className="csd-title pb-10">
                                        <h2>Title</h2>
                                    </div>
                                    <p>
                                        Whether you are building an enterprise web portal or a state-of-the-art
                                        website, you always need the right modern tools. Well-builtst and maintained
                                        PHP frameworks provide those tools maintained PHP frameworks provide those
                                        tools in abundance, allowing thiatse developers to save time, re-use code,
                                        and streamlin the back end. As software development tools continuously
                                        change to follow the latest. Despite the competition from startups and the
                                        ever-present economic challenges, the banking industry is gradually adopting
                                        what the latest technologies have to offer. From cloud technology to cyber
                                        risk management to machine learning thats investment banking, join us as we
                                        explore the banking industry trends for 2019 and beyond. Cloud is one of the
                                        industry trends as well.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </Modal>
                    <Modal open={open8} onClose={() => setOpen8(false)} center>
                        <div className="row">
                            <div className="col ">
                                <img src="template/assets/images/slider/hero-bg.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                            <div className="col">
                                <div className="csd-content">
                                    <div className="csd-title pb-10">
                                        <h2>Title</h2>
                                    </div>
                                    <p>
                                        Whether you are building an enterprise web portal or a state-of-the-art
                                        website, you always need the right modern tools. Well-builtst and maintained
                                        PHP frameworks provide those tools maintained PHP frameworks provide those
                                        tools in abundance, allowing thiatse developers to save time, re-use code,
                                        and streamlin the back end. As software development tools continuously
                                        change to follow the latest. Despite the competition from startups and the
                                        ever-present economic challenges, the banking industry is gradually adopting
                                        what the latest technologies have to offer. From cloud technology to cyber
                                        risk management to machine learning thats investment banking, join us as we
                                        explore the banking industry trends for 2019 and beyond. Cloud is one of the
                                        industry trends as well.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </Modal> */}
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-service-box2">
                                {/* service thumb */}

                                <div className="service-thumb" 
                                // onClick={() => setOpen1(true)}
                                >
                                    <img src="template/assets/images/mork/bg1.jpg" alt="" style={{ width: "100%", height: "15rem" }} />
                                    {/* port content */}
                                    <div className="port-content upper">
                                        <h5>
                                            <a href="#"> Large Format Printing </a>
                                        </h5>
                                        <a href="#">
                                            <i className="bi bi-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                                {/* service content */}
                                <div className="service-content" style={{ height: "13rem" }}>
                                    <h3> Large Format Printing </h3>
                                    <p>
                                        Large graphics and designs for billboards,
                                        advertisment on cars and buses etc
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-service-box2">
                                {/* service thumb */}
                                <div className="service-thumb" 
                                // onClick={() => setOpen2(true)}
                                >
                                    <img src="template/assets/images/mork/ip.jpg" alt="" style={{ width: "100%", height: "15rem" }} />
                                    {/* port content */}
                                    <div className="port-content upper">
                                        <h5>
                                            <a href="#"> 	Industrial & Commercial Print </a>
                                        </h5>
                                        <a href="#">
                                            <i className="bi bi-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                                {/* service content */}
                                <div className="service-content" style={{ height: "13rem" }}>
                                    <h3>Industrial & Commercial Print </h3>
                                    <p>
                                        {" "}
                                        We print on products as part of a
                                        manufacturing process which adds value to products.{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-service-box2">
                                {/* service thumb */}
                                <div className="service-thumb" 
                                // onClick={() => setOpen3(true)}
                                >
                                    <img src="template/assets/images/mork/il.jpg" alt="" style={{ width: "100%", height: "15rem" }} />
                                    {/* port content */}
                                    <div className="port-content upper">
                                        <h5>
                                            <a href="#"> Industrial Lamination </a>
                                        </h5>
                                        <a href="#">
                                            <i className="bi bi-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                                {/* service content */}
                                <div className="service-content" 
                                // style={{ height: "13rem" }}
                                >
                                    <h3> Industrial Lamination </h3>
                                    <p>
                                        {" "}
                                        Protect important documents with protective filming.{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-service-box2">
                                {/* service thumb */}
                                <div className="service-thumb" 
                                // onClick={() => setOpen4(true)}
                                >
                                    <img src="template/assets/images/mork/color.jpg" alt="" style={{ width: "100%", height: "15rem" }} />
                                    {/* port content */}
                                    <div className="port-content upper" >
                                        <h5>
                                            <a href="#"> Digital Colour Press </a>
                                        </h5>
                                        <a href="#">
                                            <i className="bi bi-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                                {/* service content */}
                                <div className="service-content" style={{ height: "13rem" }}>
                                    <h3> Digital Colour Press </h3>
                                    <p>
                                        {" "}
                                        A high-quality color printing for a professional-quality prints.{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-service-box2">
                                {/* service thumb */}
                                <div className="service-thumb" 
                                // onClick={() => setOpen5(true)}
                                >
                                    <img src="template/assets/images/mork/grdsn.jpg" alt="" style={{ width: "100%", height: "15rem" }} />
                                    {/* port content */}
                                    <div className="port-content upper">
                                        <h5>
                                            <a href="#"> Graphic Designing </a>
                                        </h5>
                                        <a href="#">
                                            <i className="bi bi-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                                {/* service content */}
                                <div className="service-content" style={{ height: "13rem" }}>
                                    <h3> Graphic Design </h3>
                                    <p>
                                     Creative, innovative and communicative designs for your events and prints.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-service-box2">
                                {/* service thumb */}
                                <div className="service-thumb" 
                                // onClick={() => setOpen6(true)}
                                >
                                    <img src="template/assets/images/mork/cala.jpg" alt="" style={{ width: "100%", height: "15rem" }} />
                                    {/* port content */}
                                    <div className="port-content upper">
                                        <h5>
                                            <a href="#"> Colour Separation </a>
                                        </h5>
                                        <a href="#">
                                            <i className="bi bi-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                                {/* service content */}
                                <div className="service-content" style={{ height: "13rem" }}>
                                    <h3> Colour Separation  </h3>
                                    <p>
                                        {" "}
                                        Separating a picture by colors in order to make negatives and plates
                                         for color printing. 
                                        {" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-service-box2">
                                {/* service thumb */}
                                <div className="service-thumb" 
                                // onClick={() => setOpen7(true)}
                                >
                                    <img src="template/assets/images/mork/mag.jpg" alt="" style={{ width: "100%", height: "15rem" }} />
                                    {/* port content */}
                                    <div className="port-content upper">
                                        <h5>
                                            <a href="#"> Offset Press </a>
                                        </h5>
                                        <a href="#">
                                            <i className="bi bi-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                                {/* service content */}
                                <div className="service-content" style={{ height: "13rem" }}>
                                    <h3> Offset Press </h3>
                                    <p>
                                    We offer mass-production print on metal plates, transferred to rubber blankets or 
                                    rollers and then to the print media.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-service-box2">
                                {/* service thumb */}
                                <div className="service-thumb" onClick={() => setOpen8(true)}>
                                    <img src="template/assets/images/mork/sp.jpg" alt="" style={{ width: "100%", height: "15rem" }} />
                                    {/* port content */}
                                    <div className="port-content upper">
                                        <h5>
                                            <a href="#"> Security Printing</a>
                                        </h5>
                                        <a href="#">
                                            <i className="bi bi-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                                {/* service content */}
                                <div className="service-content" style={{ height: "13rem" }}>
                                    <h3> Security Printing </h3>
                                    <p>
                                    Cheques, passports, security tapes, stock certificates, postage stamps and identity cards.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End print shop Service Section  */}
            {/*==================================================*/}
            {/*==================================================*/}
            {/* Start print shop Blog Section  */}
            {/*==================================================*/}
            <div className="blog-section upp">
                <div className="container">
                    <div className="row align-items-center mb-60">
                        <div className="col-lg-12">
                            <div className="print_shop-section-title text-center">
                                <h5> We Are Professionals </h5>
                                <h1> Choose The Best Package For </h1>
                                <h1>
                                    {" "}
                                    <span>your Business</span>{" "}
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-box">
                                {/* blog thumb */}
                                <div className="single-blog-thumb">
                                    <img src="template/assets/images/mork/12.jpeg" style={{ width: "100%", height: "20rem" }} alt="" />
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-box">
                                {/* blog thumb */}
                                <div className="single-blog-thumb">
                                    <img src="template/assets/images/mork/7.jpeg" style={{ width: "100%", height: "20rem" }} alt="" />
                                </div>
                                {/* blog content */}

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-box">
                                {/* blog thumb */}
                                <div className="single-blog-thumb">
                                    <img src="template/assets/images/mork/6.jpeg" style={{ width: "100%", height: "20rem" }} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-box">
                                {/* blog thumb */}
                                <div className="single-blog-thumb">
                                    <img src="template/assets/images/mork/10.jpeg" style={{ width: "100%", height: "20rem" }} alt="" />
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-box">
                                {/* blog thumb */}
                                <div className="single-blog-thumb">
                                    <img src="template/assets/images/mork/8.jpeg" style={{ width: "100%", height: "20rem" }} alt="" />
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-box">
                                {/* blog thumb */}
                                <div className="single-blog-thumb">
                                    <img src="template/assets/images/mork/5.jpeg" style={{ width: "100%", height: "20rem" }} alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End print shop Blog Section */}
            {/*==================================================*/}
            <Footer />
        </>

    );
}
