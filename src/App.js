import { Component } from "react";
import "./App.scss";
import { BrowserRouter, Route} from "react-router-dom";
import Browse from "./pages/Browse/Browse";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Route path="/" exact component={Browse} />
      </BrowserRouter>
    );
  }
}
export default App;