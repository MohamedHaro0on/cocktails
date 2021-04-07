import ClassNames from './App.module.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import { AppProvider } from "./Context/Context";

const App = () => {
  return (
    <div className={ClassNames.App}>
      <AppProvider>
        <Router>
          <Header />
          <Switch>
            <div className={ClassNames.MainContent}>
              <main>
                <Route path="/" exact component={HomePage} />
              </main>
            </div>
          </Switch>
        </Router>
      </AppProvider>

    </div>
  );
}

export default App;