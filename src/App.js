import ClassNames from './App.module.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import { AppProvider } from "./Context/Context";
import CocktailComponent from "./CocktailComponent/CocktailComponent";
const App = () => {
  return (
    <div className={ClassNames.App}>
      <AppProvider>
        <Router>
          <Header />
          <main className={ClassNames.MainContent}>
            <Switch>
              <Route path="/" exact={true} component={HomePage} />
              <Route path="/cocktail/:id" exact component={CocktailComponent} />
            </Switch>
          </main>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;