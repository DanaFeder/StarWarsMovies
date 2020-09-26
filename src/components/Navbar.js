import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './styles.scss';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/' className="nav-link">
                    {/* <img src={Logo} alt="films" className="navbar-brand" style={{ width: "150px", margin: "10px" }}></img> */}
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            All Films
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/favorites" className="nav-link">
                            My Favorites
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <button className="nav-link">
                            Clean Favorites
                        </button>
                    </li>
                </ul>
            </nav>
        )
    }
}
