import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilmsList from './components/FilmsList';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import NavBar from './components/Navbar';
import Cookies from "js-cookie";
import { FilmContext } from './context'



function App() {

  const valueContext = React.useContext(FilmContext)

  const populate = () => {
    // Get films from API and populate favs according to cookie
    let favs = undefined
    let favsString = Cookies.get("favList")
    if (favsString !== undefined) {
      favs = JSON.parse(favsString)
    }

    fetch(`https://swapi.dev/api/films/`, {
      method: 'get',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(function (response) {
      return response.json()
    }).then(function (data) {
      valueContext.updateFilms(data)
    }).then(() => {
      valueContext.initFavoriteFilms(favs)
    })
  }

  React.useEffect(() => {
    populate()
  }, [])

  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Router path="/" component={FilmsList} />
      </Switch>
      <FilmsList />
    </React.Fragment>
  )
}

export default App;
