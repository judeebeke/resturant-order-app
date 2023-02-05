import React, {useContext} from 'react';
import MealItemForm from './MealItemForm';
import classes from "./MealItem.module.css";
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
  const cartContxt = useContext(CartContext);

  const addToCartHandler = (amount) => {
        cartContxt.addItem({
          id: props.id,
          name: props.name,
          amount: amount,
          price: props.price
        })
      }

  return (
      <li className={classes.meal}>
          <div>
              <h3>{props.name}</h3>
              <div className={classes.description}>{props.description}</div>
              <span className={classes.price}>{`$${props.price.toFixed(2)}`}</span>
          </div>
          <div>
             <MealItemForm id={props.id} addToCart={addToCartHandler} /> 
          </div>
    </li>
  )
}

export default MealItem;
