import { Link } from "react-router-dom";

export default function Header(){
    return (
        <>
            <header className="header_section">
                    <div className="header_top">
                        <div className="container">
                            <div className="contact_nav">
                                <a href="">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <span>
                                        Call : +01 123455678990
                                    </span>
                                </a>
                                
                                <a href="">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <span>
                                        Email : demo@gmail.com
                                    </span>
                                </a>
                                <a href="">
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    <span>
                                        Location
                                    </span>
                                </a>
                                {/* <Link to={''}>

                                </Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="header_bottom">
                        <div className="container-fluid">
                            <nav className="navbar navbar-expand-lg custom_nav-container ">
                                <a className="navbar-brand" href="index.html">
                                    <img src="images/logo.png" alt="" />
                                </a>


                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className=""> </span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <div className="d-flex mr-auto flex-column flex-lg-row align-items-center">
                                        <ul className="navbar-nav  ">
                                            <li className="nav-item active">
                                                {/* <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a> */}
                                                <Link className="nav-link" to={'/'}>Home <span className="sr-only">(current)</span></Link>
                                            </li>
                                            <li className="nav-item">
                                                {/* <a className="nav-link" href="about.html"> About</a> */}
                                                <Link className="nav-link" to={'/about'}>About</Link>
                                            </li>
                                            <li className="nav-item">
                                                {/* <a className="nav-link" href="treatment.html">Treatment</a> */}
                                                <Link className="nav-link" to={'/treatment'}>Treatment</Link>
                                            </li>
                                            <li className="nav-item">
                                                {/* <a className="nav-link" href="doctor.html">Doctors</a> */}
                                                <Link className="nav-link" to={'/teams'}>Teams</Link>
                                            </li>
                                            <li className="nav-item">
                                                {/* <a className="nav-link" href="testimonial.html">Testimonial</a> */}
                                                <Link className="nav-link" to={'/testimonial'}>Testimonial</Link>
                                            </li>
                                            <li className="nav-item">
                                                {/* <a className="nav-link" href="contact.html">Contact Us</a> */}
                                                <Link className="nav-link" to={'/contact'}>Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="quote_btn-container">
                                        <a href="">
                                            <i className="fa fa-user" aria-hidden="true"></i>
                                            <span>
                                                Login
                                            </span>
                                        </a>
                                        <a href="">
                                            <i className="fa fa-user" aria-hidden="true"></i>
                                            <span>
                                                Sign Up
                                            </span>
                                        </a>
                                        <form className="form-inline">
                                            <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                                <i className="fa fa-search" aria-hidden="true"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
        </>
    )
}