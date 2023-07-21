import { NavDropdown, Row, Col } from "react-bootstrap";

const DocumentationPage = () => {
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
                                    <div className="top-bar-item">
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
                                            <p>
                                                <a href="mailto:equator746@gmail.com">equator746@gmail.com</a>
                                            </p>
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
                        <a href="#/" className="navbar-brand">MENU</a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto">
                                <a href="/home" className="nav-item nav-link  active  ">
                                    Home
                                </a>
                                {/* <div className="nav-item dropdown">
                                    <a href="#/" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">About</a>
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
                                </div> */}

                                <NavDropdown title="About" id="about-dropdown" >
                                    <NavDropdown.Item href="/aboutus/about-one" className="dropdown-item">About Company</NavDropdown.Item>
                                    <NavDropdown.Item href="/aboutus/about-nepal" className="dropdown-item">About Nepal</NavDropdown.Item>
                                    <NavDropdown.Item href="/aboutus/recruitment-process-one" className="dropdown-item">Recruitment Process</NavDropdown.Item>
                                    <NavDropdown.Item href="/aboutus/message-from-md" className="dropdown-item">Message From MD</NavDropdown.Item>
                                    <NavDropdown.Item href="/aboutus/why-us" className="dropdown-item">Why Us?</NavDropdown.Item>

                                </NavDropdown>
                                <a href="/job-sectors" className="nav-item nav-link  ">
                                    Job Sectors
                                </a>
                                {/* <Nav>
                                        <Nav.Link href="/job-sectors">
                                            Job Sectors
                                        </Nav.Link>
                                    </Nav> */}
                                <a href="/documentation" className="nav-item nav-link  ">
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
                                {/* <Button className="btn">Add me</Button> */}
                            </div>


                        </div>

                    </nav>

                </div>

            </div>

            <Row>
                <Col>
                    <h3 style={{ textAlign: "center", marginBottom:"50px", marginTop:"30px" }}>DOCUMENTATION</h3>
                </Col>

            </Row>
            

            <div className="row " style={{marginLeft:"150px"}} >
                <div className="col-lg-8 col-md-8 col-sm-12">
                    <div className="recu-pro-content">
                        <strong>From Qatar. Kuwait, Bahrain, Oman, Lebanon and UAE</strong>
                        <ul>
                            <li>Demand Letter</li>
                            <li>Power of Attorney</li>
                            <li>Agency Agreement</li>
                            <li>Guarantee Letter</li>
                            <li>Employment Contract</li>
                            <li>Chamber of Commerce / Nepal Embassy (in some case)</li>
                        </ul>

                        <p><strong>From Malaysia</strong></p>

                        <ul>
                            <li>Demand Letter</li>
                            <li>Power of Attorney</li>
                            <li>Agency Agreement</li>
                            <li>Letter written by company to Malaysian Embassy in Nepal</li>
                            <li>Employment Contract</li>
                            <li>A?davit</li>
                            <li>KDN Approval (From Ministry of Labor)</li>
                            <li>Translation Letter (From Ministry of Labor or Ministry of Home)</li>
                            <li>Notary Public or Attestation of Nepal Embassy KL</li>
                            <li>Pro?le of Company.</li>
                        </ul>

                        <p><strong>From Saudi Arabia</strong></p>

                        <ul>
                            <li>Demand Letter</li>
                            <li>Power of Attorney</li>
                            <li>Agency Agreement</li>
                            <li>Guarantee later</li>
                            <li>Employment Contract</li>
                            <li>Visa slip</li>
                            <li>Consulate Authorization</li>
                            <li>Commercial Registration</li>
                            <li>COC/MOFA/Nepal - Ambassy (in some case)</li>
                        </ul>
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
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7062.5908927051905!2d85.30563875390625!3d27.739031899999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb192769445433%3A0x9b19ae864def10a7!2sEquator%20International%20P.%20Ltd.!5e0!3m2!1sen!2snp!4v1680172383936!5m2!1sen!2snp" width="300" height="150" allowfullscreen="" loading="lazy" title="hello" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                                    <a href="#/">Equator International  Pvt. Ltd.</a> All Right Reserved. Developed by <a href="https://radiantnepal.com/">Radiant Infotech Nepal</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

        </div>

    </>)
}

export default DocumentationPage;