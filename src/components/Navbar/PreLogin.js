import React from 'react';
import { Link } from 'react-router-dom';

const PreLogin = () => {
    return(

            <div id="navbarItems" className="navbar-menu">
                <div className="navbar-end top-margin-navbar nav-col">

                    {
                        // <Link to="/about" className="navbar-item">
                            // About
                        // </Link>
                    }

                    <Link to="/support" className="navbar-item">
                        Support
                    </Link>

                    <div className="navbar-item">
                        <div className="buttons">
                            {
                                // <Link to="/signup" className="button is-warning">
                                    // <strong>Sign up</strong>
                                // </Link>
                            }
                            <Link to="/login" className="button is-dark">
                                Log in
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

    );
}

export default PreLogin;
