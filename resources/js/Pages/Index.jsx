import React from "react";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";


import { Inertia } from '@inertiajs/inertia';

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Link } from "@inertiajs/inertia-react";
// import "./styles.css"

function Welcome() {
  Inertia.on('success', (event) => {
    event.detail.page.url === "/" && window.location.reload()
  })
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )
  return (
    <>
      <Nav />
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <div className="hero-section hero2 d-flex align-items-center" style={{ height: "40rem" }}>
            <div className="container">
              <div className="row hero-bg align-items-center">
                <div className="col-lg-12">
                  <div className="hero-content">
                    {/* <h5> DIGITAL PRINTING COMPANY </h5> */}
                    <h1> Quality Digital and  </h1>
                    <h1> Offset Printing  </h1>
                    <h1>Company</h1>
                    <p>
                      Fast print, graphic design, image setter, offset printing
                      and production
                      of primary packaging with high-resolution pre-press equipment.
                    </p>
                  </div>
                  {/* hero button */}
                  <div className="hero-button">
                    <Link href="services">
                      Our Services <i className="bi bi-arrow-right" />
                    </Link>
                  </div>
                  {/* video icon */}

                </div>
                {/* slider shape */}
                <div className="hero-shape">
                  <div className="hero-shape-thumb bounce-animate">
                    {/* <img src="template/assets/images/slider/ball2.png" alt="" /> */}
                  </div>
                  <div className="hero-shape-thumb2 dance">
                    {/* <img src="template/assets/images/resource/ball2.png" alt="" /> */}
                  </div>
                  <div className="hero-shape-thumb3 bounce-animate2">
                    {/* <img src="template/assets/images/slider/cross1.png" alt="" /> */}
                  </div>
                  <div className="hero-shape-thumb4 bounce-animate3">
                    {/* <img src="template/assets/images/slider/cross2.png" alt="" /> */}
                  </div>
                  <div className="hero-shape-thumb5 bounce-animate4">
                    <img src="template/assets/images/slider/hero-shape.png" alt="" />
                  </div>
                  <div className="hero-shape-thumb6 dance2">
                    <img src="template/assets/images/slider/hero-shape2.png" alt="" />
                    {/* shape title */}
                    <div className="shape-title">
                      <h2 className="">Mork Impressions </h2>
                      {/* <h3>Company</h3> */}
                    </div>
                  </div>
                  {/* shape End */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second slide */}
        <div className="keen-slider__slide number-slide2">
          <div className="custom-hero-section custom-hero2 d-flex align-items-center" style={{ height: "40rem" }}>
            <div className="container">
              <div className="row custom-hero-bg align-items-center">
                <div className="col-lg-12">
                  <div className="custom-hero-content">
                   {/* <h5> DIGITAL PRINTING COMPANY </h5> */}
                   <h1> Quality Digital and  </h1>
                    <h1> Offset Printing  </h1>
                    <h1>Company</h1>
                    <p>
                      Fast print, graphic design, image setter, offset printing
                      and production
                      of primary packaging with high-resolution pre-press equipment.
                    </p>
                  </div>
                  {/* hero button */}
                  <div className="hero-button">
                    <Link href="about">
                      About Us<i className="bi bi-arrow-right" />
                    </Link>
                  </div>
                  {/* video icon */}

                </div>
                {/* slider shape */}
                <div className="custom-hero-shape">
                  <div className="custom-hero-shape-thumb bounce-animate">
                    {/* <img src="template/assets/images/slider/ball2.png" alt="" /> */}
                  </div>
                  <div className="hero-shape-thumb2 dance">
                    {/* <img src="template/assets/images/resource/ball2.png" alt="" /> */}
                  </div>
                  <div className="hero-shape-thumb3 bounce-animate2">
                    {/* <img src="template/assets/images/slider/cross1.png" alt="" /> */}
                  </div>
                  <div className="hero-shape-thumb4 bounce-animate3">
                    {/* <img src="template/assets/images/slider/cross2.png" alt="" /> */}
                  </div>
                  {/* <div className="hero-shape-thumb5 bounce-animate4">
                    <img src="template/assets/images/slider/hero-shape.png" alt="" />
                  </div> */}
                  <div className="custom-hero-shape-thumb6 dance2">
                    <img src="template/assets/images/slider/hero-shape2.png" alt="" />
                    {/* shape title */}
                    <div className="shape-title" style={{ top: "14rem" }}>
                      <h2 className="">Mork Impressions </h2>
                      {/* <h3>Company</h3> */}
                    </div>
                  </div>
                  {/* shape End */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*==================================================*/}
      {/* Start print shop hero section */}
      {/*==================================================*/}

      {/*==================================================*/}
      {/*End print shop hero Section  */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start print shop Process Section  */}
      {/*==================================================*/}
      <div className="process-serction p-3">
        <div className="container">
          <div className="row process-bg ">
            <div className="col-lg-12">
              <div className="print_shop-section-title text-center">
                {/* <h5> OUR WORK PROCESS </h5> */}
                <h1>
                  {" "}
                  {/* How Dose We <span>Works</span> */}
                </h1>
                <p>
                 
                </p>
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
        </div>
      </div>
      {/*==================================================*/}
      {/* End print shop process Section  */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start print shop About Section  */}
      {/*==================================================*/}
      <div className="about-section upp pt-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="row align-items-center abouts">
                <div className="col-lg-6 col-md-6">
                  <div className="thumb-items">
                    <img src="template/assets/images/mork/1.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="thumb-items">
                    <img src="template/assets/images/mork/4.jpeg" alt="" />
                  </div>
                  <div className="thumb-items">
                    <img src="template/assets/images/mork/3.jpeg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 pl-35 pr-0">
              <div className="print_shop-section-title">
                <h5> ABOUT OUR PRINTING SERVICES </h5>
                <h1>
                  {" "}
                  Produce Stuning <span>Printing</span>
                </h1>
                <h1> For Your Business </h1>
                <p>
                  At Mork Impression, we undertake both industrial and commercial printing.
                  We are experts in the following:
                </p>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="about-print-items">
                    <div className="about-icon">
                      <img src="template/assets/images/resource/about-icon1.png" alt="" />
                    </div>
                    <div className="about-item-content">
                      <h4> Industrial printing  </h4>
                      <p>
                        {" "}
                        services resource potentialities awesome services you.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="about-print-items">
                    <div className="about-icon">
                      <img src="template/assets/images/resource/about-icon2.png" alt="" />
                    </div>
                    <div className="about-item-content">
                      <h4> Commercial printing  </h4>
                      <p>
                        {" "}
                        services resource potentialities awesome services you.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* about check */}
              <div className="about-check">
                <p>
                   <i className="bi bi-check-lg" /> Large Format on Flexi, Transparent, SAV, etc
                </p>
              </div>
              {/* about check */}
              <div className="about-check">
                <p>
                  <i className="bi bi-check-lg" />
                  Printing Planning (Mounting of Plate and Exposure)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End print shop About Section  */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start print shop Service Section  */}
      {/*==================================================*/}
      <div className="service-section style-two">
        <div className="container">
          <div className="row service-bg">
            <div className="col-lg-12">
              <div className="print_shop-section-title text-center">
                <h5> WE ARE Professionals </h5>
                <h1> Awesome Service For Printing</h1>
                <h1>
                  {" "}
                  <span> And Design </span>
                </h1>
                <p>
                  We produce to precision, accuracy and exactitude. We provide services with speed and accuracy.
                </p>
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
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-service-box2">
                {/* service thumb */}
                <div className="service-thumb">
                  <img src="template/assets/images/mork/bg1.jpg" alt="" style={{ width: "100%", height: "13rem" }} />
                  {/* port content */}
                  <div className="port-content upper">
                    <h5>
                      <Link href="services"> Large Format Printing </Link>
                    </h5>
                    <Link href="services">
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </div>
                </div>
                {/* service content */}
                <div className="service-content" style={{ height: "13rem" }}>
                  <h3> Large Format Printing </h3>
                  <p>
                    {" "}
                    Large graphics and designs for billboards,
                    advertisment on cars and buses etc.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-service-box2">
                {/* service thumb */}
                <div className="service-thumb">
                  <img src="template/assets/images/mork/ip.jpg" alt="" style={{ width: "100%", height: "13rem" }} />
                  {/* port content */}
                  <div className="port-content upper">
                    <h5>
                      <Link href="services"> Industrial & Commercial Print </Link>
                    </h5>
                    <Link href="services">
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </div>
                </div>
                {/* service content */}
                <div className="service-content" style={{ height: "13rem" }}>
                  <h3> Industrial & Commercial Print </h3>
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
                <div className="service-thumb">
                  <img src="template/assets/images/mork/bg2.jpg" alt="" style={{ width: "100%", height: "13rem" }} />
                  {/* port content */}
                  <div className="port-content upper">
                    <h5>
                      <Link href="services"> Industrial Lamination  </Link>
                    </h5>
                    <Link href="services">
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </div>
                </div>
                {/* service content */}
                <div className="service-content" style={{ height: "13rem" }}>
                  <h3> Industrial Lamination  </h3>
                  <p>
                   Protect important documents with protective filming.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-service-box2">
                {/* service thumb */}
                <div className="service-thumb">
                  <img src="template/assets/images/mork/color.jpg" alt="" style={{ width: "100%", height: "13rem" }} />
                  {/* port content */}
                  <div className="port-content upper">
                    <h5>
                      <Link href="services"> Digital Colour Press </Link>
                    </h5>
                    <Link href="services">
                      <i className="bi bi-arrow-right" />
                    </Link>
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
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End print shop Service Section  */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start print shop Portfolio Section  */}
      {/*==================================================*/}
      <div className="portfolio-serction style-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="print_shop-section-title text-center">
                <h5> Portofolio </h5>
                <h1>
                  {" "}
                  Sample<span> Works </span>{" "}
                </h1>
                <p>

                  {" "}
                  Our high-resolution pre-press equipment releases every pantone with the exact colour density that meets modern demands of any Organisation.
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
                    <Link href="/portfolio"> View More </Link>
                  </h5>
                  <Link href="portfolio">
                    <i className="bi bi-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="item">
                <img src="template/assets/images/resource/ports3.jpg" alt="" />
                {/* port content */}
                <div className="port-content">
                  <h5>
                    <Link href="/portfolio"> View More </Link>
                  </h5>
                  <Link href="portfolio">
                    <i className="bi bi-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="item">
                <img src="template/assets/images/resource/ports4.jpg" alt="" />
                {/* port content */}
                <div className="port-content">
                  <h5>
                    <Link href="/portfolio"> View More </Link>
                  </h5>
                  <Link href="portfolio">
                    <i className="bi bi-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="item">
                <img src="template/assets/images/resource/ports1.jpg" alt="" />
                {/* port content */}
                <div className="port-content">
                  <h5>
                    <Link href="/portfolio"> View More </Link>
                  </h5>
                  <Link href="portfolio">
                    <i className="bi bi-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End print shop portfolio Section  */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start print shop Faq Section  */}
      {/*==================================================*/}
      <div className="faq-section upp">
        <div className="container">
          <div className="row faq-bg align-items-center">
            <div className="col-lg-6 col-md-6 pr-50">
              <div className="print_shop-section-title">
                {/* <h5 className="pt-0 mt-0"> What We Do </h5> */}
                <h1 className="pb-4">
                  {" "}
                  What We<span> Do</span>{" "}
                </h1>

              </div>
              {/* Start Accordion */}
              <div className="tab_container">
                <div id="tab1" className="tab_content">
                  <div className="about-check">
                    {/* <h4 className="pb-3 m-0">What We Do: </h4> */}
                    <p>
                      <i className="bi bi-check-lg" />
                      Printing Planning (Mounting of Plate and Exposure),
                    </p>
                  </div>
                  {/* about check */}
                  <div className="about-check">
                    <p>
                      <i className="bi bi-check-lg" />
                      PVC I.D Cards,
                      Labels
                    </p>
                  </div>
                  <div className="about-check">
                    <p>
                      <i className="bi bi-check-lg" />
                      Magazines,
                      Skillets
                    </p>
                  </div>
                  <div className="about-check">
                    <p>
                      <i className="bi bi-check-lg" />
                      Annual Reports,
                      Brochures
                    </p>
                  </div>
                  <div className="about-check">
                    <p>
                      <i className="bi bi-check-lg" />
                      News Letters,
                      Books
                    </p>
                  </div>
                  <div className="about-check">
                    <p>
                      <i className="bi bi-check-lg" />
                      Self-Adhesives (Stickers),
                      Letterheads
                    </p>
                  </div>
                  <div className="about-check">
                    <p>
                      <i className="bi bi-check-lg" />
                      Business Cards,
                      Heat press
                    </p>
                  </div>
                  <div className="about-check">
                    <p>
                      <i className="bi bi-check-lg" />
                      Mug and Bottle branding,
                      Branding of Souvenirss
                    </p>
                  </div>
                </div>
              </div>
              {/* End Accordion */}
            </div>
            <div className="col-lg-6 col-md-6 pl-40">
              <div className="faq-thumb" >
                <img src="template/assets/images/resource/post4.png" style={{ height: "35rem", width: "100%" }} alt="" />
              </div>
            </div>
            {/* faq shape */}
            <div className="faq-shape bounce-animate">
              <img src="template/assets/images/resource/ball2.png" alt="" />
            </div>
            <div className="faq-shape2 bounce-animate2">
              <img src="template/assets/images/slider/ball2.png" alt="" />
            </div>
            <div className="faq-shape3 bounce-animate3">
              <img src="template/assets/images/slider/cross1.png" alt="" />
            </div>
            <div className="faq-shape4 bounce-animate4">
              <img src="template/assets/images/slider/ball2.png" alt="" />
            </div>
            <div className="faq-shape5 bounce-animate5">
              <img src="template/assets/images/slider/cross2.png" alt="" />
            </div>
            <div className="faq-shape6">
              <img src="template/assets/images/resource/dots.png" alt="" />
            </div>
            <div className="faq-shape7 bounce-animate">
              <img src="template/assets/images/resource/ball2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End print shop Faq Section */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start print shop Brand Section  */}
      {/*==================================================*/}

      {/* partners */}
      <div className="brand-section" style={{ paddingBottom: "8rem" }}>

        <div className="mx-auto " >
          <div className="row gx-5" style={{ justifyContent: "center" }} >
            <div className="brand-list owl-carousel">
              <div className="col-lg-12 ">
                <div className="single-brand-thumb">
                  <img src="template/assets/images/partners/1.jpg" style={{ height: "10rem" }} alt="" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="b">
                  <img src="template/assets/images/partners/2.png" style={{ height: "10rem" }} alt="" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-brand-thumb">
                  <img src="template/assets/images/partners/3.jpg" style={{ height: "10rem" }} alt="" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-brand-thumb">
                  <img src="template/assets/images/partners/13.png" style={{ height: "10rem" }} alt="" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-brand-thumb">
                  <img src="template/assets/images/partners/12.png" style={{ height: "10rem" }} alt="" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-brand-thumb">
                  <img src="template/assets/images/partners/6.jpg" style={{ height: "10rem" }} alt="" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-brand-thumb">
                  <img src="template/assets/images/partners/7.png" style={{ height: "10rem" }} alt="" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-brand-thumb">
                  <img src="template/assets/images/partners/8.jpg" style={{ height: "10rem" }} alt="" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-brand-thumb">
                  <img src="template/assets/images/partners/9.jpg" style={{ height: "10rem" }} alt="" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-brand-thumb">
                  <img src="template/assets/images/partners/10.png" style={{ height: "10rem" }} alt="" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-brand-thumb">
                  <img src="template/assets/images/partners/4.png" style={{ height: "10rem" }} alt="" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-brand-thumb">
                  <img src="template/assets/images/partners/5.jpg" style={{ height: "10rem" }} alt="" />
                </div>
              </div>
             
              
            </div>
          </div>
        </div>
      </div>

      {/*==================================================*/}
      {/* End print shop Team Section */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start print package Section  */}
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
      {/*==================================================*/}
      {/* Start print shop contact Section  */}
      {/*==================================================*/}
      <div className="contact-section home-two" style={{ paddingTop: "5rem" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              {/* contact thumb */}
              <div className="contact-thumb">
                <img src="template/assets/images/mork/contact.jpg" style={{width:"100%", height:"50rem"}} alt="" />
                {/* contact shape */}
               
              </div>
            </div>
            <div className="col-lg-6 col-md-6 " style={{ paddingLeft: "5rem" }}>
              <div className="print_shop-section-title text-center">
                <h1>
                  {" "}
                  Let's <span>Talk</span>{" "}
                </h1>
                <p> Printed and shipped on demand! </p>
              </div>
              {/* contact form box */}
              <div className="contact-form-box">
                <form
                  action="https://formspree.io/f/myyleorq"
                  method="POST"
                  id="dreamit-form"
                >
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-box">
                        <input type="text" placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-box">
                        <input type="text" placeholder="E-Mail Address" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-box">
                        <input type="text" placeholder="Subject" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-box">
                        <input type="text" placeholder="Phone" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-box">
                        <textarea
                          name="massage"
                          id="massage"
                          cols={30}
                          rows={10}
                          placeholder="Write Comment"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact-form text-center">
                        <button type="submit">
                          {" "}
                          Submit Now <i className="bi bi-arrow-right" />{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div id="status" />
              </div>
              {/* contact form End */}
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End print shop Contact Section */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start print shop Footer Section  */}
      {/*==================================================*/}

      <Footer />

      {/*==================================================*/}
      {/* Start scrollup section Area */}
      {/*==================================================*/}
      {/* jquery js */}
      {/* bootstrap js */}
      {/* carousel js */}
      {/* counterup js */}
      {/* waypoints js */}
      {/* wow js */}
      {/* venobox js */}
      {/* ajax mail js */}
      {/*  animated-text js */}
      {/* venobox min js */}
      {/* isotope js */}
      {/* jquery meanmenu js */}
      {/* jquery scrollup js */}
      {/* theme js */}
      {/* testimonial js */}
    </>

  );
}

export default Welcome;
