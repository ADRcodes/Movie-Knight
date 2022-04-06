import { Component } from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Browse from "./pages/Browse/Browse";
import RankedMovies from "./pages/RankedMovies/RankedMovies"


class App extends Component {
  // state = {
  //   isLoggedIn: true
  // }

  // toggleLoggedIn = () => {
  //   this.setState({
  //     isLoggedIn: !this.state.isLoggedIn
  //   })
  // }

  render() {
  return (
    <BrowserRouter>
      <Nav/>
      <Switch>
        <Route path="/" exact component={Browse} />
        <Route path="/ranked-movies" component={RankedMovies} />
      </Switch>
    </BrowserRouter>
  );
  }
}

export default App;

