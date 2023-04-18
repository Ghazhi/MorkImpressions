import { Link } from "@inertiajs/inertia-react";

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg customNav" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                 <img src="template/assets/images/mork/morkLogo.png" alt="morkimpression" style={{height:"3rem"}}/>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                   
                    <ul className="navbar-nav justify-content-between" >
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" href="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/services">
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/portfolio">
                                Portfolio
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
