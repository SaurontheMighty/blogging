import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateBlog from './components/CreateBlog';
import Details from './components/Details';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Header from './components/Header';
import UserPage from './components/UserPage';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <div className="content">
        <Switch>
          <Route exact path={["/","/blogs"]}>
            <Home />
          </Route>
          <Route path="/blogs/create">
            <CreateBlog />
          </Route>
          <Route path="/blogs/:id">
            <Details />
          </Route>
          <Route path="/users">
            <UserPage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
