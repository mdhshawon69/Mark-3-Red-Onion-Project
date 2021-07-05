import FoodCard from '../FoodCard/FoodCard';
import {
  FoodNav,
  FoodNavContainer,
  FoodNavItem,
  FoodNavLink,
  FoodItemsContainer,
  CheckOutBtn,
} from './FoodContainer.elements';
import { filterFoods } from '../../redux/actions/actions';
import { connect } from 'react-redux';

const FoodContainer = (props) => {
  const { filterFoods, selectedFoods, cart } = props;

  const handleClick = () => {
    cart.length ? console.log('clicked') : console.log();
  };

  return (
    <div>
      <FoodNavContainer>
        <FoodNav>
          <FoodNavItem>
            <FoodNavLink to='/#' onClick={() => filterFoods('breakfast')}>
              BREAKFAST
            </FoodNavLink>
          </FoodNavItem>
          <FoodNavItem>
            <FoodNavLink to='/#' onClick={() => filterFoods('lunch')}>
              LUNCH
            </FoodNavLink>
          </FoodNavItem>
          <FoodNavItem>
            <FoodNavLink to='/#' onClick={() => filterFoods('dinner')}>
              DINNER
            </FoodNavLink>
          </FoodNavItem>
        </FoodNav>
      </FoodNavContainer>
      <FoodItemsContainer>
        {selectedFoods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
        <CheckOutBtn cart={cart}>Checkout your food</CheckOutBtn>
      </FoodItemsContainer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedFoods: state.selectedFood,
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  filterFoods: filterFoods,
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodContainer);
