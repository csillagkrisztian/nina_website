import { Container, Row, Col, Button } from 'react-bootstrap';
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router-dom';
import './App.css';
import CategoryPage from './components/CategoryPage';
import HomePage from './components/HomePage';
import { ABOUT_ME, GRAPHIC_DESIGN, ILLUSTRATIONS } from './routes';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/work/:category' component={CategoryPage}/>
        <Route exact path="/">
          <HomePage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
