import React, { Component } from 'react';
import { FilmConsumer , FilmContext } from '../context';
import Film from './Film';

export default class FilmsList extends Component {
    
    render() {
    
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container text-center text title">
                        <h1>Films list</h1>
                        <div className="row">
                            <FilmConsumer>
                                {(value) => (
                                    value.allFilms.results ?  value.allFilms.results.map(film => {
                                        return <Film key={film.episode_id} film={film} />;
                                    }) : null
                                )}
                            </FilmConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}