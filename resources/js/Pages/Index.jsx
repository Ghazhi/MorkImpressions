import React from "react";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";


import { Inertia } from '@inertiajs/inertia';

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
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
      {/* loder */}
      {/* <div className="loader-wrapper">
        <div className="loader" />
        <div className="loder-section left-section" />
        <div className="loder-section right-section" />
      </div> */}

      <Nav />
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <div className="hero-section hero2 d-flex align-items-center" style={{ height: "40rem" }}>
            <div className="container">
              <div className="row hero-bg align-items-center">
                <div className="col-lg-12">
                  <div className="hero-content">
                    <h5> DIGITAL PRINTING COMPANY </h5>
                    <h1> Quality Pixel Perfect </h1>
                    <h1> Printing Company </h1>
                    <p>
                      {" "}
                      Fast print, flyer, and pamphlet printing organization please
                      digital printing company Printing for what’s to come. What’s more,
                      we do printing quality pixel perfect.{" "}
                    </p>
                  </div>
                  {/* hero button */}
                  <div className="hero-button">
                    <a href="#">
                      {" "}
                      Contact Us <i className="bi bi-arrow-right" />{" "}
                    </a>
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
          <div className="custom-hero-section custom-hero2 d-flex align-items-center" style={{height:"40rem"}}>
            <div className="container">
              <div className="row custom-hero-bg align-items-center">
                <div className="col-lg-12">
                  <div className="custom-hero-content">
                    <h5> DIGITAL PRINTING COMPANY </h5>
                    <h1> Quality Pixel Perfect </h1>
                    <h1> Printing Company </h1>
                    <p>
                      {" "}
                      Fast print, flyer, and pamphlet printing organization please
                      digital printing company Printing for what’s to come. What’s more,
                      we do printing quality pixel perfect.{" "}
                    </p>
                  </div>
                  {/* hero button */}
                  <div className="hero-button">
                    <a href="#">
                      {" "}
                      Contact Us <i className="bi bi-arrow-right" />{" "}
                    </a>
                  </div>
                  {/* video icon */}
                  
                </div>
                {/* slider shape */}
                <div className="hero-shape">
                  <div className="hero-shape-thumb bounce-animate">
                    <img src="template/assets/images/slider/ball2.png" alt="" />
                  </div>
                  <div className="hero-shape-thumb2 dance">
                    <img src="template/assets/images/resource/ball2.png" alt="" />
                  </div>
                  <div className="hero-shape-thumb3 bounce-animate2">
                    <img src="template/assets/images/slider/cross1.png" alt="" />
                  </div>
                  <div className="hero-shape-thumb6 dance2">
                    <img src="template/assets/images/slider/hero-shape2.png" alt="" />
                    <div className="custom-shape-title" >
                      <h2 className="">Mork Impressions </h2>
                    </div>
                    {/* shape title */}
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
                  {" "}
                  Mork Impression is a printing press incorporated in Ghana, with a state of the art offset printing
                  machines.
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
                    <img src="template/assets/images/mork/mag.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="thumb-items">
                    <img src="template/assets/images/mork/paper.jpg" alt="" />
                  </div>
                  <div className="thumb-items">
                    <img src="template/assets/images/mork/poster.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 pl-35 pr-0">
              <div className="print_shop-section-title">
                <h5> ABOUT PRINTING SERVICES </h5>
                <h1>
                  {" "}
                  Produce Stuning <span>Printing</span>
                </h1>
                <h1> For Your Business </h1>
                <p>
                  {" "}
                  Fast print, flyer, and pamphlet printing organization pleased with
                  past Printing for what’s to come. What’s more, we do printing.{" "}
                </p>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="about-print-items">
                    <div className="about-icon">
                      <img src="template/assets/images/resource/about-icon1.png" alt="" />
                    </div>
                    <div className="about-item-content">
                      <h4> Banners Printing </h4>
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
                      <h4> Business Card Design </h4>
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
                  <i className="bi bi-check-lg" /> Large paper &amp; stock selection
                  &amp; Unique Print{" "}
                </p>
              </div>
              {/* about check */}
              <div className="about-check">
                <p>
                  <i className="bi bi-check-lg" /> Printing programs tailored to
                  your company needs{" "}
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
                <h5> WE ARE Professional </h5>
                <h1> Awesome Service For Printing</h1>
                <h1>
                  {" "}
                  <span> And Design </span>
                </h1>
                <p>
                  Professionally pursue economically sound services resource sucking
                  potentialities. Authoritat morph with premier catalysts for change
                  awesome services for you.{" "}
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
                      <a href="#"> Large Format Printing </a>
                    </h5>
                    <a href="shop.html">
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
                {/* service content */}
                <div className="service-content" style={{height:"13rem"}}>
                  <h3> Large Format Printing </h3>
                  <p>
                    {" "}
                    Professionaly conomically souf of printkin services resource
                    sucking services your business.{" "}
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
                      <a href="shop.html"> Industrial & Commercial Print </a>
                    </h5>
                    <a href="shop.html">
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
                {/* service content */}
                <div className="service-content" style={{ height: "13rem" }}>
                  <h3> Industrial & Commercial Print </h3>
                  <p>
                    {" "}
                    Professionaly conomically souf of printkin services resource
                    sucking services your business.{" "}
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
                      <a href="shop.html"> Industrial Lamination  </a>
                    </h5>
                    <a href="shop.html">
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
                {/* service content */}
                <div className="service-content" style={{height: "13rem" }}>
                  <h3> Industrial Lamination  </h3>
                  <p>
                    {" "}
                    Professionaly conomically souf of printkin services resource
                    sucking services your business.{" "}
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
                      <a href="shop.html"> Digital Colour Press </a>
                    </h5>
                    <a href="shop.html">
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
                {/* service content */}
                <div className="service-content" style={{height: "13rem" }}>
                  <h3> Digital Colour Press </h3>
                  <p>
                    {" "}
                    Professionaly conomically souf of printkin services resource
                    sucking services your business.{" "}
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
                    <a href="/portfolio"> View More </a>
                  </h5>
                  <a href="shop.html">
                    <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="item">
                <img src="template/assets/images/resource/ports3.jpg" alt="" />
                {/* port content */}
                <div className="port-content">
                  <h5>
                    <a href="/portfolio"> View More </a>
                  </h5>
                  <a href="shop.html">
                    <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="item">
                <img src="template/assets/images/resource/ports4.jpg" alt="" />
                {/* port content */}
                <div className="port-content">
                  <h5>
                    <a href="/portfolio"> View More </a>
                  </h5>
                  <a href="/portfolio"> View More 
                    <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="item">
                <img src="template/assets/images/resource/ports1.jpg" alt="" />
                {/* port content */}
                <div className="port-content">
                  <h5>
                  <a href="/portfolio"> View More </a>
                  </h5>
                <a href="/portfolio"> View More 
                    <i className="bi bi-arrow-right" />
                  </a>
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
                <h5> HAVE ANY QUESTION </h5>
                <h1>
                  {" "}
                  Frequently Ask <span>Questions</span>{" "}
                </h1>
                <p>
                  {" "}
                  Professionally pursue economically services resource sucking poten
                  leader sound services resource sucking potentialitie quality.{" "}
                </p>
              </div>
              {/* Start Accordion */}
              <div className="tab_container">
                <div id="tab1" className="tab_content">
                  <ul className="accordion">
                    <li>
                      <a>
                        <span> How can I get the course certificate? </span>
                      </a>
                      <p>
                        Quis ipsum gravida accumsan lacus facilisis dolore magna
                        aliqua your lacus dolor amet consectetur adipiscing elitd
                        quis ipsu gravid printing dolore magna aliqua lacus dolor
                        sit amet.
                      </p>
                    </li>
                    <li>
                      <a>
                        <span> Can I buy a course individually? </span>
                      </a>
                      <p>
                        Quis ipsum gravida accumsan lacus facilisis dolore magna
                        aliqua your lacus dolor amet consectetur adipiscing elitd
                        quis ipsu gravid printing dolore magna aliqua lacus dolor
                        sit amet.
                      </p>
                    </li>
                    <li>
                      <a>
                        <span> Can I pay via multiple payment gateways? </span>
                      </a>
                      <p>
                        Quis ipsum gravida accumsan lacus facilisis dolore magna
                        aliqua your lacus dolor amet consectetur adipiscing elitd
                        quis ipsu gravid printing dolore magna aliqua lacus dolor
                        sit amet.
                      </p>
                    </li>
                    <li>
                      <a>
                        <span> How can I cancel my subscription plan? </span>
                      </a>
                      <p>
                        Quis ipsum gravida accumsan lacus facilisis dolore magna
                        aliqua your lacus dolor amet consectetur adipiscing elitd
                        quis ipsu gravid printing dolore magna aliqua lacus dolor
                        sit amet.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Accordion */}
            </div>
            <div className="col-lg-6 col-md-6 pl-40">
              <div className="faq-thumb" >
                <img src="template/assets/images/resource/post4.png"style={{height:"35rem",width:"100%"}} alt="" />
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
      
      {/*==================================================*/}
      {/* End print shop Brand Section */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start print shop Team Section  */}
      {/*==================================================*/}

      
      {/* partners */}
      <div className="" style={{ paddingBottom:"10rem"}}>
        <div className="">
          <h2 className="text-center " style={{ paddingTop: "5rem", paddingBottom: "2rem" }}>
            Our <span>Partners</span>
          </h2>
        </div>
        <div className="row text-center" style={{ justifyContent: "center" }}>
          <div className="col">
            <div className="p-4">
              <img src="template/assets/images/logo.png" alt="" />
            </div>
          </div>
          <div className="col">
            <div className="p-4">
              <img src="template/assets/images/logo.png" alt="" />
            </div>
          </div>
          <div className="col">
            <div className="p-4">
              <img src="template/assets/images/logo.png" alt="" />
            </div>
          </div>
          <div className="col">
            <div className="p-4">
              <img src="template/assets/images/logo.png" alt="" />
            </div>
          </div>
          <div className="col">
            <div className="p-4">
              <img src="template/assets/images/logo.png" alt="" />
            </div>
          </div>
          <div className="col">
            <div className="p-4">
              <img src="template/assets/images/logo.png" alt="" />
            </div>
          </div>
          <div className="col">
            <div className="p-4">
              <img src="template/assets/images/logo.png" alt="" />
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
                <h5> WE ARE Professionals </h5>
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
                  <img src="template/assets/images/resource/tab1.jpg" alt="" />
                </div>
                {/* blog content */}
                <div className="blog-content">
                  {/* post categories */}

                  {/* blog title */}
                  <div className="blog-title">
                    <h2>
                      {" "}
                      <a href="blog-details.html">
                        {" "}
                        Smashing Podcast Episode With Vitaly Friedman Jay{" "}
                      </a>{" "}
                    </h2>
                  </div>
                  {/* blog desc */}
                  <div className="blog-desc">
                    <p>
                      Lorem ipsum dolor consecttur adipiscing eaxm elit aenean
                      pharetra mollis pretium.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-box">
                {/* blog thumb */}
                <div className="single-blog-thumb">
                  <img src="template/assets/images/resource/tab2.jpg" alt="" />
                </div>
                {/* blog content */}
                <div className="blog-content">
                  {/* post categories */}

                  {/* blog title */}
                  <div className="blog-title">
                    <h2>
                      {" "}
                      <a href="blog-details.html">
                        {" "}
                        Modern Way To Create And See Host WordPress{" "}
                      </a>{" "}
                    </h2>
                  </div>
                  {/* blog desc */}
                  <div className="blog-desc">
                    <p>
                      Lorem ipsum dolor consecttur adipiscing eaxm elit aenean
                      pharetra mollis pretium.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-box">
                {/* blog thumb */}
                <div className="single-blog-thumb">
                  <img src="template/assets/images/resource/tab3.jpg" alt="" />
                </div>
                {/* blog content */}
                <div className="blog-content">
                  {/* post categories */}

                  {/* blog title */}
                  <div className="blog-title">
                    <h2>
                      {" "}
                      <a href="blog-details.html">
                        {" "}
                        Rethinking Server-Timing As A Monitoring Tool{" "}
                      </a>{" "}
                    </h2>
                  </div>
                  {/* blog desc */}
                  <div className="blog-desc">
                    <p>
                      Lorem ipsum dolor consecttur adipiscing eaxm elit aenean
                      pharetra mollis pretium.
                    </p>
                  </div>
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
      <div className="contact-section home-two" style={{paddingTop: "5rem"}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              {/* contact thumb */}
              <div className="contact-thumb">
                <img src="template/assets/images/resource/contact.jpg" alt="" />
                {/* contact shape */}
                <div className="contact-shape dance">
                  <img src="template/assets/images/resource/price-circle.png" alt="" />
                </div>
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
