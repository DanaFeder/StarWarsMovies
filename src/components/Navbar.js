import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { FilmConsumer } from '../context';
import './styles.scss';

export default class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <FilmConsumer>
                    {(value) => (
                        <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
                            <Link to='/' className="nav-link">
                                <img className="logo-img" src={"../../../img/starwars.png"} alt="films"></img>
                            </Link>
                            <ul className="navbar-nav align-items-center">
                                <li className="nav-item ml-5">
                                    <Link to="/" className="nav-link">
                                        All Films
                                    </Link>
                                </li>
                                <li className="nav-item ml-5">
                                    <button className="clean-fav-btn" onClick={() => { value.cleanFav() }}>
                                        Clear Favorites
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    )}
                </FilmConsumer>
            </React.Fragment>
        )
    }
}
