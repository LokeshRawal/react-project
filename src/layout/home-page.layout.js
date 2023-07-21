import "bootstrap/dist/css/bootstrap.min.css"  // css import
import { Col, Container, Row } from "react-bootstrap";
import "./home-page.layout.css";
import eqlogo from "../assets/images/eqlogo.png"
import "bootstrap";

const HomePageLayout = () => {
    return (<>

        <div className="top-bar">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-12">
                        <div className="logo">
                            <a href="/">
                                <img src="https://equintl.demo.radiantnepal.com/uploads/icons/1680080026_eqlogo.png" alt="" />
                                {/* <img src={eqlogo} alt></img> */}
                            </a>

                        </div>

                    </div>
                    <div className="col-lg-8 col-md-7 d-none d-lg-block">
                        <div className="row">
                            <div className="col-4"></div>
                            <div className="col-4"></div>
                            <div className="col-4"></div>

                        </div>
                    </div>
                </div >
            </div>
        </div>

        {/* Navbar start */}
        <div className="nav-bar">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <a href="#" className="navbar-brand">MENU</a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto">
                            <a href="/home" className="nav-item nav-link active">
                                "Home"
                            </a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                    "About"
                                    ::after
                                </a>
                                <div className="dropdown-menu">
                                    <a href="/aboutus/about-one" className="dropdown-item">About Company</a>
                                    <a href="/aboutus/about-nepal" className="dropdown-item">About Nepal</a>
                                    <a href="/aboutus/recruitment-process-one" className="dropdown-item">Recruitment Process</a>
                                    <a href="/aboutus/message-from-md" className="dropdown-item">Message from MD</a>
                                    <a href="/aboutus/why-us" className="dropdown-item">Why Us?</a>
                                </div>
                            </div>
                            <a href="/job-sectors" className="nav-item nav-link">
                                "Job Sectors"
                            </a>
                            <a href="/recruitment-process" className="nav-item nav-link">
                                "Documentation"
                            </a>
                            <a href="/gallery" className="nav-item nav-link">
                                "Gallery"
                            </a>
                            <a href="/contact" className="nav-item nav-link">
                                "Contact"
                            </a>
                        </div>
                        <div className="ml-auto">
                            <a className="btn" href="https://equintl.demo.radiantnepal.com/jobapply">Apply Now</a>
                        </div>
                    </div>
                </nav>
            </div>

        </div>

        {/* Start Subheader */}

        <div className="normal-bg subheader" style="background-image: url('/website/img/service-banner.jpg');">
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

        {/* Contact Section Start */}

       




{/* <Container fluid className="custom">
            <Row>
                <Col lg={4}>
                    <img src={eqlogo}>
                    </img>
                </Col>
                <Col lg={4}>
                    2
                </Col>
                <Col lg={4}>
                    3
                </Col>
                
            </Row>
        </Container> */}
    </>)
}

export default HomePageLayout;