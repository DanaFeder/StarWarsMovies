import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { FilmConsumer } from '../context';


export default class Film extends Component {

    render() {

        const { episode_id, release_date, title, opening_crawl } = this.props.film;
        const srcImg = `../../../img/${episode_id}.jpg`

        return (
            <FilmConsumer>
                {(value) => (
                    <div className="film container">
                        <div className={`movie_card ${(value.favoritesFilms[episode_id - 1]) ? "selected" : ""}`} style={{ background: `url(${srcImg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                            <div className="info_section">
                                <div className="movie_header">
                                    <h1>{title}</h1>
                                    <h4>{release_date}</h4>
                                    <h4>Episode Number {episode_id}</h4>
                                </div>
                                <div className="movie_desc">
                                    <p className="text" data-toggle="tooltip" title={opening_crawl}>
                                        {opening_crawl}
                                    </p>
                                </div>
                                <div className="movie_social">
                                    <ul>
                                        {value.favoritesFilms[episode_id - 1] ?
                                            <i className="fas fa-heart" onClick={() => { value.toggleFavorite(episode_id) }}></i>
                                            : <i className="far fa-heart" onClick={() => { value.toggleFavorite(episode_id) }}></i>}
                                    </ul>
                                </div>
                            </div>
                            <div className="blur_back ave_back"></div>
                        </div>
                    </div>
                )}
            </FilmConsumer>

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
