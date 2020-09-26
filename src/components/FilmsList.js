import React, { Component } from 'react';
import { FilmConsumer } from '../context';
import Film from './Film';

export default class FilmsList extends Component {
    
    render() {
    
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container films-list">
                        <h1 className="main-title">Films list</h1>
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