<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, maximum-scale=1" />
    <title inertia>{{ config('app.name', 'Mock Impression') }}</title>

   
   <meta charset="UTF-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>Print - Shop HTML5 Template</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Favicon -->
  <link rel="icon" type="template/image/png" sizes="56x56" href="template/assets/images/fav-icon/icon.png">
  <!-- bootstrap CSS -->
  <link rel="stylesheet" href="template/assets/css/bootstrap.min.css" type="text/css" media="all" />
  <!-- carousel CSS -->
  <link rel="stylesheet" href="template/assets/css/owl.carousel.min.css" type="text/css" media="all" />
  <!-- animate CSS -->
  <link rel="stylesheet" href="template/assets/css/animate.css" type="text/css" media="all" />
  <!-- animated-text CSS -->
  <link rel="stylesheet" href="template/assets/css/animated-text.css" type="text/css" media="all" />
  <!-- font-awesome CSS -->
  <link rel="stylesheet" href="template/assets/css/all.min.css" type="text/css" media="all" />
  <!-- theme-default CSS -->
  <link rel="stylesheet" href="template/assets/css/theme-default.css" type="text/css" media="all" />
  <!-- meanmenu CSS -->
  <link rel="stylesheet" href="template/assets/css/meanmenu.min.css" type="text/css" media="all" />
  <!-- Main Style CSS -->
  {{-- <link rel="stylesheet" href="template/assets/css/style.css" type="text/css" media="all" /> --}}
  <link rel="stylesheet" href="template/style.css" type="text/css" media="all" />
  <!-- transitions CSS -->
  <link rel="stylesheet" href="template/assets/css/owl.transitions.css" type="text/css" media="all" />
  <!-- venobox CSS -->
  <link rel="stylesheet" href="template/venobox/venobox.css" type="text/css" media="all" />
  <!-- responsive CSS -->
  <link rel="stylesheet" href="template/assets/css/responsive.css" type="text/css" media="all" />
  <!-- modernizr js -->
  <script src="template/assets/js/vendor/modernizr-3.5.0.min.js"></script>
  <!-- bootstrap icons -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <script src="{{ mix('/js/app.js') }}" defer></script>
    @inertiaHead
  </head>
  <body>
    @inertia

<!--==================================================-->
<!-- Start scrollup section  -->
<!--==================================================-->
<!-- scrollup section -->
<div class="scroll-area">
  <div class="top-wrap">
    <div class="go-top-btn-wraper">
      <div class="go-top go-top-button">
        <i class="fas fa-arrow-up"></i>
        <i class="fas fa-arrow-up"></i>
      </div>
    </div>
  </div>
</div>
<!--==================================================-->
<!-- Start scrollup section Area -->
<!--==================================================-->

<!-- jquery js -->
<script src="template/assets/js/vendor/jquery-3.6.2.min.js"></script>
<!-- bootstrap js -->
<script src="template/assets/js/bootstrap.min.js"></script>
<!-- carousel js -->
<script src="template/assets/js/owl.carousel.min.js"></script>
<!-- counterup js -->
<script src="template/assets/js/jquery.counterup.min.js"></script>
<!-- waypoints js -->
<script src="template/assets/js/waypoints.min.js"></script>
<!-- wow js -->
<script src="template/assets/js/wow.js"></script>
<!-- venobox js -->
<script src="venobox/venobox.js"></script>
<!-- ajax mail js -->
<script src="template/assets/js/ajax-mail.js"></script>
<!--  animated-text js -->
<script src="template/assets/js/animated-text.js"></script>
<!-- venobox min js -->
<script src="template/venobox/venobox.min.js"></script>
<!-- isotope js -->
<script src="template/assets/js/isotope.pkgd.min.js"></script>
<!-- jquery meanmenu js -->
<script src="template/assets/js/jquery.meanmenu.js"></script>
<!-- jquery scrollup js -->
<script src="template/assets/js/jquery.scrollUp.js"></script>
<!-- theme js -->
<script src="template/assets/js/theme.js"></script>
<!-- testimonial js -->
<script src="template/assets/js/testimonial.js"></script>

<script>
  "use strict";
    jQuery(document).ready(function (o) {
        0 < o(".offset-side-bar").length &&
            o(".offset-side-bar").on("click", function (e) {
                e.preventDefault(), e.stopPropagation(), o(".cart-group").addClass("isActive");
            }),
            0 < o(".close-side-widget").length &&
                o(".close-side-widget").on("click", function (e) {
                    e.preventDefault(), o(".cart-group").removeClass("isActive");
                }),
            0 < o(".navSidebar-button").length &&
                o(".navSidebar-button").on("click", function (e) {
                    e.preventDefault(), e.stopPropagation(), o(".info-group").addClass("isActive");
                }),
            0 < o(".close-side-widget").length &&
                o(".close-side-widget").on("click", function (e) {
                    e.preventDefault(), o(".info-group").removeClass("isActive");
                }),
            o("body").on("click", function (e) {
                o(".info-group").removeClass("isActive"), o(".cart-group").removeClass("isActive");
            }),
            o(".xs-sidebar-widget").on("click", function (e) {
                e.stopPropagation();
            }),
            0 < o(".xs-modal-popup").length &&
                o(".xs-modal-popup").magnificPopup({
                    type: "inline",
                    fixedContentPos: !2,
                    fixedBgPos: !0,
                    overflowY: "auto",
                    closeBtnInside: !2,
                    callbacks: {
                        beforeOpen: function () {
                            this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
                        },
                    },
                });
    });
</script>
 </body>
</html>
