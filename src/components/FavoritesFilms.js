import React, { Component } from 'react';
import Film from './Film';


export default class FavoritesFilms extends Component {

    render() {

        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container text-center text title">
                        <div className="row">
                            <Film></Film>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}