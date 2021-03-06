import Homepage from './components/Homepage/Homepage';
import Navigation from './components/Navigation/Navigation';
import GlobalStyles from './components/GlobalStyles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import FoodDetails from './components/FoodDetails/FoodDetails';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import './App.css';
import Cart from './components/Cart/Cart';
import DeliveryInfo from './components/DeliveryInfo/DeliveryInfo';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route path='/details/:foodId'>
          <FoodDetails />
        </Route>
        <Route path='/login'>
          <LogIn />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/order-placed'>
          <DeliveryInfo />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
