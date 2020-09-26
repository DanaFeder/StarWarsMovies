import React, { Component } from 'react';
import Cookies from "js-cookie";

const FilmContext = React.createContext();


class FilmProvider extends Component {
    state = {
        allFilms: [],
        favoritesFilms: [],
    };

    //Initialize favoritesFilms according to cookie
    initFavoriteFilms = (savedFav) => {
        let favList = []
        let size = this.state.allFilms.count
        if (savedFav !== undefined) {
            favList = [...savedFav]
        }
        else {
            for (let i = 0; i < size; i++) {
                favList.push(false);
            }
        }
        this.setState(() => { return { favoritesFilms: favList } })
    }

    // Populate allFilms state
    updateFilms = (filmList) => {
        this.setState(() => { return { allFilms: filmList } })
    }

    // Toggle movie is favorite
    toggleFavorite = (id) => {
        let fav = [...this.state.favoritesFilms];
        fav[id-1] = !fav[id-1]
        Cookies.set("favList", JSON.stringify(fav))
        this.setState(() => { return { favoritesFilms: fav } })

    }

    cleanFav = () => {
        let favList = []
        let size = this.state.allFilms.count
        for (let i = 0; i < size; i++) {
            favList.push(false);
        }
        Cookies.set("favList", JSON.stringify(favList))
        this.setState(() => { return { favoritesFilms: favList } })
    }

    render() {
        return (
            <FilmContext.Provider value={{
                ...this.state,
                updateFilms: this.updateFilms,
                initFavoriteFilms: this.initFavoriteFilms,
                toggleFavorite: this.toggleFavorite,
                cleanFav: this.cleanFav,
            }}>
                {this.props.children}
            </FilmContext.Provider>
        )
    }
}

const FilmConsumer = FilmContext.Consumer;

export { FilmProvider, FilmConsumer, FilmContext };