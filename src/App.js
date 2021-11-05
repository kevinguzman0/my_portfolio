import Header from './components/Header/Header'
import Content from './components/Content/Content'
import { Route, Switch, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div id="container-wrap" className="animate__animated animate__fadeIn animate__slow">
        <Switch>
          <Route path="/">
            <header id="header">
              <Header />
            </header>
            <div id="content">
              <Content />
            </div>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
