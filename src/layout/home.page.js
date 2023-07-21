import "bootstrap/dist/css/bootstrap.min.css"  // css import
import { Col, Container, Row } from "react-bootstrap";
import "./home-page.layout.css";
import eqlogo from "../assets/images/eqlogo.png"
import "bootstrap";
import slider1 from "../assets/images/slider1.jpg";
import slider2 from "../assets/images/slider1.jpg";
import slider3 from "../assets/images/slider1.jpg";
import slider4 from "../assets/images/slider1.jpg";
import slider5 from "../assets/images/slider1.jpg";

const HomePage = () => {



    return (<>

<div className="wrapper">
        
            <div className="top-bar">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12">
                            <div className="logo">
                                <a href="/#">
                                    <img src="https://equintl.demo.radiantnepal.com/uploads/icons/1680080026_eqlogo.png" alt="" />
                                     
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-7 d-none d-lg-block">
                            <div className="row">
                                <div className="col-4">
                                    <div className="top-bar-item" 
                                    //style="justify-content: flex-end;"
                                    >
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
            
            <div className="nav-bar nav-sticky">
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
                                            <a href="/#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">About</a>
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

            
          
    <div className="normal-bg subheader" 
    // style="background-image: url('/website/img/service-banner.jpg');"
    >
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="subheader-content">
                        <h1 className="page-title text-white fw-600">Equator International</h1>
                        <ul className="custom-flex breadcrumb">
                            <li><a href="/">Home</a></li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
     

            <div className="container">
                <div className="contact-area-page">
                    <div className="service-title">
                        <h1>Contact Us</h1>
                    </div>
                    <form className="row" action="https://equintl.demo.radiantnepal.com/contact/store" method="post" id="contact-form" enctype="multipart/form-data">
                        <div className="col-lg-6 col-md-12 col-12">
                                                        <div className="form-area">
                                <div className="row">
                                    <input type="hidden" name="_token" value="VhJDRkTSBokzgIqkFQPm6r6KuEffBsFCOtLv99Uf" />                                        <div className="col-6">
                                            <div className="contact-form">
                                                <input type="text" name="first_name" className="form-control" id="inputName4" placeholder="Full Name *" required="" fdprocessedid="qmxtn" />
                                            </div>
            
                                        </div>
            
                                        <div className="col-6">
                                            <div className="contact-form">
                                                <input type="Phone" name="number" className="form-control" id="inputPhone" placeholder="Number *" required="" fdprocessedid="38c91r" />
                                            </div>
            
                                        </div>
                                        <div className="col-12">
                                            <div className="contact-form">
                                                <input type="email" name="email" className="form-control" id="inputemail2" placeholder="Email *" required="" fdprocessedid="ywrse" />
                                            </div>
            
                                        </div>
                                        <div className="col-12">
                                            <textarea className="form-control" rows="5" id="comment" name="message" placeholder="Comment" required=""></textarea>
                                        </div>
                                        <div className="mr-auto">
                                            <button className="btn" type="submit" fdprocessedid="38fbpk">Submit</button>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="form-text-area ">
                                <iframe title="ho"  width="600" height="450" 
                                
                                //</div>style="border:0;"
                                 allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
        
                        </div>
        
        
                    </form>
        
                </div>
            </div>
         
        <div className="footer wow fadeIn" data-wow-delay="0.3s" 
        //style="visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;"
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-contact">
                            <h2>Office Contact</h2>
                            <p><i className="fa fa-map-marker-alt"></i>Gongabu, Kathmandu, Nepal
                            </p>
                            <p><i className="fa fa-phone-alt"></i>+977-1-4986469, +977-1-4986470</p>
                            <p 
                            //</div>style="font-size:15px;"
                            ><i className="fa fa-envelope"></i>equator746@gmail.com</p>
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
                           <iframe title="nn"  width="300" height="150" 
                           //</div>style="border:0;"
                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                           </div>
                    </div>
                </div>
            </div>
            <div className="container copyright">
                <div className="row">
                    <div className="col-md-12">
                        <p >
                            ©  
                            <script>
                                document.write(new Date().getFullYear())
                            </script>2023
                            <a href="/#">Equator International  Pvt. Ltd.</a> All Right Reserved. Developed by <a href="https://radiantnepal.com/">Radiant Infotech Nepal</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        



       
    </div>
    
    
    </>)
}

export default HomePage;