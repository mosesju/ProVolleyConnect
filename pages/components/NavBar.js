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
                        <Link href="/learn">
                            <h3 className="nav-link" >Learn </h3>
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
                </ul>
        </nav>

                
    )
}