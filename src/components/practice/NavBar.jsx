import React from 'react';
import PropTypes from 'prop-types';

const NavBar = (props) => {
    return (
        <div className=''>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid container">
                    <a className={`navbar-brand text-${props.mode === 'white' ? 'black' : 'white'}`} href="#">Navbar</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <a className={`nav-link text-${props.mode === 'white' ? 'black' : 'white'} active`} aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item text-white">
                                <a className={`nav-link disabled text-${props.mode === 'white' ? 'black' : 'white'}`}>Disabled</a>
                            </li>
                        </ul>
                        {/* Uncomment if needed
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            */}
                        <div className={`form-check form-switch text-${props.mode === 'white' ? 'black' : 'white'} `}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                          <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> switch darkmode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

// Setting PropTypes to ensure `mode` is passed correctly
NavBar.propTypes = {
    mode: PropTypes.string.isRequired,
};

export default NavBar;
