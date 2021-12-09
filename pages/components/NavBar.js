import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import Link from 'next/link';


export default function NavBar() {
    // {/* <li className="nav-item">
    //                 <a className="nav-link" href="#">Link</a>
    //             </li>
    //             <li className="nav-item dropdown">
    //                 <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //                 Dropdown
    //                 </a>
    //                 <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    //                 <a className="dropdown-item" href="#">Action</a>
    //                 <a className="dropdown-item" href="#">Another action</a>
    //                 <div className="dropdown-divider"></div>
    //                 <a className="dropdown-item" href="#">Something else here</a>
    //                 </div>
    //             </li>
    //             <li className="nav-item">
    //                 <a className="nav-link disabled" href="#">Disabled</a>
    //             </li> */}
    return (
        <nav className="navbar navbar-expand-lg navbar-expand-md navbar-light justify-content-center">
            <div className="container">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar1">
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item">
                            <Link href="/">
                                <h3 className="nav-link" >Home </h3>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/athletes">
                                <h3 className="nav-link" >Athletes </h3>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/stories">
                                <h3 className="nav-link" >Stories </h3>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/parents">
                                <h3 className="nav-link" >Parents </h3>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/agents">
                                <h3 className="nav-link" >Agents </h3>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="https://volleyconnect.ghost.io/#/portal/signup">
                                <button type="button" className="btn btn-primary">Sign Up!</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

                
    )
}