import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { FilmConsumer } from '../context';


export default class Film extends Component {

    render() {

        const { episode_id, release_date, title, opening_crawl } = this.props.film;
        const srcImg = `../../../img/${episode_id}.jpg`

        return (
            <div className="movie_card" style={{ background: `url(${srcImg})` }}>
                <FilmConsumer>
                    {(value) => (
                        <div>
                            <div className="info_section">
                                <div className="movie_header">
                                    <h4>{title}</h4>
                                    <p>{release_date}</p>
                                    <p>Episode Number: {episode_id}</p>
                                </div>
                                <div className="movie_desc">
                                    <p className="text">{opening_crawl}</p>
                                </div>
                                <div className="movie_social">
                                    <ul>
                                        <li>
                                            <div>
                                                {value.favoritesFilms[episode_id-1] ?
                                                    <i className="fas fa-heart" onClick={() => { value.toggleFavorite(episode_id) }}></i>
                                                    : <i className="far fa-heart" onClick={() => { value.toggleFavorite(episode_id) }}></i>}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="blur_back"></div>
                        </div>
                    )}
                </FilmConsumer>
            </div>

        )
    }
}

Film.propType = {
    film: PropTypes.shape({
        id: PropTypes.string,
        date: PropTypes.string,
        title: PropTypes.string,
        opening: PropTypes.string,
    }).isRequired
};
