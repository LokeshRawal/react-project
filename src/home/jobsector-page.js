import React from "react";
import { NavDropdown } from "react-bootstrap";

const JobSectors = () => {

    const divStyle = {
        backgroundImage: "url('/uploads/banner_image/1676546291_Manufacturing.jpg')",
    };
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
        </div>

        {/* nav bar ends here */}

        <div className="container">
            <div className="job-sectors-area">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <a href="/food">
                            <div className="bg-items">
                                <div className="items" >
                                    <div className="job-sector-title">
                                        <p>Manufacturing</p>
                                    </div>

                                    <div className="tl5"></div>
                                    <div className="br5"></div>
                                    <div className="details">
                                        <p>Manufacturing</p>
                                        <h6>Read more</h6>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <a href="/security-guards">
                            <div className="bg-items">
                                <div className="items" style={divStyle}>

                                    <div className="job-sector-title">
                                        <p>Security Guards</p>
                                    </div>

                                    <div className="tl5"></div>
                                    <div className="br5"></div>
                                    <div className="details">
                                        <p>Security Guards</p>
                                        <h6>Read more</h6>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <a href="/cleaning">
                            <div className="bg-items">
                                <div className="items" >
                                    <div className="job-sector-title">
                                        <p>Cleaning Section</p>
                                    </div>

                                    <div className="tl5"></div>
                                    <div className="br5"></div>
                                    <div className="details">
                                        <p>Cleaning Section</p>
                                        <h6>Read more</h6>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <a href="/manufacture-company">
                            <div className="bg-items">
                                <div className="items" >
                                    <div className="job-sector-title">
                                        <p>Cunstruction</p>
                                    </div>

                                    <div className="tl5"></div>
                                    <div className="br5"></div>
                                    <div className="details">
                                        <p>Cunstruction</p>
                                        <h6>Read more</h6>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <a href="/engineering-and-construction">
                            <div className="bg-items">
                                <div className="items">
                                    <div className="job-sector-title">
                                        <p>Engineering and Construction Personnel</p>
                                    </div>

                                    <div className="tl5"></div>
                                    <div className="br5"></div>
                                    <div className="details">
                                        <p>Engineering and Construction Personnel</p>
                                        <h6>Read more</h6>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <a href="/salese-service">
                            <div className="bg-items">
                                <div className="items" >
                                    <div className="job-sector-title">
                                        <p>Sales &amp; Service Personnel</p>
                                    </div>

                                    <div className="tl5"></div>
                                    <div className="br5"></div>
                                    <div className="details">
                                        <p>Sales &amp; Service Personnel</p>
                                        <h6>Read more</h6>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="pagination-wrapper" >
                <ul className="pagination" role="navigation">

                    <li className="page-item disabled" aria-disabled="true" aria-label="« Previous">
                        <span className="page-link" aria-hidden="true">‹</span>
                    </li>





                    <li className="page-item active" aria-current="page"><span className="page-link">1</span></li>
                    <li className="page-item"><a className="page-link" href="https://equintl.demo.radiantnepal.com/job-sectors?page=2">2</a></li>


                    <li className="page-item">
                        <a className="page-link" href="https://equintl.demo.radiantnepal.com/job-sectors?page=2" rel="next" aria-label="Next »">›</a>
                    </li>
                </ul>

            </div>
        </div>
    </>)
}

export default JobSectors;