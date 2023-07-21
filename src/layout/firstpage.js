import "./home-page.layout.css";
const FirstPage = () => {
    return (<>
        <div className="wrapper">

            <div className="top-bar">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12">
                            <div className="logo">
                                <a href="/">
                                    <img src="https://equintl.demo.radiantnepal.com/uploads/icons/1680080026_eqlogo.png" alt="" />
                                    {/* <!-- <img src="img/logo.jpg" alt="Logo"> --> */}
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-7 d-none d-lg-block">
                            <div className="row">
                                <div className="col-4">
                                    <div className="top-bar-item" >
                                        <div className="top-bar-icon">
                                            <i className="fa-regular fa-id-card"></i>
                                        </div>
                                        <div className="top-bar-text">
                                            <h3>Govt. License No: </h3>
                                            <p>746/064/065</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="top-bar-item">
                                        <div className="top-bar-icon">
                                            <i className="fa-solid fa-phone-volume"></i>
                                        </div>
                                        <div className="top-bar-text">
                                            <h3>Call Us</h3>
                                            <p>+977-1-4986469, </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="top-bar-item">
                                        <div className="top-bar-icon">
                                            <i className="fa-solid fa-envelope"></i>
                                        </div>
                                        <div className="top-bar-text">
                                            <h3>Email Us</h3>
                                            <p><a href="mailto:equator746@gmail.com">equator746@gmail.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="nav-bar">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <a href="/#" className="navbar-brand">MENU</a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto">
                                <a href="/home" className="nav-item nav-link  active  ">
                                    Home
                                </a>
                                <div className="nav-item dropdown">
                                    <a href="/#" className="nav-link dropdown-toggle" data-toggle="dropdown">About</a>
                                    <div className="dropdown-menu">
                                        <a href="/aboutus/about-one" className="dropdown-item">About Company
                                        </a>
                                        <a href="/aboutus/about-nepal" className="dropdown-item">About Nepal
                                        </a>
                                        <a href="/aboutus/recruitment-process-one" className="dropdown-item">Recruitment Process
                                        </a>
                                        <a href="/aboutus/message-from-md" className="dropdown-item">Message From  MD
                                        </a>
                                        <a href="/aboutus/why-us" className="dropdown-item">Why Us?
                                        </a>
                                    </div>
                                </div>
                                <a href="/job-sectors" className="nav-item nav-link  ">
                                    Job Sectors
                                </a>
                                <a href="/recruitment-process" className="nav-item nav-link  ">
                                    Documentation
                                </a>
                                <a href="/gallary" className="nav-item nav-link  ">
                                    Gallary
                                </a>
                                <a href="/contact" className="nav-item nav-link  ">
                                    contact
                                </a>

                            </div>
                            <div className="ml-auto">
                                <a className="btn" href="https://equintl.demo.radiantnepal.com/jobapply">Apply Now</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div id="carousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carousel" data-slide-to="0" className=""></li>
                    <li data-target="#carousel" data-slide-to="1" className=""></li>
                    <li data-target="#carousel" data-slide-to="2" className="active"></li>
                    <li data-target="#carousel" data-slide-to="3" className="  "></li>
                    <li data-target="#carousel" data-slide-to="4" className="  "></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img src="/uploads/banner_image/1682927991_United Arab Emirates (8).jpg" alt="Carousel Image" />
                        <div className="carousel-caption">
                            <p className="animated fadeInRight">Welcome To Equator Interntional</p>
                            <h1 className="animated fadeInLeft">Get Your Dream Job Today
                            </h1>
                            <button className="btn animated fadeInUp" type="button" onclick="mylinkfunction()"> <i className="fa-solid fa-hand-point-right"></i> Find a
                                Job</button>
                            {/* <script>
                                function mylinkfunction(e) {

                                    window.location.href="#dev",
                                    e.preventDefault(),
                                    e.stopPropagation()
                                } 
                            </script> */}
                        </div>

                    </div>
                    <div className="carousel-item">
                        <img src="/uploads/banner_image/1682925278_United Arab Emirates (7).jpg" alt="Carousel Image" />
                        <div className="carousel-caption">
                            <p className="animated fadeInRight">Welcome To Equator Interntional</p>
                            <h1 className="animated fadeInLeft">Get Your Dream Job Today
                            </h1>
                            <button className="btn animated fadeInUp" type="button" onclick="mylinkfunction()"> <i className="fa-solid fa-hand-point-right"></i> Find a
                                Job</button>
                            {/* <script>
                                function mylinkfunction(e) {

                                    window.location.href="#dev",
                                    e.preventDefault(),
                                    e.stopPropagation()
                                } 
                            </script> */}
                        </div>

                    </div>
                    <div className="carousel-item active">
                        <img src="/uploads/banner_image/1682924743_United Arab Emirates (6).jpg" alt="Carousel Image" />
                        <div className="carousel-caption">
                            <p className="animated fadeInRight">Welcome To Equator Interntional</p>
                            <h1 className="animated fadeInLeft">Get Your Dream Job Today
                            </h1>
                            <button className="btn animated fadeInUp" type="button" onclick="mylinkfunction()"> <i className="fa-solid fa-hand-point-right"></i> Find a
                                Job</button>
                            {/* <script>
                                function mylinkfunction(e) {

                                    window.location.href="#dev",
                                    e.preventDefault(),
                                    e.stopPropagation()
                                } 
                            </script> */}
                        </div>

                    </div>
                    <div className="carousel-item ">
                        <img src="/uploads/banner_image/1682924194_United Arab Emirates (4).jpg" alt="Carousel Image" />
                        <div className="carousel-caption">
                            <p className="animated fadeInRight">Welcome To Equator Interntional</p>
                            <h1 className="animated fadeInLeft">Get Your Dream Job Today
                            </h1>
                            <button className="btn animated fadeInUp" type="button" onclick="mylinkfunction()"> <i className="fa-solid fa-hand-point-right"></i> Find a
                                Job</button>
                            {/* <script>
                                function mylinkfunction(e) {

                                    window.location.href="#dev",
                                    e.preventDefault(),
                                    e.stopPropagation()
                                } 
                            </script> */}
                        </div>

                    </div>
                    <div className="carousel-item ">
                        <img src="/uploads/banner_image/1682924347_United Arab Emirates (5).jpg" alt="Carousel Image" />
                        <div className="carousel-caption">
                            <p className="animated fadeInRight">Welcome To Equator Interntional</p>
                            <h1 className="animated fadeInLeft">Get Your Dream Job Today
                            </h1>
                            <button className="btn animated fadeInUp" type="button" onclick="mylinkfunction()"> <i className="fa-solid fa-hand-point-right"></i> Find a
                                Job</button>
                            {/* <script>
                                function mylinkfunction(e) {

                                    window.location.href="#dev",
                                    e.preventDefault(),
                                    e.stopPropagation()
                                } 
                            </script> */}
                        </div>

                    </div>
                </div>

                <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>



            <div className="feature wow fadeInUp" data-wow-delay="0.1s" >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <i className="flaticon-worker"></i>
                                </div>
                                <div className="feature-text">
                                    <a href="feature/organizational-charts">
                                        <h3>Organization Chart</h3>
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <i className="flaticon-building"></i>
                                </div>
                                <div className="feature-text">
                                    <a href="/legal-documents">
                                        <h3>Legal Documents</h3>
                                    </a>
                                    {/* <!-- <p>Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non</p> --> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <i className="flaticon-call"></i>
                                </div>
                                <div className="feature-text">
                                    <a href="feature/demand-letter">
                                        <h3>Current Demand</h3>
                                    </a>

                                    {/* <!-- <p>Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non</p> --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about wow fadeInUp" data-wow-delay="0.1s" >
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-12 col-md-6">
                            <div className="section-header text-left">
                                <p>About us</p>
                                <h2>Equator Interntional</h2>
                            </div>
                            <div className="about-text">
                                <p>
                                    With honesty and reliablity as the key objectives, this organization,being a service based agency.has constantly emphasized on quality services to ensure utmost satisfaction to both its clients as well as to the aspirants seeking overseas employment.That is not all,This organization has left no stone unturned to functionas a bridge between the employer and the employee to ensure smooth relationship between them thus avoiding any sort of misunderstandings.
                                </p>
                                <p>

                                </p>
                                <a className="btn" href="/aboutus/about-one">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-header text-center" id="dev">
                {/* <!-- <p>Our Services</p> --> */}
                <h2>Current Vacancies Related in Newspaper</h2>
            </div>
            <section className="section-padding">
                <div className="container">
                    <div className="gallery-view">
                        <div className="row" id="lightgallery" lg-uid="lg0">
                            <div className="item col-md-4" data-src="/uploads/banner_image/1684661940_1680086571_1679979980_popup3.png" data-sub-html="<h4>Newsbanner three</h4>">
                                <a href="">
                                    <img src="/uploads/banner_image/1684661940_1680086571_1679979980_popup3.png" alt="Login Int'l" />
                                </a>
                                <span style="width: 100% !important; display: inline-grid; /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
                       margin-top: 7px;
                       padding: 7px; background-color:rgb(199 64 68);  color: #fff;">

                                    Published Date:&nbsp;&nbsp;<br />
                                    Enterview Date:
                                </span>
                            </div>

                            <div className="item col-md-4" data-src="/uploads/banner_image/1684662270_1680086571_1679979980_popup3.jpg" data-sub-html="<h4>Newsbanner two</h4>">
                                <a href="/">
                                    <img src="/uploads/banner_image/1684662270_1680086571_1679979980_popup3.jpg" alt="Login Int'l" />
                                </a>
                                <span style="width: 100% !important; display: inline-grid; /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
                       margin-top: 7px;
                       padding: 7px; background-color:rgb(199 64 68);  color: #fff;">

                                    Published Date:&nbsp;&nbsp;<br />
                                    Enterview Date:
                                </span>
                            </div>

                            <div className="item col-md-4" data-src="/uploads/banner_image/1684662130_1680086571_1679979980_popup3.jpg" data-sub-html="<h4>Newsbanner</h4>">
                                <a href="">
                                    <img src="/uploads/banner_image/1684662130_1680086571_1679979980_popup3.jpg" alt="Login Int'l" />
                                </a>
                                <span style="width: 100% !important; display: inline-grid; /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
                       margin-top: 7px;
                       padding: 7px; background-color:rgb(199 64 68);  color: #fff;">

                                    Published Date:&nbsp;&nbsp;<br />
                                    Enterview Date:
                                </span>
                            </div>

                        </div>
                    </div>

                </div></section>



            <div className="service">
                <div className="container">
                    <div className="section-header text-center" id="dev">
                        {/* <!-- <p>Our Services</p> --> */}
                        <h2>FEATURED JOBS</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" >
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="/uploads/banner_image/1682936783_IT-Staffing-shutterstock_1590824863-1.jpg" alt="Image" width="400px" height="300px" />
                                    <div className="service-overlay">
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h3>
                                        IT personnels
                                    </h3>
                                    <a className="btn" href="/jobdetail/itofficer">+</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" >
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="/uploads/banner_image/1682921536_PA-51277514.2e16d0ba.fill-1200x630.jpg" alt="Image" width="400px" height="300px" />
                                    <div className="service-overlay">
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h3>
                                        Cleaning Section
                                    </h3>
                                    <a className="btn" href="/jobdetail/cleaning-one">+</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="/uploads/banner_image/1682921321_toyota-nepal-servicing-and-support.jpg" alt="Image" width="400px" height="300px" />
                                    <div className="service-overlay">
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h3>
                                        Mechanics
                                    </h3>
                                    <a className="btn" href="/jobdetail/mechanics">+</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" >
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="/uploads/banner_image/1682921120_STATIC-GUARD-AND-NEPAL-scaled.jpg" alt="Image" width="400px" height="300px" />
                                    <div className="service-overlay">
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h3>
                                        Security Company
                                    </h3>
                                    <a className="btn" href="/jobdetail/abc-company">+</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="mission-area">
                    <div className="row gy-3">
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="mission">
                                <div className="mission-icon">
                                    <a href="/missions">
                                        <img src="/website/img/target.png" alt="" />
                                    </a>
                                </div>
                                <div className="mission-title">
                                    <a href="/missions">
                                        <h3>Mission</h3>
                                    </a>
                                </div>
                                <div className="mission-dec">

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis...
                                    </p></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="mission">
                                <div className="mission-icon">
                                    <a href="/vision"><img src="/website/img/eye.png" alt="" /></a>



                                </div>
                                <div className="mission-title">
                                    <a href="/vision">
                                        <h3>vision</h3>
                                    </a>

                                </div>
                                <div className="mission-dec">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis...
                                    </p></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="mission">
                                <div className="mission-icon">
                                    <a href="/value"> <img src="/website/img/value.png" alt="" /></a>


                                </div>
                                <div className="mission-title">
                                    <a href="/value">
                                        <h3>Value</h3>
                                    </a>

                                </div>
                                <div className="mission-dec">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis...
                                    </p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonial wow fadeIn" data-wow-delay="0.1s" >
                <div className="container">
                    <h1 className="testimonial-title"> Testimonial</h1>
                    <div className="row">
                        <div className="col-12">
                            <div className="testimonial-slider-nav slick-initialized slick-slider">
                                <div className="slick-list draggable" >
                                    <div className="slick-track" >
                                        <div className="slider-nav slick-slide slick-cloned" data-slick-index="-4" aria-hidden="true" tabindex="-1" /></div>
                                    <div className="slider-nav slick-slide slick-cloned" data-slick-index="-3" aria-hidden="true" tabindex="-1" /></div>
                                <div className="slider-nav slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" tabindex="-1" alt="Testimonial" /></div>
                            <div className="slider-nav slick-slide slick-cloned slick-active" data-slick-index="-1" aria-hidden="false" tabindex="-1" alt="Testimonial" /></div>
                        <div className="slider-nav slick-slide slick-current slick-active slick-center" data-slick-index="0" aria-hidden="false" tabindex="0" alt="Testimonial" /></div>
                    <div className="slider-nav slick-slide slick-active" data-slick-index="1" aria-hidden="false" tabindex="0" alt="Testimonial" /></div>
                <div className="slider-nav slick-slide" data-slick-index="2" aria-hidden="true" tabindex="0" alt="Testimonial" /></div>
            <div className="slider-nav slick-slide" data-slick-index="3" aria-hidden="true" tabindex="-1" ><img src="/uploads/banner_image/1675590013_testimonial-1.jpg" alt="Testimonial" /></div>
            <div className="slider-nav slick-slide slick-cloned slick-center" data-slick-index="4" aria-hidden="true" tabindex="-1" ><img src="/uploads/banner_image/1675592517_testimonial-4.jpg" alt="Testimonial" /></div>
            <div className="slider-nav slick-slide slick-cloned" data-slick-index="5" aria-hidden="true" tabindex="-1" ><img src="/uploads/banner_image/1675592665_user.jpg" alt="Testimonial" /></div>
            <div className="slider-nav slick-slide slick-cloned" data-slick-index="6" aria-hidden="true" tabindex="-1" ><img src="/uploads/banner_image/1675590138_testimonial-2.jpg" alt="Testimonial" /></div>
            <div className="slider-nav slick-slide slick-cloned" data-slick-index="7" aria-hidden="true" tabindex="-1" ><img src="/uploads/banner_image/1675590013_testimonial-1.jpg" alt="Testimonial" /></div>
        </div>






        <div className="row">
            <div className="col-12">
                <div className="testimonial-slider slick-initialized slick-slider">
                    <div className="slick-list draggable"><div className="slick-track" ><div className="slider-item slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabindex="-1" >
                        <h3>Customer Name</h3>
                        <h4>Message From Chairman</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id&nbsp;gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque&nbsp;maximus.</p>
                    </div><div className="slider-item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
                            <h3>Customer Name 2</h3>
                            <h4>Profession</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id&nbsp;gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque&nbsp;maximus.</p>
                        </div><div className="slider-item slick-slide" data-slick-index="1" aria-hidden="true" tabindex="-1">
                            <h3>Customer Name 1</h3>
                            <h4>Profession</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id&nbsp;gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque&nbsp;maximus.</p>
                        </div><div className="slider-item slick-slide" data-slick-index="2" aria-hidden="true" tabindex="-1" >
                            <h3>Customer Name</h3>
                            <h4>Profession</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id&nbsp;gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque&nbsp;maximus.</p>
                        </div><div className="slider-item slick-slide" data-slick-index="3" aria-hidden="true" tabindex="-1" >
                            <h3>Customer Name</h3>
                            <h4>Message From Chairman</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id&nbsp;gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque&nbsp;maximus.</p>
                        </div><div className="slider-item slick-slide slick-cloned" data-slick-index="4" aria-hidden="true" tabindex="-1" >
                            <h3>Customer Name 2</h3>
                            <h4>Profession</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id&nbsp;gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque&nbsp;maximus.</p>
                        </div><div className="slider-item slick-slide slick-cloned" data-slick-index="5" aria-hidden="true" tabindex="-1" >
                            <h3>Customer Name 1</h3>
                            <h4>Profession</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id&nbsp;gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque&nbsp;maximus.</p>
                        </div><div className="slider-item slick-slide slick-cloned" data-slick-index="6" aria-hidden="true" tabindex="-1">
                            <h3>Customer Name</h3>
                            <h4>Profession</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id&nbsp;gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque&nbsp;maximus.</p>
                        </div><div className="slider-item slick-slide slick-cloned" data-slick-index="7" aria-hidden="true" tabindex="-1" >
                            <h3>Customer Name</h3>
                            <h4>Message From Chairman</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id&nbsp;gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque&nbsp;maximus.</p>
                        </div></div></div>




                </div>
            </div>
        </div>
    

{/*     
    <!--<div className="fact">-->
<!--    <div className="container">-->
<!--        <div className="row">-->
<!--            <div className="new-counterup">--> */}
{/*                     
<!--                    <div className="container000">-->
<!--                        <i className="fas fa-smile-beam"></i>-->
<!--                        <span className="num" data-val="800">000</span>-->
<!--                        <span className="text">Successful Freelancer</span>-->
<!--                    </div>-->

<!--                    <div className="container000">-->
<!--                        <i className="fas fa-anchor"></i>-->
<!--                        <span className="num" data-val="300">000</span>-->
<!--                        <span className="text">Industry Experts</span>-->
<!--                    </div>-->

<!--                    <div className="container000">-->
<!--                        <i className="fas fa-industry"></i>-->
<!--                        <span className="num" data-val="700">000</span>-->
<!--                        <span className="text">Conneted Companies</span>-->
<!--                    </div>-->
<!--                </div> -->
<!--        </div>-->
<!--    </div>-->
<!--</div>-->
<!--   <script>-->
<!--        let valueDisplays = document.querySelectorAll(".num");-->
<!--        let interval = 5000;-->

<!--        valueDisplays.forEach((valueDisplay) => {-->
<!--            let startValue = 0;-->
<!--            let endValue = parseInt(valueDisplay.getAttribute("data-val"));-->
<!--            let duration = Math.floor(interval / endValue);-->
<!--            let counter = setInterval(function () {-->
<!--                startValue += 1;-->
<!--                valueDisplay.textContent = startValue;-->
<!--                if (startValue == endValue) {-->
<!--                    clearInterval(counter);-->
<!--                }-->
<!--            }, duration);-->
<!--        });-->
<!--    </script>-->   <!-- client Start --> */}
    <div className="client">
        <div className="container">
            <h2 className="client-title">Clients</h2>
            <div className="row">
                <div className="col-12">
                    <div id="clients-slider" className="owl-carousel slick-initialized slick-slider">
                                                                                    <div className="slick-list draggable" ><div className="slick-track" ><div className="clients-item slick-slide slick-cloned" data-slick-index="-5" aria-hidden="true" tabindex="-1">
                                    <img src="/uploads/banner_image/1675594213_vimeo.svg" alt="" />
                                </div><div className="clients-item slick-slide slick-cloned" data-slick-index="-4" aria-hidden="true" tabindex="-1" style="width: 268px;">
                                    <img src="/uploads/banner_image/1675595898_todoist.svg" alt="" />
                                </div><div className="clients-item slick-slide slick-cloned" data-slick-index="-3" aria-hidden="true" tabindex="-1" style="width: 268px;">
                                    <img src="/uploads/banner_image/1675594191_todoist.svg" alt="" />
                                </div><div className="clients-item slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" tabindex="-1" style="width: 268px;">
                                    <img src="/uploads/banner_image/1675595163_yahoo.svg" alt="" />
                                </div><div className="clients-item slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabindex="-1" style="width: 268px;">
                                    <img src="/uploads/banner_image/1675594173_algolia.svg" alt="" />
                                </div><div className="clients-item slick-slide" data-slick-index="0" aria-hidden="true" tabindex="-1" style="width: 268px;">
                                    <img src="/uploads/banner_image/1675595664_todoist.svg" alt="" />
                                </div><div className="clients-item slick-slide" data-slick-index="1" aria-hidden="true" tabindex="-1" style="width: 268px;">
                                    <img src="/uploads/banner_image/1675594213_vimeo.svg" alt="" />
                                </div><div className="clients-item slick-slide" data-slick-index="2" aria-hidden="true" tabindex="-1" style="width: 268px;">
                                    <img src="/uploads/banner_image/1675595898_todoist.svg" alt="" />
                                </div><div className="clients-item slick-slide slick-active" data-slick-index="3" aria-hidden="false" tabindex="-1" style="width: 268px;">
                                    <img src="/uploads/banner_image/1675594191_todoist.svg" alt="" />
                                </div><div className="clients-item slick-slide slick-current slick-active slick-center" data-slick-index="4" aria-hidden="false" tabindex="0" >
                                    <img src="/uploads/banner_image/1675595163_yahoo.svg" alt="" />
                                </div><div className="clients-item slick-slide slick-active" data-slick-index="5" aria-hidden="false" tabindex="0" >
                                    <img src="/uploads/banner_image/1675594173_algolia.svg" alt="" />
                                </div><div className="clients-item slick-slide slick-cloned slick-active" data-slick-index="6" aria-hidden="false" tabindex="-1" >
                                    <img src="/uploads/banner_image/1675595664_todoist.svg" alt="" />
                                </div><div className="clients-item slick-slide slick-cloned" data-slick-index="7" aria-hidden="true" tabindex="-1" >
                                    <img src="/uploads/banner_image/1675594213_vimeo.svg" alt="" />
                                </div><div className="clients-item slick-slide slick-cloned" data-slick-index="8" aria-hidden="true" tabindex="-1" >
                                    <img src="/uploads/banner_image/1675595898_todoist.svg" alt="" />
                                </div><div className="clients-item slick-slide slick-cloned" data-slick-index="9" aria-hidden="true" tabindex="-1">
                                    <img src="/uploads/banner_image/1675594191_todoist.svg" alt="" />
                                </div><div className="clients-item slick-slide slick-cloned" data-slick-index="10" aria-hidden="true" tabindex="-1" >
                                    <img src="/uploads/banner_image/1675595163_yahoo.svg" alt="" />
                                </div><div className="clients-item slick-slide slick-cloned" data-slick-index="11" aria-hidden="true" tabindex="-1" >
                                    <img src="/uploads/banner_image/1675594173_algolia.svg" alt="" />
                                </div></div></div>                      
                                                                                  
                                                                                  
                                                                                  
                                                                                  
                                                                                  
                                                                        </div>
                </div>
            </div>
        </div>
    </div>
    
        <div className="footer wow fadeIn" data-wow-delay="0.3s" >
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-contact">
                            <h2>Office Contact</h2>
                            <p><i className="fa fa-map-marker-alt"></i>Gongabu, Kathmandu, Nepal
                            </p>
                            <p><i className="fa fa-phone-alt"></i>+977-1-4986469, +977-1-4986470</p>
                            <p ><i className="fa fa-envelope"></i>equator746@gmail.com</p>
                            <div className="footer-social">
                                <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
                                <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-link">
                            <h2>JOB SECTORS</h2>
                                                                                        
                                <a href="/cleaning">Cleaning Section</a>
                                                            
                                <a href="/cleaning-section">Cleaning Section</a>
                                                            
                                <a href="/office-staff">Office Staff</a>
                                                            
                                <a href="/tailoring-and-laundry-personnels">Garment / Tailoring and laundry Personnels</a>
                                                            
                                <a href="/medical-staffs">Medical &amp; Health Personnels</a>
                                                        
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-link">
                            <h2>Useful Pages</h2>
                            <a href="/aboutus/about-one">About Us</a>
                            <a href="/job-sectors">Job Sectors</a>
                            <a href="/contact">Contact</a>
                            <a href="/service">Testimonial</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="newsletter">
                            <h2>Map</h2>
                           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7062.5908927051905!2d85.30563875390625!3d27.739031899999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb192769445433%3A0x9b19ae864def10a7!2sEquator%20International%20P.%20Ltd.!5e0!3m2!1sen!2snp!4v1680172383936!5m2!1sen!2snp" width="300" height="150" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                           </div>
                    </div>
                </div>
            </div>
            <div className="container copyright">
                <div className="row">
                    <div className="col-md-12">
                        <p style=" margin-top: -31px;">
                            ©  
                            <script>
                                document.write(new Date().getFullYear())
                            </script>2023
                            <a href="#">Equator International  Pvt. Ltd.</a> All Right Reserved. Developed by <a href="https://radiantnepal.com/">Radiant Infotech Nepal</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>



       
    
    </>)
}

export default FirstPage;